---
qid: ing_466e51352e__star__local
question: 'Explain: Horizontal Scaling — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:33-05:00'
sources: []
---

**Situation** – I was leading a team that built an image‑recognition service for a mobile app used by 1.2 million daily users. Our API latency hit 350 ms on average, and we were approaching the limit of our single GPU server.

**Task** – Reduce request latency to under 200 ms while keeping cost predictable, and make the system resilient to traffic spikes during product launches.

**Action** – I first evaluated vertical scaling: adding more memory, a faster CPU, or a larger GPU to the existing node. While this lowered CPU wait times by ~30 %, it hit hardware limits quickly and increased our monthly bill by 80 %. Instead, we moved to horizontal scaling: containerized the inference model with Docker, deployed it on Kubernetes, and used an autoscaler that spun up new pods based on GPU queue depth. We also implemented a round‑robin load balancer and added a small in‑memory cache for frequently requested images. This approach let us scale from 1 to 12 replicas within minutes during peak traffic.

**Result** – Latency dropped to 120 ms on average, the 95th percentile fell below 250 ms, and we handled a 400 % traffic spike during a new feature rollout without any downtime. The cost per inference stayed flat because GPU resources were shared across multiple users. I learned that for ML workloads, horizontal scaling offers elasticity and fault tolerance that vertical upgrades can’t match when dealing with unpredictable user patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
