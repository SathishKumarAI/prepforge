---
qid: ing_d062cff8f0__faang__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 684
total_tokens: 948
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:45:15-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to walk through the *ongoing* (i.e., production‑ready) design for a Pastebin‑style service, as outlined in the `system_design/pastebin/README.md`.  
Assumptions to confirm:  

1. Expected traffic (e.g., 10k req/s).  
2. Data model – key/value with TTL, optional syntax highlighting.  
3. SLA – <200 ms latency for read/write, 99.9% availability.  
4. Budget constraints – cost‑effective cloud infra.

**Approach**  
1. **API layer** – stateless HTTP endpoints (`POST /paste`, `GET /paste/{id}`).  
2. **Persistence** – key‑value store with TTL (Redis or DynamoDB).  
3. **Storage of large pastes** – object storage (S3/Blob) + CDN for fast fetch.  
4. **Indexing & search** – optional full‑text index in Elasticsearch if needed.  
5. **Security** – rate limiting, CAPTCHA on creation, HTTPS everywhere.  
6. **Monitoring** – Prometheus/Grafana, alerting on latency/latency spikes.

**Depth**  

| Component | Design Choices | Complexity | Trade‑offs |
|-----------|----------------|------------|------------|
| API Gateway | AWS ALB + Lambda or Nginx + Gunicorn | O(1) per request | Serverless = cold starts vs. long‑running containers |
| Paste Store | Redis (in‑memory, TTL) for hot data; S3 for archival | O(log N) in DynamoDB, O(1) in Redis | Memory cost vs. durability |
| ID Generation | Snowflake/UUID v4 | O(1) | Uniqueness guarantees but not sequential |
| Caching | CDN (CloudFront) for GET | O(1) | Extra cache invalidation logic on delete |
| Security | WAF + rate limiter | O(log R) per request | Adds latency, complexity |

**Edge Cases**  
- Extremely large paste (>10 MB): stream to S3 instead of Redis.  
- TTL expiry race: use atomic `SETEX` or DynamoDB TTL job.  
- Simultaneous deletes/reads: optimistic locking or versioning.  
- CDN stale content after deletion: purge via API.

**Optimize & Communicate**  
1. **Scale‑out read traffic** by adding more CDN edge locations; writes stay in a single region to preserve consistency.  
2. **Cost reduction**: use spot instances for background cleanup jobs, tiered S3 storage (S3‑IA for older pastes).  
3. **Explain reasoning**: “We chose Redis for hot data because latency is critical for reads, and TTL guarantees automatic eviction, which aligns with Pastebin’s short‑lived nature.”  

Conclude by summarizing the high‑level flow: client → API Gateway → write to Redis (TTL) & S3; read hits CDN cache or falls back to Redis/S3; background worker cleans expired keys. This shows a clear, scalable, and cost‑effective system design that meets typical FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
