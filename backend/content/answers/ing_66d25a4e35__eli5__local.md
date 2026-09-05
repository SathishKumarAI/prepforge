---
qid: ing_66d25a4e35__eli5__local
question: 'Explain: Time-range indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 260
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:19:10-05:00'
sources: []
---

Imagine a library that keeps every book ever written—millions of volumes, each with its own page numbers and dates. Now suppose you want to find all books published in a specific decade or even a single year. You could look through every title one by one, but that would take forever. Instead, the library builds a *time‑range index*: a separate map that points straight from a date (or range of dates) to the exact pages where those books are stored.

In Uber’s LedgerStore, each transaction is stamped with its timestamp and written into a massive data lake. A time‑range index is a lightweight “bookmark” table that records, for every small chunk of time (say, one second), which physical files contain transactions from that period. When a query asks for all events between 3 PM and 4 PM on a particular day, the system looks up only those few bookmarks instead of scanning billions of entries. This trick lets it manage trillions of individual indexes—one per small time slice—while keeping lookups fast, just like a library’s index that instantly tells you where to find every book from any year.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
