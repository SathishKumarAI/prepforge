---
qid: ing_b897811280__star__local
question: 'Explain: Rate Limiting — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 350
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:28-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we launched a new payment‑processing microservice that was exposed via an external REST API. Within the first week of traffic, our servers were overwhelmed and latency spiked to over 5 seconds, causing a 12% drop in user sign‑ups.

**Task**  
I had to protect the service from sudden load spikes, enforce fair usage for partners, and keep response times under 200 ms while maintaining developer experience.

**Action**  
I introduced an API Gateway (Kong) as a reverse proxy. First, I defined rate‑limit policies: 100 requests per minute per client key, with burst capacity of 20. Using Kong’s built‑in plugins, I added JWT authentication and request logging. To handle bursts during peak hours, I enabled the “leaky bucket” algorithm and backed the gateway with a Redis cache for token buckets to avoid database hits. I also configured circuit breakers that would return a 429 status code once limits were hit, guiding clients to retry later. Finally, I set up Grafana dashboards to monitor request counts, latency, and error rates in real time.

**Result**  
After deployment, average latency dropped from 5 seconds to 120 ms, while the API remained available during a 200% traffic surge. We reduced 4xx errors by 30% and gained clear insights into usage patterns, which helped us negotiate fairer quotas with partners. I learned that a well‑configured gateway is as much about protecting infrastructure as it is about providing a predictable developer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
