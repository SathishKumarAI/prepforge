---
qid: ing_b9c5d39b2f__aws__local
question: 'Explain: Concurrent requests limiter — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 442
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:56-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
I led a project to expose a recommendation model as a public REST API for an e‑commerce platform that was receiving 3 k RPS during flash sales. The service crashed when traffic spiked, causing a 12 % drop in conversion rates.

**Action (Dive Deep & Bias for Action)**  
1. **Requirement analysis:** Each user may send up to 10 requests/second; burst tolerance of 30 per minute.  
2. **Design:**  
   * **API Gateway + Lambda** – front‑end handles HTTPS and basic auth.  
   * **Token‑bucket rate limiter stored in DynamoDB (partition key = userId, sort key = window timestamp).**  
   * **Lambda checks the bucket atomically using a conditional write; if quota exceeded it returns 429.**  
   * **CloudWatch Alarms** trigger auto‑scaling of Lambda concurrency and alert ops.  
3. **Scalability:** DynamoDB handles millions of concurrent reads/writes with single‑digit ms latency; API Gateway scales to >10 k RPS automatically.  
4. **Cost & trade‑offs:** 1 M read/write units/month ≈ $30; we saved $400/month vs. overprovisioning EC2. The only trade‑off is a small extra round‑trip for the limiter, but latency stayed < 200 ms.

**Result (Deliver Results)**  
Post‑deployment:  
* **99.9 % request success rate** even during peak sales.  
* **Conversion rates recovered to +8 %** versus pre‑fix period.  
* **Cost down 30 %** on compute resources.  

I documented the failure mode, updated our runbook, and shared a post‑mortem with the team—showing true ownership and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
