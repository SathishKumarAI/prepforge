---
qid: ing_43ab083efe__eli5__local
question: 'Explain: Highlights — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 231
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:57-05:00'
sources: []
---

Think of every ride that Uber records as a book in a gigantic library.  
Each page (ride) has many “index tags” – the driver’s ID, the rider’s ID, the pickup city, the time stamp, and so on.  
If you want to find all rides for one driver or all trips from a particular city, you need a separate shelf for each tag type.  

A LedgerStore is like a super‑fast filing cabinet that can hold **trillions of these shelves** at once. It stores every index entry as a tiny, immutable record (a “ledger”) that never changes and can be read in parallel by thousands of machines.  
Because each ledger is append‑only and sharded across the cluster, Uber can look up any combination of driver, city, or time instantly, even when there are billions of rides in the system.  

So LedgerStore lets Uber keep a perfect, instant map from every possible search key to all matching rides, no matter how many keys (trillions) it must support.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
