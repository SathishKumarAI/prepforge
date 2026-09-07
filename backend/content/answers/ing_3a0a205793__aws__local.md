---
qid: ing_3a0a205793__aws__local
question: 'Explain: Data Desensitization — How do we manage sensitive data in a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 459
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:32-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional project to launch an ML model that predicts customer churn for a telecom client. The dataset contained PII (phone numbers, addresses, payment history) that had to be protected under GDPR and our internal compliance policy.

**Action**  
1. **Data ingestion & cataloguing** – Used AWS Glue with Lake Formation to create a centralized data lake in S3, granting fine‑grained IAM policies per role.  
2. **Desensitization pipeline** – Implemented an ETL job that:  
   * Replaced direct identifiers with hashed tokens (SHA‑256 + KMS‑managed salt).  
   * Applied field‑level encryption for highly sensitive columns using AWS KMS and S3 SSE‑KMS.  
   * Masked or removed any residual PII before loading into the model training layer.  
3. **Audit & monitoring** – Enabled CloudTrail logs on all Lake Formation actions and set up Athena queries to audit token usage; alerts were sent to a security Ops Slack channel.

**Result**  
- Reduced compliance risk: 0 data‑breach incidents in the first year, meeting GDPR audit score of 99%.  
- Maintained model performance (AUC‑ROC = 0.87) because tokenization preserved unique customer identity.  
- Cut storage costs by 15% through encryption‑only on sensitive partitions.

**Leadership Principles**  
*Customer Obsession*: Ensured customers’ privacy without sacrificing service quality.  
*Ownership & Dive Deep*: Built a reusable, auditable pipeline that other teams adopted for future ML projects.  

**Bar‑raiser takeaways** – I demonstrated ownership by designing the entire end‑to‑end solution, dove deep into encryption trade‑offs (tokenization vs hashing), quantified impact with clear metrics, and learned from an earlier pilot where inadequate masking led to a 3‑day outage; that failure guided our stricter audit design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
