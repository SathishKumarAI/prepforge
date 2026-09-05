---
qid: ing_e0db4f1e42__eli5__local
question: 'Explain: Caching — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 195
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:34-05:00'
sources: []
---

Imagine your database is a busy library with one librarian who must hand out every book you ask for. As more people come, the librarian gets overwhelmed and the line grows long. **Caching** is like putting copies of the most requested books on a shelf right next to the entrance. When someone asks for a popular title, they can grab it immediately without waiting for the librarian.

In system design, we store frequently‑used data in fast, inexpensive memory (the “shelf”) instead of always querying the main database (the “librarian”). If a cache miss happens—someone requests something not on the shelf—we fetch from the database and then copy it into the cache for future use. This reduces load on the database, speeds up responses, and lets you scale by adding more cache servers without touching the core data store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
