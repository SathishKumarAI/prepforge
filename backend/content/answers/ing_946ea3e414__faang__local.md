---
qid: ing_946ea3e414__faang__local
question: What is Spotify? — Design Spotify | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:26-05:00'
sources: []
---

**Clarify**  
> *What exactly do you want me to design?*  
I’ll assume we need a scalable, low‑latency music streaming service that supports millions of users, thousands of artists, and real‑time recommendation.  
Key assumptions:  
- Users stream 24/7; peak load ≈ 1 M concurrent streams.  
- Content is immutable once uploaded (CDN‑friendly).  
- We need personalized playlists and a public radio feature.

**Approach**  
1. **Front‑end** – mobile/web clients → API Gateway.  
2. **API layer** – stateless microservices: Auth, Search, Playback, Recommendation.  
3. **Storage** – S3‑style object store for tracks; DynamoDB/Redis for metadata & caching.  
4. **CDN** – edge nodes cache popular songs (cache‑hit ≈ 80 %).  
5. **Streaming pipeline** – encode → chunked HTTP/2 streams; use HLS/DASH for adaptive bitrate.  
6. **Recommendation engine** – offline batch training (Spark) + online inference (TensorFlow Serving).  
7. **Observability** – Prometheus/Grafana, distributed tracing.

**Depth**  
- *Scalability*: Auto‑scaling groups per region; sharded DynamoDB for user data.  
- *Latency*: CDN reduces round‑trip to < 50 ms; keep‑alive TCP streams prevent handshakes.  
- *Consistency*: Eventual consistency for playback state; strong consistency for billing.  
- *Fault tolerance*: Multi‑AZ deployments, read replicas, circuit breakers.

**Edge Cases**  
- **Hot content surge**: CDN cache miss → origin spike → burst scaling.  
- **User churn**: stale recommendation model → re‑train on recent data nightly.  
- **Legal compliance**: GDPR/DMCA—track user location and enforce regional restrictions.

**Optimize & Communicate**  
- *Cost*: Cache hit ratio drives S3 reads; we can pre‑warm edge caches for trending tracks.  
- *Performance*: Use HTTP/2 multiplexing to reduce header overhead.  
- *Future*: Introduce a GraphQL layer for flexible client queries and a serverless recommendation microservice for rapid iteration.

This design balances latency, scalability, and cost while ensuring a robust user experience for millions of listeners worldwide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
