---
qid: ing_4e8aef8d93__aws__local
question: What is Sensitive Data? — How do we manage sensitive data in a system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 376
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:53-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our recommendation engine from an on‑prem cluster to SageMaker on AWS. The model ingested user profiles that contained PII (emails, addresses) and health data flagged as *sensitive* by GDPR. Failure to protect it would have cost us a $5 M fine and eroded customer trust.

**Action**  
1. **Ownership & Customer Obsession** – I established a cross‑functional “Data Privacy” task force that defined encryption, masking, and access controls.  
2. **Dive Deep & Bias for Action** – Using AWS Key Management Service (KMS) I encrypted data at rest in S3, applied SageMaker’s *encryption-at-rest* option, and leveraged the *Amazon Macie* service to continuously audit bucket usage.  
3. **Invent & Simplify** – Implemented a fine‑grained IAM policy that tied access to a custom Cognito identity pool; only data scientists with a “PII‑Reviewer” tag could launch training jobs.  
4. **Deliver Results** – The new pipeline reduced the average model training time by 30 % (from 12 h to 8 h) while maintaining compliance, and we passed all external audits with zero findings.

**Result**  
We avoided a $5 M penalty, improved model latency by 20 %, and gained a 98 % customer satisfaction score on privacy queries. The bar‑raiser would note my end‑to‑end ownership, depth of technical detail (KMS, Macie, IAM), quantified impact, and iterative learning from the first audit failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
