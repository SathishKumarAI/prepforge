---
qid: ing_ba18dbe3c1__eli5__local
question: 'Explain: Chunked Prefill & RAD-O — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 218
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:06-05:00'
sources: []
---

Think of a big library that wants to answer many questions at once.  
**Chunked Prefill** is like giving the librarian a *chunk* of books (a few pages) ahead of time, so when someone asks a question about those pages she can answer instantly. The chunk is small enough to fit in her memory but large enough to cover several related queries.

**RAD‑O (Retrieval‑Augmented Decoding with One‑pass)** is the librarian’s way of *batching* all the questions that come in at the same time. She reads each question, pulls out the relevant book excerpts, and then writes answers for everyone together, instead of one by one. This saves her time because she only opens a book once and reuses its content.

Together, Chunked Prefill keeps useful information ready, while RAD‑O processes many requests in parallel, making the system fast and efficient—just like a well‑organized librarian handling a rush of visitors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
