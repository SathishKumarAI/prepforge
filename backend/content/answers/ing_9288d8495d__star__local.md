---
qid: ing_9288d8495d__star__local
question: 'Explain: And we have actually an indexing service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 325
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:07-05:00'
sources: []
---

**Situation:**  
At my previous startup I was leading the team that built a recommendation engine for a large e‑commerce platform. Our model produced personalized product suggestions but the latency during peak traffic hit 1.2 seconds, far above the 300 ms SLA we promised to advertisers.

**Task:**  
I needed to reduce inference time without sacrificing prediction quality, so I decided to implement an indexing service that would cache and quickly retrieve the most relevant feature vectors for each user instead of recomputing them on every request.

**Action:**  
I designed a two‑layer index: first, a Bloom filter in Redis to reject irrelevant users instantly; second, a locality‑aware hash table stored in Apache Ignite that held pre‑computed latent factors from our matrix‑factorization model. I added a background job that refreshed the cache every 15 minutes and used Kafka for real‑time updates when user behavior changed. The service exposed a lightweight REST API that returned top‑10 recommendations with a 50 ms response.

**Result:**  
Latency dropped from 1.2 seconds to 210 milliseconds, exceeding our SLA by 30 %. Click‑through rate on the recommended products rose 18% in the following month, proving the trade‑off between caching and model freshness worked well. I learned that a well‑designed indexing layer can be as powerful as algorithmic tweaks for scaling ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
