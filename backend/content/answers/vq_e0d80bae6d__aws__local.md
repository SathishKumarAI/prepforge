---
qid: vq_e0d80bae6d__aws__local
question: How to fetch common records from two tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 615
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:23-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy data warehouse into Amazon Redshift. The business required a nightly job that identified “common” records (exact key matches) between two large fact tables – `sales_fact_2023` and `sales_fact_2024`. The tables each held ~50 M rows, and we had to keep the ETL cycle under 30 min while staying within a $2k/month budget.

**Action**  
1. **Understand requirements** – “common” meant exact match on composite key (`order_id`, `product_sku`). I confirmed no NULLs and that both tables were partitioned by year.  
2. **Design** –  
   * Use **Amazon Redshift Spectrum** to query the underlying S3‑based Parquet files directly, avoiding data movement.  
   * Create an external schema for both tables, then run a single `JOIN` with `EXISTS`.  
   * Push down predicates (`WHERE`) so only relevant partitions are scanned.  
   * Materialize results into a temporary table and use **Redshift’s distribution key** on the composite key to keep join data local.  
3. **Implementation** –  
```sql
CREATE EXTERNAL TABLE spectrum.sales_fact_2023 (
  order_id BIGINT,
  product_sku VARCHAR(20),
  ...
)
ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' LOCATION 's3://bucket/2023/';

CREATE EXTERNAL TABLE spectrum.sales_fact_2024 (...);

DROP TABLE IF EXISTS temp.common_orders;
CREATE TEMP TABLE common_orders AS
SELECT s23.order_id, s23.product_sku
FROM spectrum.sales_fact_2023 s23
WHERE EXISTS (
  SELECT 1 FROM spectrum.sales_fact_2024 s24
  WHERE s24.order_id = s23.order_id
    AND s24.product_sku = s23.product_sku
);
```
4. **Optimize** – Added a `DISTSTYLE KEY` on the composite key and ran `ANALYZE` to update statistics, cutting runtime from 45 min to **28 min**.

**Result**  
- Achieved 40% faster ETL cycle (from 45 → 28 min).  
- Cost dropped by ~30% because Spectrum reduces compute usage.  
- The job now runs automatically via **AWS Glue** scheduler, giving the business confidence in daily reconciliations.

**Leadership Principles Reflected**  
- **Ownership**: Took end‑to‑end responsibility for performance and cost.  
- **Dive Deep & Deliver Results**: Analyzed query plans, tuned distribution, and quantified impact with real metrics.  

Bar‑raiser cues I addressed: clear ownership, deep technical reasoning (Spectrum vs. load), measurable ROI, and learning from prior 45‑min runs to achieve a tighter SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
