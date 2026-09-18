# db.py — uses real MongoDB if MONGO_URI is set, with automatic in-memory fallback if DNS/Network fails
import os
import certifi
import logging
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
logger = logging.getLogger("db")

_client = None
_mem_client = None
_use_mem = False

def _get_mem_db():
    global _mem_client
    if _mem_client is None:
        from mongomock_motor import AsyncMongoMockClient
        _mem_client = AsyncMongoMockClient()
    return _mem_client["smartstocks"]

def get_db():
    global _client, _use_mem
    if _use_mem or not MONGO_URI:
        return _get_mem_db()

    if _client is None:
        try:
            from motor.motor_asyncio import AsyncIOMotorClient
            _client = AsyncIOMotorClient(
                MONGO_URI,
                tlsCAFile=certifi.where(),
                serverSelectionTimeoutMS=500,
                connectTimeoutMS=500,
                socketTimeoutMS=500
            )
        except Exception as e:
            logger.warning(f"Failed to initialize Motor client: {e}. Switching to in-memory DB.")
            _use_mem = True
            return _get_mem_db()

    return _client["smartstocks"]

def switch_to_fallback():
    global _use_mem
    _use_mem = True
    return _get_mem_db()

def get_fallback_db():
    return _get_mem_db()