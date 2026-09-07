---
qid: ing_ca6678e181__aws__local
question: 'Explain: Preprocessing Different File Types — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 481
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:00-05:00'
sources: []
---

**Situation**  
While leading a data‑science squad at a fintech startup, we built an ML model to predict loan default from unstructured documents (PDF invoices, CSV transaction logs, and scanned images). The pipeline stalled because the ingestion layer couldn’t handle mixed file types at scale.

**Task**  
Design a preprocessing workflow that normalizes all formats into clean tabular data, runs in under 2 h for a 10‑TB corpus, and supports incremental updates without reprocessing everything.

**Action**  
1. **Ingest** – Use **Amazon Kinesis Data Streams** to buffer uploads; trigger an **AWS Lambda** per shard that routes PDFs to Amazon Textract, CSVs to S3 Select, and images to Rekognition for OCR.  
2. **Transform** – Each Lambda writes intermediate JSON to an S3 “raw” bucket. An **AWS Glue** crawler creates a catalog; a scheduled **Glue ETL job** applies schema‑enforcement, deduplication, and feature engineering (e.g., extracted totals).  
3. **Store** – Persist the cleaned dataset in a partitioned Amazon Redshift Spectrum table backed by S3, enabling SQL queries without data movement.  
4. **Incremental** – Leverage Glue’s “dynamic frame” to read only new prefixes; use Redshift materialized views for fast aggregations.

**Result**  
- Processing time dropped from 12 h to **1.8 h** (90% reduction).  
- Cost fell from $2,400/month to **$650/month** (≈70 % savings).  
- Model accuracy improved by 4 % due to higher‑quality features.

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into AWS services to balance latency, cost, and fault tolerance. The bar‑raiser will note my ownership of incremental design, quantitative impact, and iterative learning—when a Glue job failed on malformed PDFs, I added schema validation logic that prevented future outages.

*Leadership Principles: Customer Obsession (delivering reliable data for risk models), Ownership (owning the full pipeline lifecycle).*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
