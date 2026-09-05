---
qid: ing_a86614b52e__eli5__local
question: 'Explain: Products — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 242
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:02-05:00'
sources: []
---

Imagine every ride Uber records as a tiny book page that lists who got picked up, where they went, and how long the trip lasted. A *ledger* is like a giant filing cabinet that keeps all those pages in order so you can always find one later.  
The trick is that each page can be found by many different clues—by passenger ID, driver ID, time of day, or city zone. If the cabinet had only one drawer for each clue, it would overflow; millions of trips would jam a single slot. LedgerStore solves this by using *indexes*, which are tiny “lookup books” that point from a clue (e.g., “driver 42”) straight to the exact page in the filing cabinet.  
To support trillions of such clues, LedgerStore builds many layers: it splits each lookup book into shards that fit on separate servers, and it keeps copies (replicas) so no single server becomes a bottleneck or a single point of failure. Thus Uber can instantly retrieve any trip detail—no matter which clue you use—even when the system holds billions of trips.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
