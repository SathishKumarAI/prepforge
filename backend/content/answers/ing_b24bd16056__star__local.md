---
qid: ing_b24bd16056__star__local
question: 'Explain: Encryption & Key Management — How do we manage sensitive data
  in a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 327
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:25-05:00'
sources: []
---

**Situation:**  
During the launch of our fraud‑detection platform, I discovered that transaction logs were being stored unencrypted in an S3 bucket accessible by several services. A security audit flagged this as a critical risk.

**Task:**  
I needed to design and implement a robust encryption & key‑management strategy that protected data at rest and in transit while ensuring compliance with PCI‑DSS, all within our CI/CD pipeline.

**Action:**  
1. Adopted AWS KMS for envelope encryption: each file was encrypted with a unique data‑key (AES‑256), then the data‑key was wrapped by a master CMK stored in KMS.  
2. Integrated automatic key rotation every 90 days and set up policy to restrict CMK usage to only the ingestion Lambda and analytics EC2 instances.  
3. Updated our Terraform scripts to tag all encrypted resources, enabling automated compliance checks with AWS Config rules.  
4. Added a sidecar service that fetched the decrypted data‑key on-demand, reducing latency by 30 % compared to legacy decryption logic.

**Result:**  
All logs were encrypted at rest within minutes of ingestion; audit scores improved from “Non‑compliant” to “Fully compliant.” The new setup cut manual key rotation effort by 80 %, and the system now supports a 2× increase in transaction volume with zero data‑breach incidents. I learned that combining envelope encryption with automated IAM policies provides both security and operational agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
