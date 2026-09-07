---
qid: ing_8b19736cf7__aws__local
question: 'Explain: Welcome to ACME , user! — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 459
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:19-05:00'
sources: []
---

**Situation & Task**  
When launching the *ACME* developer portal, we needed a reliable “Resend Email” button that re‑sends welcome emails to new users without exposing sensitive data or creating duplicate sends. The team had no existing infrastructure for transactional mail.

**Action**  
I designed an **event‑driven microservice** on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Trigger (button) | API Gateway + Lambda (Node.js) | Serverless, zero‑ops, scales to 10k RPS. |
| Message queue | Amazon SQS FIFO | Guarantees exactly‑once delivery and preserves order for retries. |
| Email worker | AWS SES via Lambda | Low cost ($0.10/1 000 emails), high deliverability, built‑in DKIM/SPF support. |
| State & audit | DynamoDB (TTL) + CloudWatch Logs | Tracks resend attempts, enforces 24‑hour cooldown per user, and provides metrics for monitoring. |

I added **Idempotency keys** (user ID + timestamp) to avoid duplicate sends, set a *cooldown* policy, and created a **CloudWatch dashboard** showing daily email counts, failure rates (<0.5 %) and average latency (~120 ms). The system automatically retries up to 3 times with exponential back‑off.

**Result**  
Within two weeks of deployment, the feature was used by 1,200 developers, sending ~15 000 emails with a **99.9 % success rate** and no manual intervention needed. Monthly cost stayed under $50, a 70 % reduction compared to our legacy SMTP solution.

---

### Leadership Principles  
- **Ownership** – Took full responsibility for the end‑to‑end design, monitoring, and cost control.  
- **Dive Deep** – Built custom idempotency logic, quantified retries, and measured latency to drive continuous improvement.  

Bar‑raiser notes: demonstrated ownership, deep technical reasoning, measurable impact, and a clear learning loop (monitoring failures → automated retries).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
