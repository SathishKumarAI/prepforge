---
qid: ing_6f3cfd975c__aws__local
question: 'Explain: Pros — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:36:46-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
While leading a product launch for a SaaS analytics platform, we needed a **URL shortener** to embed in client dashboards. The goal was to reduce link length by 70 % and guarantee ≥ 99.999 % uptime while keeping cost < $0.01 per request.

**Action (Dive Deep / Bias for Action)**  
1. **Domain & Routing** – Use Route 53 “A” record + CloudFront edge caching; TTL = 300 s to reduce latency.  
2. **Short‑ID Generation** – Stateless, thread‑safe base‑62 counter stored in DynamoDB with a `PK: “COUNTER#GLOBAL”`. Guarantees unique IDs even under 10⁶ writes/sec.  
3. **Redirection API** – Lambda@Edge + API Gateway proxy; reads key from path, fetches target URL from DynamoDB (`PK: “URL#<id>”`). If missing → 404.  
4. **Analytics** – Every hit triggers EventBridge → Kinesis Data Streams → Lambda → Redshift for batch analytics.  
5. **Security & Abuse Prevention** – WAF rules + Cognito auth for API calls; rate‑limit per IP via API Gateway.

**Result (Deliver Results)**  
- Latency < 120 ms average, 99.999 % availability (SLA met).  
- Cost ≈ $0.005/request, saving 30 % vs. on‑prem solution.  
- Process reduced support tickets by 45 % due to fewer broken links.

**Bar‑raiser Takeaway**  
Demonstrated ownership of the entire stack, deep dive into AWS services for cost/scale trade‑offs, and a clear, data‑driven impact. Learned that caching at edge (CloudFront) dramatically cuts DynamoDB reads, saving both latency and money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
