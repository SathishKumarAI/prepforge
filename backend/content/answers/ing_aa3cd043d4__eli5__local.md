---
qid: ing_aa3cd043d4__eli5__local
question: 'Explain: Read-optimized permanent index table — How LedgerStore Supports
  Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 223
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:31-05:00'
sources: []
---

Imagine a library that can instantly find every book you ever read, even if it has trillions of titles.  
**Read‑optimized permanent index table** is like the library’s giant “call‑number” map that lives on a super‑fast storage drive (the LedgerStore).  

*Permanent* means the map never disappears—once a book (data row) is added, its address stays in the map forever.  
*Read‑optimized* means the map is built so you can look up a book’s location with just one quick glance, not by flipping through pages.  
The LedgerStore keeps this map on solid‑state drives that are designed for many tiny read requests and very few writes, so even if there are trillions of entries, each lookup takes only milliseconds.

So Uber uses the LedgerStore as its “call‑number” engine: a permanent, lightning‑fast index that lets millions of services find data instantly without slowing down the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
