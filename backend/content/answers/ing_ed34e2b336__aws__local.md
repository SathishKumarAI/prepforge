---
qid: ing_ed34e2b336__aws__local
question: 'Explain: Everything in your control — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 475
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:40-05:00'
sources: []
---

**Situation & Task**  
In my previous role as a senior backend engineer at a SaaS startup, our “resend‑email” endpoint was hit by 30 % of support tickets each quarter because developers couldn’t reliably trigger test emails in production. The feature was critical for debugging user flows and had to be both instant and auditable.

**Action**  
I owned the redesign:

| Step | AWS Service | Design Reasoning |
|------|-------------|------------------|
| 1️⃣ Request validation & idempotency | API Gateway + Lambda (Python) | Guarantees a single resend per request ID, preventing duplicate sends. |
| 2️⃣ Message queuing & retry logic | Amazon SQS FIFO + DLQ | Enables exactly‑once delivery with configurable retries; DLQ feeds CloudWatch for failures. |
| 3️⃣ Email dispatch | Amazon SES (SMTP interface) | Built‑in deliverability metrics, DKIM/SPF support, and cost per email ~ $0.10. |
| 4️⃣ Audit & monitoring | DynamoDB + CloudTrail | Stores resend metadata; CloudTrail logs Lambda invocations for traceability. |
| 5️⃣ Self‑service UI | Amplify (React) + Cognito | Developers can trigger resends and view status in real time, reducing support tickets. |

I added a “dry‑run” flag to avoid accidental spam and automated unit tests covering 95 % of edge cases.

**Result**  
- Resend latency dropped from ~5 s to <200 ms (real‑time).  
- Support tickets related to email resends fell by **78 %** in the first month.  
- Operational cost increased only 12 % due to SES usage, well within budget.

**Reflection & Learning**  
I learned that ownership means iterating on a customer‑facing feature until it feels “built for developers.” I dove deep into AWS docs and leveraged SQS DLQ patterns, which became reusable across other async workflows. The bar‑raiser expects this depth of technical trade‑offs, measurable impact, and a habit of turning failure (ticket backlog) into an opportunity for system improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
