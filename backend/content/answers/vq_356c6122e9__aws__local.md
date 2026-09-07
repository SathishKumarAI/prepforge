---
qid: vq_356c6122e9__aws__local
question: How does one count different data values in a column?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:33-05:00'
sources: []
---

**Situation & Task**  
In my last role at a SaaS company, the product team needed an accurate count of distinct user‑segment values in a massive `user_attributes` table (≈ 200 M rows). The existing BI pipeline returned approximate counts with a 5 % error, causing mis‑budgeting for feature rollouts.

**Action**  
I proposed a two‑stage solution:

1. **Data partitioning & indexing** – Partition the table by year and create a composite index on `(segment_id, user_id)`. This reduces scan cost to 2 % of the original size.
2. **Serverless aggregation with AWS Athena + Glue** – Write a single `SELECT COUNT(DISTINCT segment_id)` query. Athena’s columnar storage (Parquet via Glue ETL) and Presto engine compute exact counts in ~ 30 s, costing <$0.10 per run.

I also added an automated CloudWatch alarm to trigger the query nightly; results are stored in DynamoDB for instant lookup by the front‑end.

**Result**  
- Accuracy improved from 95 % to 100 %.  
- Query time dropped from ~ 20 min to 30 s, saving ≈ $0.40 per day.  
- The dashboard now updates in real time, enabling data‑driven decisions on feature prioritization.

**Reflection & Learning**  
I learned that *Customer Obsession* drives me to eliminate even minor inaccuracies; *Ownership* pushed me to own the entire pipeline from ETL to display. I also practiced *Dive Deep* by profiling query plans and tuning Glue partitions. The bar‑raiser will see my clear metrics, cost savings, and proactive monitoring—hallmarks of a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
