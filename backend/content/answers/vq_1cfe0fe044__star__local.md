---
qid: vq_1cfe0fe044__star__local
question: How to remove duplicate rows from table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:21-05:00'
sources: []
---

**Situation:**  
During a quarterly data refresh for our customer‑segmentation pipeline, the nightly job was inserting millions of rows into the `customer_segments` fact table. I noticed that after each run the table size doubled, and downstream dashboards were reporting inflated counts.

**Task:**  
I needed to purge duplicate records from the staging layer before they hit production, without halting the ETL schedule or compromising data quality.

**Action:**  
First, I ran a quick exploratory query on the staging view: `SELECT customer_id, segment_id, COUNT(*) FROM staging_customer_segments GROUP BY customer_id, segment_id HAVING COUNT(*) > 1;` to confirm duplicates. Then I created a temporary table with a unique composite key (`customer_id`, `segment_id`) using a window function:  
```sql
WITH ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id, segment_id ORDER BY load_ts DESC) rn
  FROM staging_customer_segments
)
INSERT INTO prod.customer_segments (customer_id, segment_id, load_ts)
SELECT customer_id, segment_id, load_ts
FROM ranked WHERE rn = 1;
```  
This kept only the most recent row per key. Finally, I scheduled a nightly `DELETE` on the staging table to remove processed rows.

**Result:**  
The deduplication cut the daily ingestion size by ~45 %, restored accurate dashboard metrics, and reduced storage costs by $200/month. I learned that combining window functions with incremental loads is a scalable pattern for duplicate removal in large data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
