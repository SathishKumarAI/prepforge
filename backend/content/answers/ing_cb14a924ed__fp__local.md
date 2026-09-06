---
qid: ing_cb14a924ed__fp__local
question: 'Explain: Cardinality in Database Example — What Is Cardinality in a Database?
  - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 313
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:17-05:00'
sources: []
---

**Cardinality in databases is the *information‑content* of an attribute, measured as the number of distinct values it can assume.**  
When a query engine plans a join or index usage, it must estimate how many rows will survive each filter. That estimate comes from cardinality: if column `state` has only 5 distinct values (highly skewed), a predicate on `state='CA'` will return ~20 % of the table; if a column is *dense* with millions of unique values, the same predicate will be very selective.  

The fundamental problem is that a planner must allocate resources—memory for hash tables, CPU for sorting—without scanning the data each time. Cardinality estimates provide an *expected cost* based on sampling or histograms. The deeper principle is **information theory**: cardinality is essentially the logarithm of the number of distinct outcomes; it tells us how much uncertainty a column reduces about a row’s identity.  

A non‑obvious insight: **cardinality matters not only for filtering but also for data distribution across partitions or shards.** In distributed systems, a high‑cardinality key leads to uniform sharding (good load balance), whereas low cardinality can cause hotspotting. Thus, understanding cardinality guides both query optimization and physical data layout—two seemingly separate concerns that share the same statistical foundation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
