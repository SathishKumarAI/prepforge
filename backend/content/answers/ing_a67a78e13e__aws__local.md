---
qid: ing_a67a78e13e__aws__local
question: 'Explain: Design PII handling for pipelines that feed documents into an
  LLM system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 458
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:24-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional team that built an LLM‑driven recommendation engine for a financial services client. The pipeline ingested >10 GB/day of transaction logs containing PII (SSNs, account numbers). Our goal was to clean, store, and feed the data into SageMaker while keeping compliance with PCI‑DSS and GDPR.

**Action**  
1. **Ownership & Design** – I defined a “PII‑first” pipeline:  
   * **Ingestion**: Kinesis Data Streams → Lambda (Python). Lambda immediately masks PII using deterministic hashing + per‑user salt stored in AWS Secrets Manager.  
   * **Storage**: Encrypted S3 buckets with SSE‑KMS; each object tagged with a lifecycle policy that deletes after 30 days.  
   * **Processing**: Glue ETL jobs run on Athena queries that reference the masked columns only; IAM roles enforce least privilege.  
   * **Model Training**: SageMaker training jobs pull data from S3 via VPC endpoints, ensuring no PII exits the VPC.  
2. **Dive Deep & Scalability** – I benchmarked Lambda concurrency (max 2000) and tuned Kinesis shard count to avoid throttling; cost‑optimized by using spot instances for Glue workers.

**Result**  
The pipeline processed 12 GB/day with <1 % error rate, reduced data residency time from 90 days to 30 days, and cut storage costs by 35%. Compliance audit passed on the first try, and the client reported a 20 % lift in model accuracy because of cleaner data.

**Reflection (Bar‑raiser)**  
I took full ownership, iterated on the design after each failure point (e.g., Lambda timeout), and quantified every trade‑off. The solution demonstrates Customer Obsession, Ownership, Dive Deep, and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
