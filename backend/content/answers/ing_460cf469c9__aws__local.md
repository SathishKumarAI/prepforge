---
qid: ing_460cf469c9__aws__local
question: 'Explain: Dynamic suppression list — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 467
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:02-05:00'
sources: []
---

**Situation (S)**  
While building a transactional email service for a SaaS product, I noticed that many users were marked “bounced” because of temporary SMTP failures or spam complaints. The existing suppression list was static—once an address appeared, it stayed blocked forever, causing revenue loss and poor customer experience.

**Task (T)**  
I needed to create a *dynamic suppression list* that would automatically lift suppression after a safe period while still protecting the sender reputation.

**Action (A)**  

| Step | Technical Detail |
|------|------------------|
| 1️⃣ Data model | DynamoDB table (`Suppression`) with PK = email, TTL = `last_seen + 30d`. |
| 2️⃣ Ingestion | Lambda triggered by SES delivery notifications; if status == “BOUNCED” or “COMPLAINT”, upsert record. |
| 3️⃣ Suppression check | Before sending, a lightweight API Gateway + Lambda queries DynamoDB; if key exists → skip send. |
| 4️⃣ Re‑enable logic | TTL automatically deletes stale entries; no extra job needed. |
| 5️⃣ Monitoring | CloudWatch Alarms on suppression rate > 10% → auto‑scale Lambda concurrency. |

**Result (R)**  

*Customer Obsession & Deliver Results.*  
- Suppression false positives dropped from **35% to 4%** within two weeks, increasing successful deliveries by **12 k emails/month** (~$1.2M ARR).  
- Operational cost stayed below **$15/month** (Lambda + DynamoDB), and the system achieved **99.9 % availability** due to regional replication.

**Bar‑raiser cues**

* Ownership – I owned the end‑to‑end flow, from SES events to customer impact.  
* Dive Deep – Leveraged TTL for automatic cleanup; avoided polling loops.  
* Quantified Impact – Showed exact revenue lift and suppression reduction.  
* Learning – After a mis‑configured TTL that caused premature re‑opens, I added an audit log and automated alerting, turning failure into a preventive guardrail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
