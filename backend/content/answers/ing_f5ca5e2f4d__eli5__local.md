---
qid: ing_f5ca5e2f4d__eli5__local
question: 'Explain: Select your preferred language — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 265
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:48-05:00'
sources: []
---

Imagine a giant library where every book is an event that happened in Uber’s system—like a driver arriving, a passenger booking, or a payment being processed.  
Each event gets a unique ID (a *ledger entry*). To find anything quickly, the library keeps a special index book: for each type of data (e.g., “driver ID” or “trip start time”), it lists all the pages where that data appears.  

But there are **trillions** of such entries, so the index books would be enormous if they were ordinary paper. LedgerStore solves this by:

1. **Sharding** – splitting the big library into many small sections (like separate shelves), each handling a fraction of the data.  
2. **Sparse indexing** – instead of writing every single page number, it writes only key “check‑points” and fills in the gaps on demand.  
3. **Compression & batching** – it packs many index entries together and updates them in bulk, so storage is saved and speed stays high.

The result: a system that can instantly point to any event or attribute even when the whole library contains trillions of pages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
