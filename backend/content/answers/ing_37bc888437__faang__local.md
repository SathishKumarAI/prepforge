---
qid: ing_37bc888437__faang__local
question: 'Explain: Partitioning — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 470
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:53:39-05:00'
sources: []
---

**Partitioning – A Quick‑Guide to Database Performance**

| Step | What to Cover |
|------|---------------|
| **Clarify** | “We’re discussing horizontal partitioning (sharding) of relational tables to improve query throughput and manageability.”  Ask: *Which workload? OLTP vs. analytics?*  Do we need strong consistency or can we tolerate eventual? |
| **Approach** | 1️⃣ Identify a natural key (user_id, date). <br>2️⃣ Decide on range vs. hash partitioning based on access patterns. <br>3️⃣ Create sub‑tables or schemas; add `PARTITION BY` clause. <br>4️⃣ Use indexes per partition and global “covering” indexes if supported. |
| **Depth** | • *Range*: good for time series (daily logs).  Query predicates must include the range column to avoid full scans. <br>• *Hash*: distributes evenly; great for key‑value lookups. <br>• *Hybrid*: hash on a key, then range inside each bucket. <br>Complexity: partition pruning reduces I/O from O(N) partitions to 1–k.  Index maintenance cost is amortized across partitions. |
| **Edge Cases** | • Skewed data → hot partitions; remediate with re‑hashing or adding a “shard key”. <br>• Joins across partitions may trigger cross‑partition scans unless foreign keys are partitioned similarly. <br>• Schema changes (adding columns) must propagate to all partitions. |
| **Optimize & Communicate** | • Use *metadata tables* to track partition ranges for monitoring. <br>• Automate rebalancing with cron jobs or CDC pipelines. <br>Explain trade‑offs: more partitions → less data per scan but higher overhead in catalog and maintenance.  Summarize that careful key selection, pruning, and index design are the levers for performance gains. |

*This cheat‑sheet captures the core ideas a FAANG interviewer expects: clear framing, systematic planning, technical depth, edge‑case awareness, and concise communication.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
