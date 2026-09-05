---
qid: ing_ee33c44690__star__local
question: 'Explain: Example Workflow — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 333
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:00-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup we had an internal tool that generated promotional links for marketing campaigns. The old system was a monolithic PHP script that stored every URL in a MySQL table; it crashed under heavy traffic and the link‑generation latency hit 500 ms, causing a drop in conversion rates.

**Task:**  
I was asked to architect a scalable, low‑latency URL shortener service that could handle 10k requests per second, support custom aliases, and provide analytics (click count, geolocation).

**Action:**  
I chose a microservice stack: Go for the API layer, Redis as a cache + key generator (using atomic INCR to avoid collisions), PostgreSQL for persistence, and Kafka for click‑streaming. The short ID was generated with a base‑62 encoder on the sequence number. I implemented rate limiting via token buckets in Redis, added CDN edge caching for the redirect endpoint, and exposed an async REST API for analytics queries. For resilience, I set up multi‑AZ deployments in AWS ECS and used CloudWatch alerts.

**Result:**  
The new service reduced average redirect latency from 500 ms to <20 ms, handled peak loads of 15k RPS without downtime, and increased campaign click-through rates by 12%. I learned how to balance consistency, performance, and cost when designing a seemingly simple but traffic‑heavy web service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
