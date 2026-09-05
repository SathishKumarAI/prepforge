---
qid: ing_94e82a5cea__star__local
question: 'Explain: Deciding Between Redundancy and Clustering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:37-05:00'
sources: []
---

**Situation** – At my last role I was leading the rollout of a real‑time fraud detection model that had to serve 50k requests per second with <10 ms latency. The existing single‑node deployment started hitting CPU saturation during peak hours, and downtime risked a $200k loss per hour.

**Task** – I needed to design an architecture that could scale horizontally while ensuring zero service interruption if any node failed, all within the budget of our on‑prem data center.

**Action** – First, I evaluated pure redundancy: duplicate servers behind HAProxy with health checks. That gave instant failover but didn’t help with load spikes. Next, I introduced Kubernetes clustering with StatefulSets for the model containers and used Redis as a shared cache to avoid duplicated inference work. I set up horizontal pod autoscaling based on CPU usage (threshold 70%) and implemented a rolling update strategy so new nodes could be added without downtime. We also added a lightweight “pre‑warm” service that kept GPU memory ready, cutting cold start latency.

**Result** – The cluster handled peak loads at 60 k req/s with average latency dropping to 7 ms, and any node failure was masked within 2 seconds. Cost rose by only 15% due to the added nodes, but we gained a 99.999% uptime SLA. I learned that redundancy is great for fault tolerance, while clustering plus smart caching gives you the scalability you need without duplicating effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
