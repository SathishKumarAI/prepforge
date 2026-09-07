---
qid: ing_01d8793694__aws__local
question: 'Explain: Storage Systems — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 452
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:20-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I led a migration of our on‑prem model repository (~1 TB) to an S3‑based data lake for ML training at Amazon SageMaker. Clients expected zero data loss and <5 % latency increase during the cutover.

**Action (Dive Deep + Ownership)**  
1. **Design** – Adopted **S3 Object Lock + Glacier Vault Lock** for immutable storage, coupled with **AWS KMS‑managed CMKs** to encrypt all objects.  
2. **Checksums** – Implemented a *dual checksum* strategy:  
   - **ETag (MD5)** for single‑part uploads.  
   - **S3 Object Integrity API** (SHA‑256) for multipart uploads, verified during ingestion via an AWS Lambda that writes the hash to DynamoDB.  
3. **Automation** – Built a Step Functions workflow that triggers after each upload:  
   - Calls **AWS Rekognition** to validate image metadata.  
   - Runs a *deduplication* check against a **DynamoDB Global Secondary Index (hash)**.  
4. **Monitoring & Alerting** – Integrated CloudWatch metrics (`Checksum_Mismatch_Count`) with SNS alerts; auto‑triggered a remediation Lambda that re‑uploads corrupted objects.

**Result (Deliver Results)**  
- Achieved **99.999% data integrity** (one checksum failure per 10 million records).  
- Cut deployment time from 48 h to 4 h, reducing customer downtime by **>90 %**.  
- Cost saved $12k/month vs. legacy on‑prem backup due to S3 Lifecycle policies.

**Bar‑raiser cues** – I own the end‑to‑end pipeline, dive into checksum failures (root cause: multipart reassembly bugs), quantify impact with exact metrics, and iterated the design after a 0.5 % mismatch spike—learning that pre‑validation of multipart parts is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
