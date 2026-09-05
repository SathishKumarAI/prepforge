---
qid: ing_f50e7e8833__star__local
question: 'Explain: but it writes them into different availability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:29-05:00'
sources: []
---

**Situation:** At my previous company we were rolling out a real‑time fraud detection model that had to serve millions of transactions per day with <10 ms latency and zero downtime. Our existing single‑zone deployment kept all inference results in one Redis cache, which was a single point of failure.

**Task:** I needed to redesign the architecture so that predictions could be written into separate availability zones while keeping consistency and low latency.

**Action:** I introduced an event‑driven pipeline using Kafka with two topic partitions per zone. The model served via a gRPC endpoint on Kubernetes, running three replicas spread across AZs. Each replica wrote its inference results to a local Redis instance that mirrored data to the other zones through Redis Sentinel. We added health probes and automatic pod restarts; if one zone went down, traffic was routed to the remaining healthy pods by an external load balancer with zone‑aware routing.

**Result:** The system achieved 99.99 % uptime during a sudden AZ outage, latency stayed under 8 ms, and we reduced SLA penalty costs by 30 %. I learned how to combine container orchestration, message queues, and multi‑zone replication to build resilient ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
