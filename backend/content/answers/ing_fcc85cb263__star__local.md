---
qid: ing_fcc85cb263__star__local
question: 'Explain: Caching — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 315
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:03-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time loan‑approval service that pulled credit scores from three external APIs. The latency hit our SLA of 200 ms, causing a spike in abandoned applications during peak hours.

**Task:**  
I had to reduce response time by 60% while keeping the system resilient and cost‑effective.

**Action:**  
First, I implemented an API gateway (Kong) as a single entry point. It handled authentication, rate limiting, and routing to the appropriate microservice. Then, I added Redis caching at the gateway level: for each unique credit‑score request, the gateway cached the response with a TTL of 5 minutes. I also enabled request collapsing so identical calls within that window hit the cache instead of the downstream APIs. To monitor, I instrumented Prometheus alerts when cache hit rates fell below 85%. Finally, I set up fallback logic to return a “partial approval” path if external services timed out.

**Result:**  
The average end‑to‑end latency dropped from 320 ms to 110 ms—exceeding the SLA by 45%. Cache hit rate stabilized at 92%, cutting outbound API calls by ~70% and saving us $3k/month. I learned that combining a robust gateway with targeted caching not only meets performance goals but also adds a safety net for third‑party dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
