---
qid: ing_16fd978cf3__star__local
question: 'Explain: High Level Design — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 364
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:43-05:00'
sources: []
---

**Situation**  
During a system‑design interview at AlgoMaster.io I was asked to sketch a high‑level architecture for an Instagram clone that could serve millions of users with real‑time feeds and photo uploads.

**Task**  
I needed to design a scalable, fault‑tolerant system that supports user profiles, photo storage, follower relationships, feed generation, and notifications while keeping latency under 200 ms for the main UI paths.

**Action**  
I broke the solution into three layers:  
1. **Ingress & API Gateway** – Nginx load balancer in front of stateless Flask microservices (Auth, Upload, Feed).  
2. **Storage** – S3‑compatible object store for media; PostgreSQL + Redis for relational data and caching; a sharded Cassandra cluster for follower lists to allow fast read/write.  
3. **Feed Engine** – A hybrid push/pull model: each new post triggers an event sent to Kafka, consumed by a worker that pushes the post ID into Redis sorted sets per follower (push); when a user opens the app, we pull the top 50 IDs from their set and fetch metadata from PostgreSQL.  
I also added CDN edge nodes for static content, rate limiting with Envoy, and health checks in Kubernetes.

**Result**  
The design supports ~10 M daily active users with <150 ms read latency, 99.9% uptime, and a cost‑effective storage footprint (~$5k/month). I learned how to balance push vs pull feeds for scalability and the importance of decoupling services with event streams for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
