---
qid: ing_776b6db815__aws__local
question: How to populate Sales Rank table? — Salesrankbycategory
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 440
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:13-05:00'
sources: []
---

**Situation & Task**  
In a marketplace product, the *SalesRankByCategory* table was stale, causing recommendation lag and revenue loss (~$4 M/quarter). I owned the end‑to‑end pipeline to refresh it every 6 h.

**Action (Design)**  
1. **Data Ingestion:** Daily sales logs in S3 (`sales/yyyymmdd/`). A Glue crawler creates a catalog.  
2. **ETL:** A Glue job (Spark) aggregates `product_id, category, quantity_sold` → writes to an intermediate Parquet table (`s3://analytics/salesrank/interim/`).  
3. **Ranking Engine:** An AWS Step Function orchestrates:  
   * Athena query that partitions by category and orders by summed sales to compute the rank (SQL window function).  
   * Result stored in a DynamoDB table `SalesRankByCategory` (partition key = `category`, sort key = `rank`).  
4. **Refresh & Cache:** Lambda triggers every 6 h, writes to DynamoDB; CloudFront edge caches for <1 ms latency.

**Result**  
- Refresh time dropped from 12 h → 30 min.  
- Query latency to recommendation service <2 ms vs 200 ms baseline.  
- Revenue lift: +12% in the next quarter (≈$5 M).  

**Learnings**  
*Ownership*: I ran a cross‑team squad, wrote unit tests for Glue jobs, and monitored with CloudWatch alarms.  
*Dive Deep*: We profiled Spark tasks to reduce shuffle by 35%.  
*Bar‑raiser focus*: Demonstrated clear ownership, quantified impact, and iterative improvement—key AWS leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
