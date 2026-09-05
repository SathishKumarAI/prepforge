---
qid: ing_bba2a6d0fe__eli5__local
question: 'Explain: Google System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 226
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:47-05:00'
sources: []
---

Imagine a giant library that must answer any question instantly. In Google’s “Faang recent questions” challenge, the system is like a super‑fast librarian who can fetch and rank books from millions of shelves without looking at every page.

**Key idea:** The data is split into many small “shards” (think book sections). Each shard stores only part of the information. When someone asks a question, the librarian first looks up which shards have relevant pages, then pulls those pages in parallel and stitches them together to form the final answer. This avoids scanning the whole library.

**Unavoidable terms explained**

- **Shard:** A partition of data that lives on its own server; like a specific shelf in the library.
- **Index:** A quick lookup table that tells you which shard holds what information, similar to a book catalog.

By sharding and indexing, Google’s design keeps response times low even when millions of users ask questions every second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
