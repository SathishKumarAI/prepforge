---
qid: ing_c9e8dd879a__aws__local
question: 'Explain: Develop emails using React — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 440
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:54-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When we launched our “Resend Email” feature for developers, customers complained that automated emails were missing or delayed during peak traffic. I owned the end‑to‑end flow to reduce failure rate and improve developer experience.

**Action (Dive Deep + Ownership)**  
I re‑architected the email pipeline in React by decoupling UI from backend logic:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| **React UI** | S3 + CloudFront | Low latency, global CDN for instant feedback. |
| **API Layer** | API Gateway + Lambda (Node.js) | Serverless scaling to 10k concurrent requests with zero ops. |
| **Queue** | Amazon SQS FIFO | Guarantees order and deduplication for “Resend” actions. |
| **Processing** | Step Functions → SNS → SES | Orchestrates retries, dead‑letter handling, and email dispatch. |
| **Metrics** | CloudWatch + X-Ray | Real‑time latency and error dashboards. |

I added idempotent request IDs to React, stored them in DynamoDB, and used Lambda to enforce a 5‑minute resend window—preventing spam. Cost modeling showed a 30 % reduction vs our legacy EC2 pool while keeping RTO < 200 ms.

**Result (Deliver Results)**  
Within two weeks:  

- **Email failure rate dropped from 12 % → 0.3 %.**  
- **Customer support tickets for “missing email” fell by 85 %.**  
- **Developer satisfaction score rose from 4.1 to 4.8/5.**

**Learnings (Bar‑raiser focus)**  
I documented the failure modes, shared a post‑mortem with the team, and instituted automated alerts for queue depth. This reinforced ownership and continuous improvement—key AWS leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
