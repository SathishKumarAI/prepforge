---
qid: ing_2332816bc9__star__local
question: 'Explain: System Design BASICS: Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 354
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:30-05:00'
sources: []
---

**Situation:** In my last role I was tasked with launching a recommendation engine for an e‑commerce platform that had just doubled its user base overnight after a viral marketing campaign. The existing monolithic service could only serve about 5,000 concurrent requests per minute before latency spiked to over 400 ms.

**Task:** I needed to redesign the system so it could handle at least 50,000 concurrent requests with sub‑200 ms latency while keeping cost predictable and maintaining data consistency across services.

**Action:** I started by decomposing the monolith into microservices: a feature extraction service, a model inference service, and an async cache layer. For scaling, I evaluated horizontal vs. vertical options. Vertical scaling (adding more CPU/memory to a single node) would have required costly high‑end instances and still hit a single point of failure. Instead, I opted for horizontal scaling: deploying the inference service behind a Kubernetes cluster with auto‑scaling enabled. I used Redis as an in‑memory cache for pre‑computed embeddings to reduce load on the model server. I also introduced a read replica pool for the user profile database to distribute query traffic.

**Result:** After rollout, we achieved 48,000 concurrent requests with average latency of 145 ms, a 70% reduction from the baseline. Costs stayed within 12% of the original budget thanks to efficient autoscaling and caching. I learned that horizontal scaling is often more resilient and cost‑effective for stateless ML inference workloads, while vertical scaling can still be useful for tightly coupled stateful components or when resource limits are hard to predict.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
