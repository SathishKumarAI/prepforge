---
qid: vq_7a38d0cb83__aws__local
question: What do you mean by ‘joins’ in PySpark DataFrame? What are the different
  types of joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 749
total_tokens: 991
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:16-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> **Leadership Principles:** *Ownership*, *Dive Deep*  
> **Behavioral Lens (STAR):**  
> **S**ituation – While leading a migration of the nightly ETL pipeline from on‑prem Hadoop to EMR, I needed to prove that our new PySpark jobs could handle joins at scale without breaking SLAs.  
> **T**ask – Design and benchmark every join type in a production‑grade Spark cluster.  
> **A**ction – Implemented an end‑to‑end Glue script that reads data from S3, performs inner, left/right outer, full, semi, anti, and cross joins on 5 TB of customer logs, using Catalyst optimizer hints and broadcast joins where appropriate. I also added a custom metric to CloudWatch for join latency.  
> **R**esult – Execution time dropped from 18 min (Hadoop MapReduce) to 3 min (EMR), a **83% reduction**, while keeping cost < $15 per run and maintaining >99.9 % availability during peak hours. Post‑deployment, we observed no data quality regressions.

**Technical Detail – “Joins” in PySpark DataFrames**

- **Inner Join**: Returns rows with matching keys in both DataFrames (`df1.join(df2, "id")`).
- **Left (Outer) Join**: All rows from left, matched right or NULL.
- **Right Outer Join**: Symmetric to Left.
- **Full Outer Join**: All rows from both sides, NULLs where no match.
- **Semi Join** (`df1.join(df2, "id", "left_semi")`): Returns rows of `df1` that have a match in `df2`; preserves only left columns.
- **Anti Join** (`... , "left_anti"`): Rows of `df1` with no match in `df2`.
- **Cross (Cartesian) Join**: All combinations; use sparingly.

**AWS Services & Design Choices**

| Service | Role |
|---------|------|
| **Amazon EMR** (Spark 3.x) | Compute layer; auto‑scaling for bursty loads. |
| **AWS Glue Data Catalog** | Schema registry and metadata discovery. |
| **S3** | Durable, low‑cost storage; partitioned parquet improves join locality. |
| **CloudWatch** | Custom metrics on join latency and shuffle bytes. |

*Scalability*: Broadcast joins for small dimension tables (< 100 MB) reduce shuffles. For large joins, use `partitionBy` to co‑locate keys.  
*Availability*: EMR’s auto‑recovery + Spot instances keep cost < $0.05/hr while maintaining fault tolerance.  
*Trade‑offs*: Cross joins are avoided unless absolutely necessary; semi/anti joins are cheaper than full outer because they skip copying non‑matching rows.

**Bar‑raiser cues:** I demonstrated *ownership* by delivering a production‑ready script, *dive deep* through detailed metrics and optimizer usage, quantified the impact (83% speedup), and learned that adding shuffle statistics early in development prevents costly redesigns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
