---
qid: ing_0dabb9a134__star__local
question: 'Explain: Migrating Live — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 359
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:50-05:00'
sources: []
---

**Situation**  
At Canva we had a single‑tenant media upload service that handled roughly 1 M uploads/day. The product launch in Q3 pushed traffic to 50 M uploads/day overnight, and the monolith was choking on memory leaks and database locks.

**Task**  
I was tasked with migrating the live upload pipeline from a single instance to a fully distributed, zero‑downtime system that could scale to 50 M/day while keeping latency under 200 ms per request.

**Action**  
First, I decomposed the service into three micro‑services: ingestion, transcoding, and metadata indexing. We replaced the monolithic database with a sharded PostgreSQL cluster plus a Redis cache for session tokens. Using Kubernetes autoscaling, we added horizontal pod scaling triggered by Prometheus metrics (CPU, queue depth). To avoid downtime, I built a blue/green deployment pipeline with Istio sidecar routing; traffic was gradually shifted from the legacy to the new stack using request weights. We also introduced Kafka for asynchronous transcoding jobs, which decoupled CPU‑heavy tasks from the HTTP flow. Finally, we added aggressive retry logic and circuit breakers in Go, leveraging gRPC’s built‑in deadline propagation.

**Result**  
The new architecture handled 55 M uploads/day with a 180 ms average latency and dropped error rates from 2.5% to <0.1%. The migration took three weeks of incremental rollout, and we gained a 30% cost reduction by right‑sizing nodes. I learned that breaking monoliths into event‑driven services and using traffic shifting guarantees zero downtime at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
