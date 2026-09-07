---
qid: ing_756d42ed5f__faang__local
question: 'Explain: Web/API Layer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 579
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:17:40-05:00'
sources: []
---

**1️⃣ Clarify**

The interviewer asks you to *design the web/API layer for a system like Spotify*.  
Key assumptions I’d confirm:  

* What are the core services? (User auth, catalog, playback, recommendations)  
* Expected traffic (e.g., 10 M active users, 5 k requests/sec per user).  
* Data persistence needs (song metadata vs. stream logs).  
* SLA targets for latency and availability.

**2️⃣ Approach**

1. **Micro‑service decomposition** – split by business capability.  
2. **API gateway + rate limiting** – central entry point, enforce auth & quotas.  
3. **Load balancer → stateless service instances** (auto‑scale).  
4. **Cache hot data** (Redis) at the edge; use CDN for static assets.  
5. **Event‑driven async pipelines** for write‑heavy ops (e.g., playlist updates).  

**3️⃣ Depth**

*Auth Service*: OAuth2 + JWT, store refresh tokens in a secure DB.  
*Catalog Service*: Read‑only, sharded by genre; use read replicas.  
*Playback Service*: Stateless workers that stream from object storage (S3) with HLS segments.  
*Recommendation Service*: Model inference via containerized GPU pods; cache top 1000 songs per user in Redis.  

**Complexity & Trade‑offs**

| Layer | Avg Latency | Scalability |
|-------|-------------|--------------|
| API Gateway | ~5 ms | Global LB + autoscaling |
| Catalog Cache | <1 ms | Memory cost vs. freshness |
| Playback Stream | 50–100 ms | CDN reduces origin load |

**4️⃣ Edge Cases**

* Sudden surge (e.g., new release) → auto‑scale, fallback to read‑replicas.  
* Cache miss on popular track → graceful degradation: serve from DB with higher latency.  
* Token revocation – push invalidation via pub/sub.

**5️⃣ Optimize & Communicate**

- **Observability**: Prometheus + Grafana for metrics; Jaeger for tracing across services.  
- **Security**: TLS everywhere, RBAC on internal APIs.  
- **Cost**: Spot instances for non‑critical async workers; cache eviction policies to keep memory usage bounded.

*Narrative*: “I’d start with a gateway that enforces auth and rate limits, then expose stateless micro‑services behind an autoscaling LB. Hot catalog data lives in Redis at the edge, while playback streams are served via CDN. As traffic spikes, we spin up more replicas; if cache misses happen, we fall back to DB reads—ensuring SLA compliance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
