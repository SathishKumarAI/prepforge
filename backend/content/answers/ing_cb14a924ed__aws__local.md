---
qid: ing_cb14a924ed__aws__local
question: 'Explain: Cardinality in Database Example — What Is Cardinality in a Database?
  - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 392
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:21-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A client’s on‑prem data lake had a slow ETL that stalled downstream ML models (training time up 30 %).  
*Task:* Explain cardinality and redesign the schema to reduce latency.

*Action:* I mapped each table’s **cardinality** – the distinct value count per column – and identified a high‑cardinality `user_id` in a join table. Using **Amazon Redshift Spectrum** with **columnar compression (Zstandard)**, I partitioned the table by `date` and stored it on S3, enabling predicate pushdown. I also introduced an **auxiliary lookup table** for `user_id → profile_hash` to shrink the join key size.

*Result:* Query runtime dropped from 2 min to 20 s (90 % reduction). The ML pipeline’s overall training time fell by 35 %, freeing compute hours that saved ~$1,200/month. I documented the change in Confluence and conducted a “post‑mortem” on the performance regression.

**Dive Deep & Deliver Results**

- **AWS services:** Redshift Spectrum, S3, Glue (catalog), CloudWatch (metrics).  
- **Scalability:** Partitioning allows parallel scans across shards; auto‑scaling of Redshift nodes keeps cost predictable.  
- **Availability:** S3 provides 99.999 % durability; Redshift clusters are multi‑AZ.  

*Bar‑raiser note:* I demonstrated ownership by turning a vague performance issue into a quantifiable metric, diving deep into cardinality’s impact on joins, and delivering a solution that balanced cost, availability, and scalability while learning to pre‑empt similar regressions in the future.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
