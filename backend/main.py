"""PrepForge backend — FastAPI. Serves the Q&A bank and the aggregated resource feed.

This file is the app and its middleware. The routes live in two modules and the
bank in a third:

  paths.py           where everything on disk is
  bank.py            assembling and versioning the bank; search rows
  api_questions.py   GET routes that read the bank
  api_content.py     everything that writes, fetches or scrapes
"""
from __future__ import annotations

import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

try:
    from dotenv import load_dotenv  # optional
    load_dotenv()
except Exception:
    pass

import api_content
import api_questions

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")
log = logging.getLogger("prepforge")

app = FastAPI(title="PrepForge API", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
# Everything this API returns is JSON, and JSON of this shape — the same twenty
# keys repeated 18,000 times — is the best case there is for deflate. Measured on
# the real bank: /questions 33.1 MB -> 7.76 MB, /questions/index 3.07 MB ->
# 508 kB. Added AFTER CORS so it sits outside it and compresses the final body.
# minimum_size skips the many sub-kB replies, where the header costs more than
# the saving.
app.add_middleware(GZipMiddleware, minimum_size=1024)

app.include_router(api_questions.router)
app.include_router(api_content.router)
