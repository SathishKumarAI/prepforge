---
qid: ing_97f058ef8e__eli5__local
question: 'Explain: Design with Docstore — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 225
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:36-05:00'
sources: []
---

Imagine a gigantic library where every book is a piece of data and each page inside a book is an “index” that tells you where something lives.  
At Uber the “LedgerStore” is like a super‑fast librarian who can keep track of **trillions** of such pages without ever losing them.

A *ledger* is just a record of all changes made to the data, written in a strict order so nobody can cheat or miss an update.  
The *Docstore* stores the actual documents (the books). When a new page (index) is added, the librarian writes it into the ledger first and then places the book on the shelf.

Because every change goes through the ledger, the system always knows exactly which page points to which document, no matter how many pages there are. That’s how Uber can support trillions of indexes—each index is a tiny bookmark safely recorded in the ledger, so lookup stays fast and accurate even at massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
