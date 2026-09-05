---
qid: ing_4a6f5fc317__eli5__local
question: 'Explain: Index lifecycle management (ILM) in Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 253
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:58-05:00'
sources: []
---

Imagine a library that keeps its books on shelves, but the shelves are made of different materials: some are sturdy oak, others are flimsy cardboard. The librarian decides that new, popular titles should start on the oak shelf (high‑performance storage) so readers can find them quickly. After a year, when those books become less frequently checked out, they’re moved to a cheaper cardboard shelf. Finally, after five years of almost no traffic, the books are either archived in a basement or discarded.

In Elasticsearch, **Index Lifecycle Management (ILM)** does exactly that for data indexes. An “index” is like a book; it stores searchable documents. ILM defines a series of *phases*—**hot**, **warm**, **cold**, and **delete**—and automatically moves an index between them based on age or size. Hot phases use fast SSDs, warm use slower disks, cold uses the cheapest storage, and delete removes old data altogether. This keeps search fast for recent data while saving cost on older, rarely‑accessed data—all without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
