---
qid: vq_efee0076f7__aws__local
question: WHAT IS DENORMALIZATION, AND WHEN IS IT USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:48-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a **performance tuning sprint for our multi‑region analytics platform**, I was asked to explain denormalization and its use case.  
> **S**ituation: The product data warehouse (Redshift) had normalized tables that linked millions of customer events through a shared key. Queries like “total spend per region” required complex joins, causing 4‑minute latency during peak hours.  
> **T**ask: Reduce query time to < 1 s while keeping cost under $200/day.  
> **A**ction: I introduced a *materialized view* that denormalized the event table with pre‑aggregated totals per region and customer tier, storing it in an S3‑based columnar format (Parquet) accessed via Athena. I also set up nightly Glue jobs to refresh the view every 12 hours.  
> **R**esult: Query latency dropped from 4 min to 0.8 s (≈ 95% reduction). Cost fell from $350/day to $180/day, and we freed Redshift compute for other workloads. The solution earned a “Customer Obsession” nod because it directly improved the data scientist’s turnaround time.

**Technical note:**  
- **When to denormalize?** When read‑heavy analytics or reporting requires frequent joins across large tables that are rarely updated.  
- **AWS services used:** Amazon Redshift (source), AWS Glue (ETL), Amazon Athena (query engine), S3 Parquet (storage).  
- **Trade‑offs:** Extra storage and refresh overhead vs. faster reads; mitigated by infrequent updates and using serverless Athena.

**Bar‑raiser cues:** Ownership of performance, deep dive into query plans, quantified impact on latency/cost, learning from failed attempts to keep joins in place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
