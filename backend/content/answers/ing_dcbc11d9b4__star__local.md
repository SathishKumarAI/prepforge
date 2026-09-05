---
qid: ing_dcbc11d9b4__star__local
question: 'Explain: When to Choose Stateless Architecture — Stateful vs. Stateless
  Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 307
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:28-05:00'
sources: []
---

**Situation** – At my previous company we built a recommendation engine that served millions of users per day. The initial design used a monolithic stateful service that kept user session data in memory to personalize recommendations on the fly.

**Task** – I was asked to reduce latency and increase horizontal scalability while keeping personalization accuracy above 85 %. We needed an architecture that could handle sudden traffic spikes during product launches without crashing.

**Action** – I proposed a stateless micro‑service model. Each request carried all necessary context in a signed JWT, and the service queried a fast key‑value store (Redis) only for cold‑start embeddings. We moved heavy feature extraction to an asynchronous batch job that updated a read‑only vector index in Elasticsearch. This allowed any instance of the inference API to be interchangeable; we used Kubernetes autoscaling with horizontal pod autoscaler driven by CPU and request latency metrics.

**Result** – Traffic spikes increased from 1 k/s to 15 k/s without errors, and response time dropped from 350 ms to 80 ms. The system scaled linearly across 8 nodes during a flash sale. I learned that statelessness trades off some cache locality for elasticity, but with proper external state stores it can dramatically improve reliability and maintainability in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
