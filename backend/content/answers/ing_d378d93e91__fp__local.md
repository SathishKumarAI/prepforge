---
qid: ing_d378d93e91__fp__local
question: 'Explain: Load Balancer / API Gateway — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 476
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:38-05:00'
sources: []
---

**Fundamental Problem**

In a high‑traffic social network each request (image upload, feed fetch, like) touches multiple services: storage, cache, recommendation, analytics. If every user hit the same backend node, that node becomes a bottleneck and single point of failure. The *load balancer*/API gateway is the first decision layer that routes traffic to an optimal pool of service instances while preserving consistency, latency, and fault tolerance.

**Why It Must Work That Way**

1. **Capacity Planning → Elasticity** – By distributing requests evenly (round‑robin, least‑connections) we keep per‑node CPU/RAM within a target utilization window. This is the operational manifestation of *load balancing as an optimization problem*: minimize maximum node load subject to capacity constraints.

2. **Consistency & Session Affinity** – For actions like “like” or “comment”, the gateway must route all requests from a single user to the same instance (sticky sessions) or use distributed locks, ensuring transactional integrity. This is rooted in *causality preservation* in concurrent systems.

3. **Fault Isolation** – Health checks and circuit breakers at the gateway level implement *self‑healing*, preventing cascade failures—a direct application of probability theory: if a node fails with probability p, isolating it keeps overall system reliability bounded by (1–p)ⁿ.

4. **Security & Rate Limiting** – The gateway is the front door; it enforces authentication tokens and rate limits per API key, turning *information‑theoretic privacy* into practical controls.

**Non‑obvious Insight**

Most designs treat the gateway as a “black box” that merely forwards traffic. In reality, **its routing policy should be data‑aware**: cache hit ratios, user geography, or even model confidence scores (e.g., image classification) can guide request placement. This turns the gateway into an *adaptive optimizer* that reduces downstream latency and storage costs by co‑locating hot data with compute—an often overlooked synergy between networking and analytics layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
