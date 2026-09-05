---
qid: ing_0da620cb06__star__local
question: 'Explain: Rate limit by user — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 392
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:50-05:00'
sources: []
---

**Situation:**  
At my last role I was working on a real‑time recommendation engine that exposed an HTTP endpoint for mobile clients. The traffic spike during peak hours caused the downstream model service to hit CPU limits and we started seeing a 500 error rate of ~12 %.  

**Task:**  
I needed to design and deploy a per‑user rate limiter that would cap requests to 5 calls per second, with a burst allowance of 10, while still allowing legitimate high‑volume use for premium users. The solution had to be stateless enough to scale horizontally but precise enough to enforce limits across distributed instances.  

**Action:**  
I chose Redis as the backing store because of its fast in‑memory operations and built a token bucket algorithm. Each user key stored the current token count and last refill timestamp. On each request I performed an atomic Lua script that: 1) recalculated tokens based on elapsed time, 2) subtracted one if available, or 3) returned “429 Too Many Requests” otherwise. For premium users I switched to a leaky bucket with higher capacity. I wrapped the logic in a FastAPI middleware and exposed metrics via Prometheus (tokens remaining, hit/miss ratios). The code was containerized and deployed behind an NGINX ingress with rate‑limit annotations for an additional safety net.  

**Result:**  
After rollout we saw a 70 % drop in server errors during peak periods and the latency of the recommendation endpoint stayed below 120 ms for 95 % of requests. User churn fell by 3 % in the first month, and I learned that combining an in‑memory data store with a lightweight algorithm can give fine-grained control without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
