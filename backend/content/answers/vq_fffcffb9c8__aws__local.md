---
qid: vq_fffcffb9c8__aws__local
question: Where can one find the high water mark for a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:30-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our nightly ETL pipeline from on‑prem Hadoop to AWS Glue/AWS Lake Formation. The business required a reliable “high‑water mark” for each fact table so downstream data marts could run incremental loads without reprocessing older records.  

**Action**  
I designed a *single source of truth* in the Glue Data Catalog: for every table I added a dedicated **`_metadata`** partition that stored the maximum value of the surrogate key (`row_id`). After each job completion, a small Python UDF ran on Spark to compute `max(row_id)` and wrote it back to DynamoDB. The catalog entry was then refreshed via an EventBridge rule so Athena could query the mark in real time.  

- **AWS services used**: Glue Jobs (Spark), DynamoDB (low‑latency key/value store), EventBridge, Athena  
- **Scalability** – DynamoDB scales horizontally; jobs run in parallel across a cluster that auto‑scales with Glue’s `maxCapacity`.  
- **Availability** – All components are multi‑AZ and backed by AWS managed services.  
- **Cost** – The metadata write is < 1 KB per table, costing <$0.01/month; Glue jobs run only on schedule.  

**Result**  
The new system reduced incremental load time from ~4 h to <30 min (≈ 90% improvement) and eliminated duplicate record errors, earning a **“Customer Obsession”** badge in our quarterly review.

**Bar‑raiser notes**  
- Demonstrated ownership by replacing an ad‑hoc script with a repeatable, auditable workflow.  
- Dived deep into Glue’s Spark UDFs and DynamoDB partitioning to prove scalability.  
- Quantified impact (time savings, error reduction).  
- Learned from early failures when the metadata table was not refreshed on job failure; added retry logic in EventBridge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
