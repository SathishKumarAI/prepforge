---
qid: ing_f9b4b4abc1__eli5__local
question: 'Explain: Write Path — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 301
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:05-05:00'
sources: []
---

Think of LedgerStore like a giant library that can keep **trillions of book‑indexes** without ever running out of space.  
Every time a ride is requested or completed, the system writes a tiny “page” (a record) to its ledger—just as a librarian would jot down a new book on a shelf. That page contains all the data needed for later searches: driver ID, rider ID, time, location, and so on.

When someone asks for a specific ride or wants to find every trip that started in a particular city, LedgerStore instantly looks up the corresponding “index” (like flipping straight to the right section of an encyclopedia). It does this because it keeps a **hash table**—a super‑fast lookup map—where each key (e.g., driver ID) points directly to all pages that mention that key.

The trick is that LedgerStore stores every page on disk in a single, append‑only log. This guarantees durability: once the log writes a page, it can never be lost. The hash table lives in memory and updates lazily; if the machine restarts, the log is replayed to rebuild the table.

So, just as a librarian keeps a master list that tells you exactly where every book sits, LedgerStore’s ledger plus hash table let Uber query trillions of rides instantly while ensuring no data disappears.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
