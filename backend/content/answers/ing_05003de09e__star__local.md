---
qid: ing_05003de09e__star__local
question: 'Explain: Rate Limiting — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:57-05:00'
sources: []
---

**Situation** – At my previous fintech startup we launched a real‑time fraud detection API that was suddenly hit by a surge of traffic during a holiday promotion. The service went from 2k QPS to 25k QPS, and our latency jumped from 120 ms to over 1 s, causing customer churn.

**Task** – I had to design an elastic rate‑limiting layer that would keep the fraud engine healthy while allowing legitimate traffic through, with a target of ≤200 ms response time under peak load.

**Action** – I chose a token‑bucket algorithm backed by Redis Cluster for shared state. Tokens were issued per API key and refreshed at 10 tokens/second. To avoid “thundering herd” on the backend, I added a leaky‑bucket cache in each microservice that pulled tokens from Redis only every 100 ms. I also implemented adaptive thresholds: if average latency >250 ms, the bucket size shrank by 20% for the next minute. For monitoring, I exposed Prometheus metrics and set up alerts when burst limits were hit.

**Result** – After deployment, peak QPS stayed within safe bounds, latency remained under 180 ms even at 22k QPS, and we saw a 35 % reduction in API errors during the promotion. I learned that coupling algorithmic simplicity with distributed state and adaptive tuning is key for production‑grade rate limiting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
