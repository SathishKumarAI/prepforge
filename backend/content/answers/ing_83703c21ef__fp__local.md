---
qid: ing_83703c21ef__fp__local
question: 'Explain: Your data is stored as you can — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 371
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:44:48-05:00'
sources: []
---

**Why the choice of a NoSQL store matters for ML pipelines**

In an ML workflow the data‑flow graph is a *directed acyclic graph* of transformations that must be **low‑latency, highly concurrent, and scale horizontally**.  
The fundamental problem is: *how do we keep millions of feature vectors available to many parallel workers while preserving consistency enough for reproducible training?*  

- **Key‑value stores (e.g., DynamoDB)** give sub‑millisecond reads but lack secondary indexes; they’re ideal when each worker only needs a single feature vector by key.  
- **Wide‑column stores (Cassandra, Scylla)** provide tunable consistency and column families that map naturally to feature sets; they excel when workers need a burst of correlated features.  
- **Document stores (MongoDB, Couchbase)** allow flexible schemas for evolving feature definitions but can suffer from higher read amplification if the schema grows.  

The deeper principle is *trade‑off between write‑throughput and query flexibility*. In practice, most ML pipelines hit the sweet spot with a **wide‑column store**: it offers linear scalability, tunable consistency (eventual vs strong), and native support for time‑series data—critical when features are versioned or drifted over time.  

**Non‑obvious insight:**  
The *feature store* should be treated as an *append‑only log* rather than a mutable table. By persisting every feature vector with a monotonically increasing timestamp, you avoid schema migrations, enable exact reproducibility, and simplify lineage tracking—something most practitioners overlook until debugging a model drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
