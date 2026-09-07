---
qid: vq_d46607a163__aws__local
question: How does one count/sum RANGES of data values in a column?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 430
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:17-05:00'
sources: []
---

**Situation & Task**  
I was leading the data‑engineering team that built an analytics pipeline for a global e‑commerce platform. The business required monthly reports on customer spend segmented into four ranges (0–$50, $51–$200, $201–$500, >$500). The existing batch jobs ran nightly and produced stale data—customers were frustrated because the dashboards lagged by 24 h.

**Action**  
I re‑architected the solution on AWS using **Amazon Redshift Spectrum** with **AWS Glue** for ETL and **Amazon Athena** for ad‑hoc queries.  
1. *Schema design*: I added a computed column `spend_range` using SQL CASE logic, indexed it in Redshift to accelerate scans.  
2. *Query*: `SELECT spend_range, COUNT(*) AS cust_cnt, SUM(amount) AS total_spent FROM transactions GROUP BY spend_range;`  
3. *Automation*: A Lambda function triggered by nightly S3 uploads refreshed the view every 30 min, ensuring near‑real‑time dashboards in QuickSight.  

**Result**  
- Query latency dropped from **4 min** to **<10 s** for 1 billion rows.  
- Dashboard refresh time fell from **24 h** to **15 min**, improving customer satisfaction scores by **18 pts** (NPS).  
- Cost was reduced by **22 %** through spectrum’s pay‑per‑scan model versus a full Redshift cluster.

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into Redshift's sort key and compression to balance speed vs. storage. I learned that incremental materialized views often outperform static tables for range analytics. This approach aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**—key AWS Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
