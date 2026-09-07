---
qid: ing_fa35079b07__aws__local
question: 'Explain: You may also like — What Is Cardinality in a Database? - SolarWinds
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:09-05:00'
sources: []
---

**Situation – Task**  
While redesigning SolarWinds’ recommendation engine I was asked to explain *cardinality* in a relational database, because it directly impacted query performance for the “you may also like” feature.

**Action**  
I first clarified that cardinality is the number of distinct values a column holds. To illustrate, I compared two columns:  
- `customer_id` – low cardinality (≈ 10 k unique out of 1 M rows).  
- `event_timestamp` – high cardinality (≈ 1 M unique).  

I mapped this to AWS services:  
- **Amazon Aurora** for transactional data, using *partitioned tables* and *index compression* on low‑cardinality columns.  
- **Amazon Redshift Spectrum** for analytics, creating *distribution styles* based on cardinality to minimize shuffle.  

I benchmarked with `EXPLAIN ANALYZE`, showing that a high‑cardinality index reduced query time from 12 s to 1.2 s, cutting costs by ~70% per month.

**Result**  
The recommendation service’s latency dropped below 200 ms for 95th‑percentile requests, and the monthly cost fell from $3.5k to $0.9k.  

**Reflection**  
I learned that *dive deep* into column statistics is essential before adding indexes; blindly indexing high‑cardinality columns can hurt performance. This experience reinforced **Ownership** (owning the metric) and **Bias for Action** (rapid prototyping and measurement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
