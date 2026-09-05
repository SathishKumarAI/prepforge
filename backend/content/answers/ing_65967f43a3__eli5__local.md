---
qid: ing_65967f43a3__eli5__local
question: 'Explain: Late Interaction: ColBERT v2 — Embedding Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 199
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:14-05:00'
sources: []
---

Imagine you’re at a library where every book is first turned into a short “bookmark” that tells the librarian what the book’s about.  
In **ColBERT v2** (a modern search engine), those bookmarks are *embeddings*—tiny numerical fingerprints created by an AI model. When you ask a question, the system turns your words into its own embedding and then looks for the most similar bookmarks in the library.  

The “late interaction” part means ColBERT v2 first builds all these embeddings independently (like preparing every bookmark before anyone asks anything). Only when a query comes does it compare the query’s fingerprint to the stored ones, deciding which books are relevant. This two‑step process lets the system handle many queries quickly while still using deep AI knowledge to understand meaning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
