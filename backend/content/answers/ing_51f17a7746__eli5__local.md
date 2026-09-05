---
qid: ing_51f17a7746__eli5__local
question: 'Explain: Types of Indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 213
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:02-05:00'
sources: []
---

Imagine every piece of data in Uber’s system as a book on a gigantic shelf that can hold trillions of pages. A **ledger** is the master copy of all these pages, written once and never changed. To find a specific page quickly, the ledger uses an **index**—a tiny lookup table that tells you exactly where on the shelf the requested page sits.

Uber’s LedgerStore builds many such indexes at the same time, like having separate “bookshelves” for different topics: one for user IDs, another for trip times, another for vehicle locations. Each index is a lightweight map (think of it as a tiny, sorted list of pointers) that points back to the master ledger. Because each index is independent and only stores addresses, the system can create trillions of them without duplicating all the data—just like having millions of bookmarks in one giant library. This lets Uber retrieve any piece of information almost instantly, no matter how vast the dataset becomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
