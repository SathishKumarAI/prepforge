---
qid: ing_810152b402__aws__local
question: 'Explain: Problem 1: Data normalization — Reconciliation in Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 471
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:42-05:00'
sources: []
---

**Situation & Task**  
In a fintech startup, we received daily payment logs from 12 partner banks. Each bank used its own schema and decimal format, so our data lake had duplicated rows and inconsistent amounts—causing $3 M in reconciliation errors per quarter. I was tasked to design an end‑to‑end normalization pipeline that would reconcile payments with 99.9% accuracy while keeping costs < $10k/month.

**Action (Dive Deep + Ownership)**  
1. **Data Ingestion:** Set up S3 event notifications and AWS Glue crawlers to auto‑detect new CSV/JSON files, ensuring schema discovery.  
2. **Schema Normalization:** Created a *payment standard* table in Amazon Athena, mapping each bank’s field names to our canonical schema using Glue ETL jobs written in Python (Pandas + PyArrow).  
3. **Decimal Standardization:** Converted all amounts to USD cents via a Lambda function triggered by S3 put events; used Amazon Kinesis Data Streams for real‑time validation and anomaly detection.  
4. **Reconciliation Engine:** Deployed an AWS Step Functions state machine that aggregates normalized records, deduplicates using DynamoDB (partition key: transaction_id), and flags mismatches to an SNS topic.  
5. **Cost & Scalability Controls:** Leveraged Spot Instances for Glue jobs, reserved RDS Aurora PostgreSQL for 1‑year, and used S3 Intelligent Tiering for archival.

**Result (Deliver Results)**  
- Reduced reconciliation errors from $3 M to <$10k per quarter (99.97% reduction).  
- Cut ingestion latency from 4 h to < 15 min.  
- Maintained monthly spend at $8.2k, below the $10k target.  

**Learning & Bar‑raiser Insight**  
I documented failure cases where bank schema drift caused temporary mismatches; this led to automated schema change alerts and a “schema guardrail” policy in Glue. The bar‑raiser will note my ownership of the entire pipeline, deep dive into decimal conversion nuances, and quantifiable impact on revenue protection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
