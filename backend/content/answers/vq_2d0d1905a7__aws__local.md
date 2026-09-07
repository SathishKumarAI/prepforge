---
qid: vq_2d0d1905a7__aws__local
question: What are the nine different types of Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 501
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:04-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation (S)**  
While revamping our data lake on **Amazon Redshift**, I discovered that queries were hitting the cluster at ~30 % CPU, causing 4‑second latencies for ad‑hoc analytics.

**Task (T)**  
I had to design a comprehensive indexing strategy that would reduce query times by at least 70 % while staying within our $2k/month budget.

**Action (A)**  
1. **Clustered index** – sorted the fact table on `order_date` to improve range scans.  
2. **Non‑clustered indexes** – created for high‑selectivity columns:  
   * `customer_id` (hash),  
   * `product_sku` (bitmap),  
   * `region_code` (b-tree).  
3. **Partial indexes** – limited to active year’s data (`WHERE order_year = 2024`).  
4. **Expression indexes** – on `UPPER(product_name)` for case‑insensitive searches.  
5. **Composite index** – `(customer_id, order_date)` for frequent joins.  
6. **Covering index** – stored all columns needed by a complex report to avoid lookups.  
7. **Full‑text index** – via Amazon OpenSearch Service for free‑form search on `description`.  
8. **Columnar indexes** – Redshift’s native column store for `numeric` aggregates.  
9. **Materialized view index** – pre‑aggregated sales per region, refreshed nightly.

All indexes were built as **Redshift Spectrum external tables** backed by **S3** and **AWS Glue** cataloging to keep costs low. I monitored the cluster with **Amazon CloudWatch** and saw CPU drop to 12 % and query latency from 4 s → 1.2 s (72 % improvement).

**Result (R)**  
The new indexing regime delivered a *70 % faster* analytics pipeline, reduced monthly compute spend by $400, and enabled real‑time dashboards for the business. I documented lessons on index maintenance cycles and shared them in our internal knowledge base, fostering continuous learning across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
