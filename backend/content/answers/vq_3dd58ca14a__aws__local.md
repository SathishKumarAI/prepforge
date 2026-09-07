---
qid: vq_3dd58ca14a__aws__local
question: What is a Fact Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 666
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:56-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Fact Table** – the central numeric hub that aggregates business metrics for analysis. It stores *measures* (sales revenue, units sold, latency) linked to *dimension keys* (product_id, time_id, store_id). Think of it as the “ledger” in a data warehouse: every row represents a granular event (e.g., an order), and columns hold the key facts used for reporting.

### Behavioral (STAR)

- **Situation:** At my previous e‑commerce firm we had 3 raw streams (orders, inventory, traffic) that were siloed.  
- **Task:** Build a unified analytics layer to power real‑time dashboards for marketing and finance.  
- **Action:** Designed an ELT pipeline on AWS: Kinesis Data Streams → Glue ETL → Redshift Spectrum tables (fact + dimensions). I owned the data model, wrote tests in PySpark, and set up automated refreshes every 15 min.  
- **Result:** Dashboards went live 4 weeks early; revenue forecasting accuracy improved from 68 % to **92 %** within two months, saving ~$1.2M/yr in inventory over‑stock.

### Technical / System Design

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingest raw events | **Kinesis Data Streams** | Low latency, auto‑scaling; handles >10 k TPS. |
| Transformation | **AWS Glue** (Spark) | Serverless, pay per job; supports iterative schema evolution. |
| Storage | **Amazon Redshift Spectrum** + S3 | Massively parallel processing; cost‑effective for petabyte data; allows querying directly on Parquet files. |
| Metadata & Catalog | **Glue Data Catalog** | Centralized schema registry; ensures consistency across services. |
| Orchestration | **AWS Step Functions** | Clear state machine; retries and error handling. |

### Scalability / Availability

- *Scalable:* Glue jobs auto‑scale via Spark cluster; Redshift Spectrum queries run on distributed nodes, automatically scaling with data size.
- *Highly available:* All services are region‑wide; Glue uses multiple AZs; Redshift has cross‑AZ replication.

### Cost & Trade‑offs

- **Cost:** ~$0.15/GB processed in Glue + $0.0005 per query unit in Spectrum (≈$3k/month for 200 TB).  
- **Trade‑off:** Chose *ETL* over *ELT* to enforce data quality early; incurs extra compute but reduces downstream errors.

---

**Bar‑raiser cues I’d hear:**

1. **Ownership & Bias for Action** – took full responsibility, shipped on schedule.  
2. **Dive Deep** – detailed AWS choices and cost estimates show depth.  
3. **Quantified Impact** – revenue forecasting accuracy spike is concrete evidence of value.  
4. **Learning from Failure** – I’d mention an initial Glue job failure due to schema drift; resolved by adding automated unit tests, illustrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
