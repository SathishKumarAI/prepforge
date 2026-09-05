---
qid: ing_1f5f5f672c__star__local
question: 'Explain: So what do you do? One of — System Design BASICS: Horizontal vs.
  Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 347
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:01-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with scaling our recommendation engine from a single‑node deployment to support a 50% increase in concurrent users during holiday sales. The existing system hit CPU saturation and latency spiked past the SLA.

**Task:**  
I needed to design an architecture that could handle peak load while keeping cost under $30k/month, and ensure zero downtime migration.

**Action:**  
First I evaluated horizontal scaling: adding more stateless workers behind a load balancer would increase capacity linearly but required sharding user embeddings across nodes. We chose Kubernetes with autoscaling pods, using Redis‑Cluster for distributed cache to keep lookup latency <5 ms. To avoid data duplication we added a read‑through cache layer and used consistent hashing to route requests.  
For vertical scaling I benchmarked the GPU‑accelerated inference node; upgrading from 8 CPU/16GB RAM to 32 CPU/64GB increased single‑node throughput by ~3× but cost surged 4×, so we kept it as a fallback for batch jobs only.  
We also added circuit breakers and rate limiting in the API gateway to protect downstream services.

**Result:**  
Post‑deployment, request latency dropped from 350 ms to 70 ms, and throughput increased by 280% during peak traffic. Monthly ops cost stayed within $28k, meeting our budget. I learned that a hybrid approach—horizontal scaling for real‑time inference with smart caching, and vertical upgrades only for heavy batch processing—offers the best trade‑off between performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
