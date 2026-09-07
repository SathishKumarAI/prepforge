---
qid: ing_a38ca5e4c7__aws__local
question: How does Harvey ensure no one is training on my data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:36:55-05:00'
sources: []
---

**Situation & Task**  
At a large SaaS platform we were launching an AI‑powered recommendation engine that used customer interaction logs. A senior client raised the concern: *“How do I know no one else trains on my data?”* I owned the solution, balancing **Customer Obsession** and **Ownership**.

**Action**  
I led a cross‑functional task force to design a “data‑isolation enclave” using AWS services:

| Service | Role |
|---------|------|
| **Amazon S3** with *bucket policies* & *object lock* | Immutable storage of raw logs |
| **AWS Lake Formation** | Fine‑grained IAM permissions, cataloging only the client’s data |
| **Amazon SageMaker** (with *private endpoints*) | Training jobs run in a VPC isolated from other tenants |
| **AWS Key Management Service (KMS)** | Encryption at rest and in transit; separate CMKs per customer |

We added an audit trail with **AWS CloudTrail** and automated alerts via **CloudWatch Events**. I ran a penetration test that scored 99 % on the NIST SP‑800‑53 “Data Protection” control family.

**Result**  
Within two weeks, the client’s confidence score rose from 3/10 to 9/10, and we signed a $12M contract extension. Internally, our isolation framework reduced cross‑tenant data exposure risk by **95 %** compared with legacy shared‑bucket models, saving ~$1.2M in potential breach costs annually.

**Bar‑raiser Takeaway**  
- **Ownership:** I drove the end‑to‑end solution and delivered measurable ROI.  
- **Dive Deep:** Leveraged AWS services at a granular level to meet strict privacy needs.  
- **Quantified Impact:** 95 % risk reduction, $12M revenue uplift.  
- **Learning from Failure:** Early trials with shared buckets exposed us to data leakage; pivoting to isolated enclaves was the key corrective action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
