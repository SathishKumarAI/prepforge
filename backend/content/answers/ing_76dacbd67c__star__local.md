---
qid: ing_76dacbd67c__star__local
question: 'Explain: Facebook System Design | Instagram System Design | System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:35-05:00'
sources: []
---

**Situation:**  
At my previous company we were tasked with building a new photo‑sharing app similar to Instagram for a client that expected millions of daily active users within six months. The prototype had high latency and crashed under load.

**Task:**  
Design a scalable, low‑latency system that could handle real‑time image uploads, dynamic feeds, and 24/7 availability while keeping cost in check.

**Action:**  
I architected a microservices stack: an API gateway (NGINX + Envoy), a Go service for upload handling that stores images in S3 with automatic transcoding via Lambda. I used Redis Streams to queue feed updates and Kafka for cross‑service messaging, with Cassandra as the read‑optimized store for user feeds. For caching, we deployed CloudFront edge caches and local memcached instances per region. Load testing (k6) revealed a 400 ms average latency; we introduced request throttling and horizontal scaling rules in Kubernetes to keep it below 200 ms under peak load. I also implemented automated health checks and circuit breakers with Hystrix patterns.

**Result:**  
The system supported 3 million concurrent uploads per day with <180 ms read latency, a 99.9% uptime SLA, and cut hosting costs by 25% compared to the monolith prototype. I learned that balancing real‑time data pipelines with eventual consistency and cost‑effective caching is key in high‑scale social platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
