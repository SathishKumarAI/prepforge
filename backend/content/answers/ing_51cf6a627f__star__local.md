---
qid: ing_51cf6a627f__star__local
question: 'Explain: Step 4: Rate Limiting — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 359
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:54-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched a new payment processing microservice that was exposed via an external REST API. Within the first week of production, traffic spiked during a promotional campaign, causing latency to climb from 120 ms to over 1.5 s and triggering time‑outs for several high‑value customers.

**Task:**  
I had to implement a mechanism to protect our downstream services from overload while ensuring legitimate requests still received timely responses—essentially designing a rate‑limiting strategy that could be enforced at the edge of our architecture.

**Action:**  
We introduced an API Gateway (Kong) in front of all microservices. Using its built‑in “rate-limiting” plugin, I configured per‑consumer quotas: 200 requests/min for free tier users and 1,000 requests/min for premium customers. The gateway aggregates request counts across instances via Redis, so limits are consistent cluster‑wide. I also added a “burst” allowance of 10 requests to handle short spikes without rejecting traffic outright. For observability, the plugin exposes Prometheus metrics; I set up alerts when any consumer exceeded 80% of their quota.

**Result:**  
After deployment, our average response time dropped back to 140 ms, and we avoided a single incident of service outage during peak traffic. The system handled 30% more concurrent users without additional infrastructure costs. I learned that an API Gateway not only centralizes security and routing but also simplifies distributed rate limiting with minimal code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
