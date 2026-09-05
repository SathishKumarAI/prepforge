---
qid: ing_93ed5f836c__eli5__local
question: 'Explain: Migrate to ILM — Index lifecycle management (ILM) in Elasticsearch
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 282
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:11-05:00'
sources: []
---

Imagine your data is a library of books that keeps growing every day. In the beginning, you want each new book on a shiny, fast shelf so readers can find it instantly. Later, after a few months, those books are rarely checked out; you’d rather keep them in a quieter, cheaper storage area to save space and cost. Index Lifecycle Management (ILM) is like an automated librarian that moves your Elasticsearch indexes (the “books”) through different stages—hot, warm, cold, and delete—according to how often they’re accessed.

**Key terms explained simply:**
- **Index** – a collection of documents in Elasticsearch, like a book.
- **Hot phase** – the newest, most active data on fast storage.
- **Warm phase** – older data still used sometimes, moved to slower but cheaper disks.
- **Cold phase** – rarely accessed data kept for archival purposes.
- **Delete phase** – automatically purging old data that is no longer needed.

With ILM, you set rules (policy) telling the system when an index should move from hot to warm, then to cold, and finally be deleted. This keeps your cluster efficient, costs low, and ensures quick access for recent queries—just like a smart librarian keeping the library organized without wasting resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
