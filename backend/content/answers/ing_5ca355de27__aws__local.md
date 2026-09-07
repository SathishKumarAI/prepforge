---
qid: ing_5ca355de27__aws__local
question: How do you handle secrets, data retention, and compliance for an LLM platform?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 436
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:01-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch an internal LLM‑based recommendation engine that would process customer logs while meeting SOC 2 and GDPR requirements.

**Action**  
* **Secrets:** Stored every credential in **AWS Secrets Manager**, rotated automatically (30‑day policy) and referenced only via IAM roles – no hard‑coded values.  
* **Data Retention & Storage:** Raw logs went to **S3 Glacier Deep Archive** with a lifecycle rule that deletes them after 12 months, while the model’s training set lived in an encrypted **EFS** tiered by access patterns (hot vs cold). All data was encrypted at rest using **AWS KMS CMKs** and in transit via TLS.  
* **Compliance:** Enabled **CloudTrail** and **GuardDuty** for continuous monitoring; used **Amazon Macie** to flag PII. Implemented a **Data Loss Prevention policy** that automatically quarantined any request containing personal data unless it matched an approved use‑case.  
* **Governance:** Created a **“Data Owner”** role per business unit, and ran quarterly audits using **AWS Config Rules** (e.g., `s3-bucket-public-read-prohibited`).  

**Result**  
Within three months we launched the platform with zero compliance incidents, reduced storage costs by 35 % through lifecycle policies, and achieved a 99.999 % availability SLA for the inference API—all while keeping data handling fully auditable.

> *Leadership Principles:* **Ownership**, **Dive Deep** – I owned every layer of the stack, dissected each service’s security model, and quantified the impact on cost and compliance.  
> *Bar‑raiser cue:* Demonstrated end‑to‑end control, deep technical detail, and a clear, metric‑driven outcome.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
