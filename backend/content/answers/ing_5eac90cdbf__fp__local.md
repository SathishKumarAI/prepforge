---
qid: ing_5eac90cdbf__fp__local
question: 'Explain: Consistency — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 319
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:49-05:00'
sources: []
---

**Why consistency matters for a distributed database**

At the heart of any database is *the problem of agreeing on data that lives in many places*.  
If one node says “value = 5” while another says “value = 7”, clients cannot trust the system.  The fundamental question becomes: **how do we guarantee that every read reflects a single, coherent state of all replicas?**  

Cloud Spanner solves this with *True‑Time*—a globally synchronized clock that bounds the uncertainty in event ordering. By knowing that two events are at least Δ milliseconds apart, Spanner can safely decide which write should win without coordination across data centers.  This is a concrete instantiation of the **causality principle**: an operation can only depend on prior operations that causally precede it.  

Spanner’s consistency model is *strongly consistent* (serializable). It guarantees that every transaction appears to execute atomically and in some global order that respects real‑time precedence.  The deeper insight often missed is that **consistency is not about “locking all data” but about *bounding uncertainty* so the system can commit without waiting for distant replicas**.  

Thus, Spanner’s use of True‑Time turns a hard coordination problem into a provably bounded timing problem, enabling high‑throughput, globally distributed transactions while preserving the single‑version illusion that users expect from a relational database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
