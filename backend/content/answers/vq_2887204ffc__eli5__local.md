---
qid: vq_2887204ffc__eli5__local
question: what are the optimisations performed in ADF and ADB ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 278
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:28-05:00'
sources: []
---

Imagine you’re moving a huge collection of books from one library to another.  
**Azure Data Factory (ADF)** is the librarian who plans the trip: she groups books by genre, packs similar ones together, and chooses the fastest train routes. In ADF this means:

- **Data partitioning** – split large files into smaller chunks so several workers can copy at once.  
- **Copy activity tuning** – adjust batch size and concurrency to keep the network busy without overloading it.  
- **Linked service optimization** – use managed identities or cached credentials so each transfer starts quickly.

**Azure Databricks (ADB)** is the workshop where the books are reorganized. It uses:

- **Spark caching** – keeps frequently used data in memory, avoiding repeated disk reads.  
- **Column pruning and predicate push‑down** – only loads columns or rows that matter for a query.  
- **Broadcast joins** – when one table is tiny, it’s sent to every worker so they don’t need to shuffle big tables.

Together, ADF gets the data in efficiently, and ADB processes it with minimal shuffling, just like a well‑coordinated library move.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
