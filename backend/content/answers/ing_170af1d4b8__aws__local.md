---
qid: ing_170af1d4b8__aws__local
question: 'Explain: Cryptographic Hashes — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 470
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:53-05:00'
sources: []
---

**Situation & Task**  
When launching a global ML model registry at my previous firm, we needed a tamper‑proof way to verify that each dataset and model artifact had not been altered during transfer or storage. The requirement was to support millions of artifacts daily while keeping latency below 200 ms for ingestion.

**Action (Design)**  
I chose **cryptographic hashes (SHA‑256)** as the checksum algorithm because it offers collision resistance and is natively supported by AWS KMS for key management. Each artifact upload triggers an **S3 EventBridge rule** that invokes a Lambda function to compute the hash, store the value in DynamoDB alongside metadata, and publish a “checksum verified” event to SNS. For bulk ingestion we used **AWS Glue ETL jobs** with Spark to batch‑compute hashes, reducing per‑artifact cost from $0.02 to $0.003.

I also implemented **S3 Object Lock** (Compliance mode) so that once an artifact is written and its hash recorded, it cannot be overwritten, ensuring immutability. The system runs on a **serverless stack (Lambda + DynamoDB)**, giving us automatic scaling and 99.999% availability with minimal CAPEX.

**Result**  
Within six months, the registry processed **>5 M artifacts/month**, reducing data‑corruption incidents by **98%** and cutting audit time from hours to seconds. The cost per artifact dropped by **85%** compared to our legacy on‑prem solution.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered a fault‑tolerant, low‑latency service that protected downstream ML pipelines.
- **Ownership / Dive Deep:** Designed the end‑to‑end checksum flow and iterated until it met strict SLAs.

Bar‑raisers would note my focus on measurable impact (metrics), deep technical choices (hash algorithm, serverless stack), and lessons learned—e.g., why we chose SHA‑256 over MD5 after a small data breach simulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
