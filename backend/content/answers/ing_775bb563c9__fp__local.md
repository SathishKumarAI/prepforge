---
qid: ing_775bb563c9__fp__local
question: 'Explain: Unique, Primary, and Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 432
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:18:22-05:00'
sources: []
---

**Why indexes matter**

A database query boils to a *search* over rows that satisfy a predicate.  
If we think of the table as an array of records \(R\), the cost is proportional to how many entries we must examine: \(O(|R|)\) for a full scan.  
An index turns this linear scan into a *logarithmic* search by providing a secondary data structure that maps key values to row locations.

**Primary vs unique vs clustered**

* **Unique** – guarantees the key value appears at most once.  
  Mathematically, it enforces injectivity of the mapping \(f:\text{Key}\rightarrow\text{RowPointer}\).  
  This allows the optimizer to skip duplicate checks and to use “index-only” scans: if a column is unique, any row pointer retrieved from the index is guaranteed to be correct.

* **Primary** – is a *unique* key that also designates the table’s identity.  
  It must exist for every row and cannot be null.  
  From an information‑theoretic view, the primary key supplies a *canonical hash* of each row; the database can therefore use it as a deterministic partition key in sharding or replication.

* **Clustered** – dictates physical order.  
  When a table is clustered on key \(k\), the heap is sorted by \(k\); the index becomes the data itself.  
  This reduces I/O for range queries because adjacent rows share disk pages, exploiting spatial locality (a geometric property of sorted sequences).

**Non‑obvious insight**

Many people think “clustered = better.”  
But a clustered index can *hurt* if the key is highly selective and updates are frequent: every insert or delete forces page splits, inflating fragmentation.  
A well‑chosen non‑clustered unique index often delivers lower write overhead while still giving \(O(\log n)\) reads, especially when combined with covering indexes that hold all needed columns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
