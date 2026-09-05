---
qid: ing_9eab1e81f0__star__local
question: 'Explain: The patterns — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:23-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with launching a real‑time recommendation engine for our mobile app. The existing monolith made it hard to update models without breaking the front end, and we were hitting 4 s latency on API calls.

**Task**  
I needed to expose the ML model as a lightweight service that could scale independently, reduce front‑end coupling, and cut response time below 1 s for 95 % of requests.

**Action**  
I designed an **API Gateway + Backend‑for‑Frontends (BFF)** architecture. The gateway (AWS API Gateway + Lambda authorizer) handled authentication, throttling, and route selection. For each mobile platform I built a dedicated BFF in Node.js that aggregated the model’s prediction endpoint with user context from DynamoDB and cached recent results in Redis. I containerized the inference microservice using Docker and deployed it to ECS Fargate, auto‑scaling based on CPU usage. The BFF also performed feature pre‑processing locally, so only minimal payloads hit the model.

**Result**  
Latency dropped from 4 s to 0.7 s (95th percentile), traffic to the inference service fell by 30 % due to caching, and we could roll out new models without redeploying front ends. I learned that a well‑structured BFF can decouple ML workloads from UI concerns while keeping user experience snappy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
