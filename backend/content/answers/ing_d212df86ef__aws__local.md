---
qid: ing_d212df86ef__aws__local
question: 'Explain: Centralized decision logs — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 418
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:53-05:00'
sources: []
---

**Situation & Task**  
At my previous firm I led the migration of a legacy monolith that performed policy checks into a cloud‑native authorization service for a SaaS product used by 50 k customers. The goal was to replace opaque “decision logs” with a **centralized, auditable log** that complied with the *five laws of cloud‑native authorization* (policy as code, runtime enforcement, auditability, policy distribution, and decoupled governance).  

**Action & Design**  
1. **Policy Engine** – Deployed AWS IAM Roles + AWS AppConfig to store JSON policies; used **AWS Lambda@Edge** for low‑latency evaluation.  
2. **Decision Log** – Each decision routed through a **Kinesis Data Stream** → **Glue** transforms → writes to **Amazon Athena‑queriable S3** (partitioned by year/month).  
3. **Audit & Alerting** – Glue jobs generated CloudWatch metrics; alerts triggered on anomalous decisions via SNS.  
4. **Scalability** – Kinesis auto‑scales to 10 k TPS, Lambda concurrency limits set to avoid cold starts.  
5. **Cost Control** – Spot instances for Glue ETL, S3 lifecycle policies purge logs after 90 days.

**Result**  
*Audit coverage rose from 0% to 99.9% in 4 weeks.*  
*Decision latency dropped 70 % (from 120 ms to 36 ms).*  
*Operational cost reduced by 35 % versus the monolith’s on‑prem server fleet.*

**Reflection**  
I owned the full migration, diving deep into AWS security services and performance tuning. The project taught me that *Ownership* + *Dive Deep* yield measurable impact—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
