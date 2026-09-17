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

def _get_mem_db():
    global _mem_client
    if _mem_client is None:
        from mongomock_motor import AsyncMongoMockClient
        _mem_client = AsyncMongoMockClient()
    return _mem_client["smartstocks"]

def get_db():
    global _client
    if _client is None:
        if MONGO_URI:
            try:
                from motor.motor_asyncio import AsyncIOMotorClient
                _client = AsyncIOMotorClient(
                    MONGO_URI,
                    tlsCAFile=certifi.where(),
                    serverSelectionTimeoutMS=2500,
                    connectTimeoutMS=2500
                )
            except Exception as e:
                logger.warning(f"MongoDB connection init failed: {e}. Using in-memory store.")
                return _get_mem_db()
        else:
            return _get_mem_db()

    return _client["smartstocks"]

def get_fallback_db():
    return _get_mem_db()