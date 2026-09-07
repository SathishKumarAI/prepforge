---
qid: ing_6ec94028d0__aws__local
question: 'Explain: Minimal Data Permissions — How do we manage sensitive data in
  a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 386
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:29-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign our recommendation engine so that it could use user‑profile data without exposing PII to the ML pipeline. The goal: protect sensitive attributes while maintaining a 20 % lift in click‑through rate (CTR).

**Action**  
1. **Data Tokenization & Masking** – Used **AWS Glue DataBrew** to replace raw PII with deterministic tokens before ingestion into **Amazon SageMaker**.  
2. **Fine‑grained IAM Policies** – Created a separate **S3 bucket** (`sagemaker-ml-data`) and attached an IAM policy that allows only the `sagemaker:InvokeEndpoint` role to read it; no other service has access.  
3. **KMS Encryption** – All objects in the bucket are encrypted with a customer‑managed CMK, ensuring data is never stored in plaintext.  
4. **Audit & Monitoring** – Enabled **AWS CloudTrail** and **Amazon GuardDuty** to log every access attempt; alerts trigger if an unauthorized role tries to read the bucket.

**Result**  
- Achieved a 22 % increase in CTR while keeping PII tokenized.  
- Reduced data‑access incidents to zero over six months.  
- Cost impact: KMS encryption added <$5/month, CloudTrail logs were archived to S3 Glacier for $0.004 per GB.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dove deep into IAM and encryption nuances, quantified the lift in user engagement, and learned that tokenization coupled with strict policy separation is a robust baseline for sensitive data in ML workloads.  

*Leadership Principles:* **Customer Obsession**, **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
