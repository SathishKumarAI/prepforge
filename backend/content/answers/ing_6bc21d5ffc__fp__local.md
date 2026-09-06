---
qid: ing_6bc21d5ffc__fp__local
question: 'Explain: Partial or Filtered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 364
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:53:29-05:00'
sources: []
---

**Why a *partial* (or *filtered*) index exists**

In relational systems an ordinary B‑tree index stores a key entry for every row that satisfies the query’s `WHERE` clause.  
If a predicate is highly selective—say only 1 % of rows match—the full index becomes almost as large as the table, yet it still occupies space and slows writes.

The core optimization problem is: *minimise disk I/O while preserving exactness for the queries we care about*.  
A partial index solves this by **materialising only those tuples that satisfy a user‑supplied predicate**.  
Formally, let \(S\) be the set of all rows and \(P \subseteq S\) the subset where the predicate holds.  
The partial index stores keys for \(P\) only, so its size is \(|P|\), not \(|S|\).  
During query execution, the optimizer can safely replace a full scan over \(S\) with a probe into this smaller structure because any row outside \(P\) cannot satisfy the predicate.

**Non‑obvious insight**

Many people think partial indexes simply *cut cost*. In fact, they also **reduce contention on write paths**.  
Because only inserts/updates that hit the predicate trigger index modifications, the latch pressure and log volume shrink proportionally to \(|P|/|S|\).  
Thus a well‑chosen filtered index can simultaneously lower read latency and write overhead—an elegant trade‑off rooted in selective probability rather than mere storage savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
