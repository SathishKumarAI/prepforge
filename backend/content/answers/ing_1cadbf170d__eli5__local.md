---
qid: ing_1cadbf170d__eli5__local
question: 'Explain: Cache Layer (Redis) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 204
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:21:38-05:00'
sources: []
---

Imagine a library that keeps a giant book of all the books it owns. The main catalog (the database) is huge and slow to read from every time someone asks for a book’s location. To make things faster, the librarian keeps a small, quick‑to‑reach card deck (Redis). When a patron asks for a short code that points to a long URL, the system first looks in this card deck. If it finds the card, the answer is given instantly—no need to go back to the dusty main catalog. Only when a card isn’t there does the librarian fetch the full record from the main catalog and then write a new card for future visits. Thus Redis acts as a “cache layer,” storing recent short‑to‑long URL mappings so that most lookups are lightning fast while keeping the core database lean and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
