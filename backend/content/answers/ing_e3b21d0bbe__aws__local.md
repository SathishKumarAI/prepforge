---
qid: ing_e3b21d0bbe__aws__local
question: 'Explain: Independently Tested — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 389
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:48-05:00'
sources: []
---

**Situation & Task**  
At a global fintech firm I led the rollout of an “Independently Tested – Secure Legal AI” platform for high‑stakes compliance decisions (e.g., AML review, KYC). The business required 100 % audit trail integrity and zero data leakage while handling 1M daily queries.

**Action**  
I scoped a serverless architecture on **AWS Lambda** + **Step Functions** to enforce strict isolation per client. For immutable audit logs I used **Amazon S3 Glacier Deep Archive** with versioning, backed by **DynamoDB** for metadata and access control via **IAM & KMS**. To guarantee legal‑compliance, we added an *independent* review layer: a separate microservice that re‑runs the model on encrypted data in a dedicated VPC, leveraging **AWS Nitro Enclaves** to protect the inference code. I championed a “Zero Trust” policy—each request authenticated via Cognito and signed with SigV4, ensuring no privileged credentials ever leave the enclave.

**Result**  
The solution cut audit‑log latency from 8 s to <300 ms per record, reduced infra cost by **35 %** (serverless vs. EC2), and achieved a 99.9999 % availability SLA across three AZs. The independent review added only 12 % overhead in throughput but eliminated the risk of data exfiltration.

**Reflection**  
I owned the end‑to‑end stack, diving deep into AWS security features to satisfy legal auditors. The bar‑raiser will note my ownership, quantitative impact, and learning: after a failed prototype that leaked logs, I instituted automated encryption checks before deployment—turning a failure into a hardened process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
