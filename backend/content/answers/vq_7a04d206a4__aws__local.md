---
qid: vq_7a04d206a4__aws__local
question: How to select unique records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 443
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **S**ituation: I was tasked to clean a 1‑TB legacy sales table in Redshift that had duplicated orders due to a broken ETL job.  
> **T**ask: Deliver a single source of truth for downstream BI dashboards without downtime.  
> **A**ction:  
> * Created a temporary staging table (`sales_stage`) and used `DISTKEY(order_id)` for fast hashing.  
> * Ran a `SELECT DISTINCT` with window functions to keep the newest record per `(order_id, customer_id)`.  
> * Leveraged Redshift Spectrum to read raw logs from S3 (cost‑effective).  
> * Automated the process in Glue ETL, scheduled nightly via EventBridge, and used Step Functions for error handling.  
> * Implemented a simple unit test in Python to verify cardinality against expected counts.  
> **R**esult: Reduced duplicate rows by 97 % (from ~2 M to 60 K), cut query runtime from 45 min to 3 min, and saved ~$1.20/day on Redshift compute. The downstream dashboards now refresh in <5 s, improving analyst productivity by 30 %.  

**Dive Deep & Bias for Action**

I examined the root cause—an upstream Kafka consumer that replayed messages without idempotence. I added a deduplication Lambda layer and updated the schema to enforce `PRIMARY KEY(order_id)` in Redshift, preventing future duplicates.

*Key AWS services used:*  
- **Redshift** (massive parallel processing)  
- **Glue** (ETL orchestration)  
- **S3 & Spectrum** (cost‑effective storage & querying)  
- **EventBridge & Step Functions** (workflow automation)  
- **Lambda** (deduplication logic)

This solution balances scalability, availability, and cost while demonstrating ownership of data quality and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
