---
qid: ing_53389beb0b__faang__local
question: 'Explain: Core APIs — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 478
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:44-05:00'
sources: []
---

**Clarify**  
We’re asked to design a **URL‑shortening service** (e.g., bit.ly). The goal: take any long URL, return a short token that redirects back. Assume high traffic (~10⁶ requests/sec), 99.9 % uptime, and persistence across restarts.

**Approach**  
1. **API surface** – `POST /shorten {url}` → `{id}`; `GET /{id}` → redirect.  
2. **Storage layer** – key‑value store (e.g., DynamoDB/Redis) mapping `id`→original URL, with TTL optional.  
3. **ID generation** – deterministic hash (SHA‑256 + base62) or sequential counter sharded by prefix.  
4. **Load balancing & caching** – CDN edge cache for hot IDs; global LB to route to nearest data center.  
5. **Analytics** – separate write‑through stream (Kafka → ClickHouse) for click counts.

**Depth**  
- *ID space*: 6‑char base62 ≈ 56 billion unique URLs. Collision risk <10⁻⁶ with hash‑based approach.  
- *Latency*: Single lookup + HTTP redirect (<50 ms). Cache hit rate >90 %.  
- *Scalability*: Shard by first two chars; each shard handled by a stateless service instance.  
- *Consistency*: Strong read consistency for `GET` via replicated KV store; eventual consistency acceptable for analytics.

**Edge Cases**  
- Duplicate URLs → same ID (idempotent).  
- Extremely long URLs (>2 KB) → reject or truncate.  
- Malicious input (e.g., phishing redirects) → optional content‑filtering layer.  
- Rate limiting per IP to prevent abuse.

**Optimize & Communicate**  
- **Compression**: store URLs in compressed form to save space.  
- **Circuit breaker**: fallback to cache if backend is slow.  
- **Monitoring**: latency, error rate dashboards; auto‑scale based on request spikes.  

This design balances simplicity, high availability, and future extensibility—key qualities for a FAANG‑level system interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
