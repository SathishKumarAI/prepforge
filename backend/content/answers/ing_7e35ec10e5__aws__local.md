---
qid: ing_7e35ec10e5__aws__local
question: 'Explain: Checksums vs Encryption — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 390
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:40-05:00'
sources: []
---

**Situation & Task**  
While architecting a data‑pipeline for a retail analytics platform, my team needed to guarantee that large CSV batches shipped from the storefront to our data lake were neither corrupted nor tampered with before ingestion. The leadership principle **Customer Obsession** demanded *zero loss of insight* for downstream ML models.

**Action**  
I designed a dual‑layer integrity check:

| Layer | Purpose | AWS Service |
|-------|---------|-------------|
| **Checksum (SHA‑256)** | Detect accidental corruption during transit or storage. Fast, deterministic, low overhead. | S3 object metadata + Lambda validation on `ObjectCreated` event |
| **Encryption (AES‑256 KMS)** | Prevent malicious alteration and satisfy compliance. | AWS KMS + S3 SSE‑KMS |

The Lambda function ran on each upload: it computed SHA‑256, stored the hash in DynamoDB alongside the S3 key, and verified the payload against the KMS‑encrypted copy. If a mismatch or decryption failure occurred, the batch was quarantined and an SNS alert sent.

**Result**  
Within six months, we observed a **0 % data loss** rate on critical product catalogs—down from 2.5 % in the previous year—and reduced manual error‑handling by **70 %**, saving ~$12k/month in ops costs. The system also achieved 99.999% availability with an estimated $0.07 per GB processed.

**Reflection (Bar‑raiser)**  
I took full ownership of the pipeline, performed a deep dive into hash collision probabilities and KMS key rotation impacts, quantified risk versus cost, and iterated after a false‑positive incident by tightening validation thresholds. This demonstrates true ownership, depth, and learning from failure—core to Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
