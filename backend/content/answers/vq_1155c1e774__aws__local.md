---
qid: vq_1155c1e774__aws__local
question: How to optimize join of 2 big tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:22-05:00'
sources: []
---

**Situation & Task**  
While migrating a legacy data pipeline to an Amazon Redshift cluster, I had to join two 500 GB fact tables (sales and inventory) on *customer_id* for a daily analytics report. The naive join caused >4 hrs of runtime and >80 % CPU saturation.

**Action**  
1. **Ownership & Dive Deep** – I first profiled the query with `EXPLAIN` and discovered that both tables were heavily skewed; a few customers accounted for 70 % of rows.  
2. **Design** – I re‑structured the join into two steps:
   * **Pre‑aggregate** each table by `customer_id` using Amazon Redshift’s `DISTSTYLE KEY` on that column, ensuring data locality.  
   * **Hash‑join** the pre‑aggregated results; this reduced row counts from 500 GB to ~5 GB.  
3. I added a small temporary staging table in Amazon S3 and used **AWS Glue** to run an incremental ETL, loading only new rows each day (batch size ≈ 50 MB).  
4. Finally, I leveraged **Redshift Spectrum** for the inventory table to avoid moving data into the cluster.

**Result**  
- Query runtime dropped from **4 hrs → 12 min** (≈ 20× faster).  
- CPU usage fell from **80 % → 30 %**, freeing capacity for other workloads.  
- Cost savings: <$2/month on Redshift compute vs. the previous $15/month.

**Bar‑raiser takeaways**  
* Demonstrated ownership by taking full responsibility for performance bottlenecks.  
* Showed deep technical knowledge (dist styles, hash joins, Spectrum).  
* Quantified impact with concrete metrics.  
* Learned from failure: after an initial misstep that increased costs, I iterated on the design to balance speed and expense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
