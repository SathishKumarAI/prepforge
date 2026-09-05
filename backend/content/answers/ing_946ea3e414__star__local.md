---
qid: ing_946ea3e414__star__local
question: What is Spotify? — Design Spotify | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 332
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:48-05:00'
sources: []
---

**Situation**  
When I joined a startup that was building a music streaming platform, we were stuck with a monolithic codebase and slow content delivery. The product team needed a scalable system to support millions of concurrent users while keeping latency under 300 ms for track playback.

**Task**  
My goal was to redesign the architecture from scratch: decouple services, implement efficient caching, ensure high availability, and provide real‑time recommendation pipelines—all within six months.

**Action**  
I split the platform into microservices—User Service (JWT auth + Redis session store), Catalog Service (PostgreSQL + ElasticSearch for metadata search), Streaming Service (CDN‑backed GCS buckets, HLS segmentation), Recommendation Engine (Spark jobs on Kubernetes feeding a Kafka stream to a TensorFlow model). For low‑latency playback I introduced a CDN edge cache and pre‑warm the first 10 seconds of each track. We used Kubernetes autoscaling for compute nodes and Prometheus/Grafana for observability, adding circuit breakers with Hystrix patterns.

**Result**  
The new architecture handled 5 M concurrent streams during peak hours with 99.9% uptime. Latency dropped from 1.2 s to 220 ms on average. User churn fell by 12%, and the recommendation engine increased click‑through rates by 18%. I learned that a modular, observability‑centric design not only improves performance but also accelerates feature rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
