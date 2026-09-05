---
qid: ing_2e03731d8c__eli5__local
question: 'Explain: Introduction — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 279
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:41-05:00'
sources: []
---

Think of the LedgerStore as a gigantic, super‑fast library that keeps every single ride record in tiny, perfectly numbered books. Each book is a *ledger*—a block of data written once and never changed. Inside each ledger are “index shelves” that point to exactly where a particular piece of information (like a driver’s ID or a pickup location) lives.

To handle trillions of these index shelves, Uber uses two tricks:

1. **Chunked shelves** – Instead of one giant shelf, the library breaks it into many small sections called *segments*. Each segment holds only a few million indexes, so looking up an entry is like flipping to a specific page instead of searching through an entire tome.

2. **Tree‑like routing** – The library’s map (a B‑tree) tells you which segment contains the index you need. You start at the root, follow one branch, then another, and after about 10 steps you’re on the exact shelf that holds your data.

Because every ledger is immutable and segments are written sequentially, the system can keep adding new rides without rearranging old books, giving Uber a reliable way to support trillions of searchable entries while still answering queries in milliseconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
