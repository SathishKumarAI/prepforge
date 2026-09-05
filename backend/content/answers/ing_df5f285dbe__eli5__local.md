---
qid: ing_df5f285dbe__eli5__local
question: 'Explain: Conclusion — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 236
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:21-05:00'
sources: []
---

Imagine a gigantic library where every book is split into tiny pages, and each page can be looked up by thousands of different clues—author, title, year, genre, even the color of the cover. **LedgerStore** is like that library’s super‑organized filing system.

It stores data in *ledger entries*, each entry being a small, immutable record (think of it as a single page). Instead of keeping one giant index, LedgerStore builds many tiny, highly efficient indexes—one for every possible search key. These indexes are *sharded* across thousands of servers, so each server only handles a fraction of the total keys. Because the data is split into small, independently updatable ledgers, adding new indexes or updating existing ones doesn’t slow down the whole system.

This design lets Uber query **trillions of indexes** in real time: every ride request can be found instantly by driver ID, location, time, and even by customer preferences—all thanks to LedgerStore’s distributed, ledger‑based indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
