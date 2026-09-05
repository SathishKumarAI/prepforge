---
qid: vq_af79a217be__fp__local
question: when we use select command does it goes to reducer in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 347
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:35-05:00'
sources: []
---

In Hive a `SELECT` is translated into a *logical* query plan that is then turned into a physical plan of **Map** and **Reduce** stages.  
The key question is: *does every `SELECT` invoke a reducer?*  

No, only the operations that require **global aggregation or sorting** do. A plain projection (`SELECT col1, col2 FROM t`) is a **map‑only** job – each mapper reads a split of HDFS, applies the predicate and emits rows directly to the sink.  
When the query contains `GROUP BY`, `ORDER BY`, `DISTINCT`, `JOIN` (hash or sort‑merge), or an aggregate function (`COUNT(*)`, `SUM(col)`), Hive must **shuffle** data so that all keys belonging to the same group end up in one reducer. That shuffle is what we call a *reducer phase*.

Why?  
From an information‑theoretic view, a reducer is needed when the output depends on **global state** (e.g., “how many rows per key?”). Without collecting all records for a key, you cannot compute the correct result. The shuffle step thus embodies the principle of *data locality*: we move data only to where it can be aggregated.

A non‑obvious insight: Hive’s optimizer sometimes **eliminates reducers** even when an aggregate appears by using *partial aggregation* in mappers and a single reducer, or by pushing predicates down so that all rows for a key are already present in one split. Understanding this lets you write queries that avoid unnecessary network traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
