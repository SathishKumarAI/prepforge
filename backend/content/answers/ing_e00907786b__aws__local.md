---
qid: ing_e00907786b__aws__local
question: 'Explain: Avoid Sensitive Data Leaks — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 401
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:02-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a webhook service for a SaaS product that sends customer‑specific events (e.g., subscription renewals) to third‑party partners without leaking any PII or proprietary data.

**Action**  
1. **Ownership & Dive Deep** – I first mapped every data flow and identified the only fields required by the partner (event ID, timestamp, status).  
2. **Design** –  
   * Use an **API Gateway** with a Lambda authorizer that validates JWTs from partners.  
   * Store webhook payload templates in **Amazon DynamoDB**; each template contains placeholders for non‑sensitive attributes only.  
   * A **Lambda function** pulls the template, injects allowed data, and publishes to **SNS** (dedicated topic per partner).  
3. **AWS Services & Trade‑offs** –  
   * **DynamoDB** gives low latency and auto‑scales; cost is $0.25/GB/month vs. RDS ($0.12/hr).  
   * **SNS** decouples delivery, allowing retries without re‑processing logic.  
   * Use **AWS KMS** to encrypt the template table at rest; no PII is ever written to disk.  
4. **Bias for Action & Deliver Results** – Deployed in 3 hrs; monitored with CloudWatch; achieved 99.9% successful delivery and zero data‑leak incidents over 6 months.

**Result**  
Reduced compliance risk by 100%, cut operational cost by 15% (Lambda + DynamoDB vs. traditional RDS), and earned a **Customer Obsession** score of 4.8/5 from partner feedback. I documented the pattern, and it became our internal best practice for all future webhook integrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
