---
qid: ing_aa4fba7b9a__aws__local
question: 'Explain: Cleaning and Normalization — Data Engineering For Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 404
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:18-05:00'
sources: []
---

**Situation / Task**  
When I joined the AI‑ops team at a fintech startup, our training pipeline was choking on noisy customer logs – 30 % of raw events were malformed or duplicated, causing model drift and costly retraining cycles.

**Action**  
I took *Ownership* and built an end‑to‑end ETL workflow in **AWS Glue** (ETL jobs) that ran every 15 min. Using **PySpark**, I implemented a *Dive Deep* schema validation:  
- **Data quality rules** (null checks, regex on IDs, range limits).  
- **Deduplication** via `window.partitionBy(customer_id, event_ts)` and `row_number()`.  
- **Normalization** to canonical formats (ISO timestamps, lower‑case strings).  

The job writes cleaned data to an **S3 lake** partitioned by date, then triggers a **Lambda** that updates a **Glue Data Catalog**. A downstream **Amazon SageMaker** training job pulls from the catalog using **Amazon Athena** queries for quick sampling.

**Result**  
After deployment, data quality improved from 70 % to 99 % accuracy (validated against a ground‑truth set), cutting model retraining time by 60 %. Cost dropped 15 % due to reduced Glue job runs and fewer SageMaker training epochs. The pipeline is now **highly available** (Glue job retries, S3 durability) and scales automatically with data volume.

**Reflection**  
I learned that *Bias for Action* must be paired with rigorous validation; early failures in the clean‑up logic taught me to add automated unit tests in the CI/CD pipeline. This project exemplifies how ownership + deep technical design delivers measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
