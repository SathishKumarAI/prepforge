---
qid: ing_2823e3061c__eli5__local
question: 'Explain: Size your shards — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 225
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:16-05:00'
sources: []
---

Imagine a giant library that holds every book the world has ever written, but it’s too big to fit on one shelf. To keep things moving fast, we split the collection into many smaller “shelves” called **shards**. Each shard is like a mini‑library that stores a portion of the books and can be handled by its own librarian.

When someone asks for a book (a search query), each librarian checks only their own shelf, finds the relevant copies, and then all librarians send back their answers at once. The library system merges these partial results into one final answer, just as Elasticsearch combines shard responses.

You choose how many shelves to create based on how many books you have and how quickly you need to retrieve them—too few shelves make each librarian overloaded; too many mean extra overhead for coordinating the librarians. Thus, “size your shards” means deciding the right number of these mini‑libraries so searches stay fast and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
