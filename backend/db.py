# db.py — uses real MongoDB if MONGO_URI is set, else in-memory mongomock for local dev
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

_client = None

def get_db():
    global _client
    if _client is None:
        if MONGO_URI:
            from motor.motor_asyncio import AsyncIOMotorClient
            _client = AsyncIOMotorClient(MONGO_URI)
        else:
            # In-memory MongoDB for local development (no MongoDB install needed)
            from mongomock_motor import AsyncMongoMockClient
            _client = AsyncMongoMockClient()

    return _client["smartstocks"]