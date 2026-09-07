---
qid: ing_6363666926__faang__local
question: 'Explain: Flow: Creating a Short URL — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 516
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:36-05:00'
sources: []
---

**Clarify**  
We need a distributed system that turns any long URL into a short, fixed‑length token and later resolves it back. Assumptions: high read/write traffic (hundreds of millions per day), minimal latency (<10 ms for lookup), 99.9% uptime, global availability, and eventual consistency is acceptable for writes.

**Approach**  
1. **API layer** – REST/GRPC endpoints: `POST /shorten`, `GET /{token}`.  
2. **Hashing & token generation** – Base‑62 encode a monotonically increasing counter or use a salted hash (e.g., SHA‑256) truncated to 6–8 chars.  
3. **Storage** – Sharded key/value store (Cassandra, DynamoDB, Bigtable). Key = token, value = original URL + metadata.  
4. **Caching** – CDN edge cache for GETs; local in‑memory LRU cache on API nodes for hot tokens.  
5. **Redundancy & failover** – Multi‑region replication, eventual consistency with read‑repair.  
6. **Analytics** – Separate write‑through stream to Kafka → analytics DB.

**Depth**  
- Token collision probability: 62⁶ ≈ 56 billion; acceptable for ~1 B URLs. Use a global counter (e.g., via atomic increment service) or Bloom filter to detect duplicates.  
- Latency: cache hit <2 ms; DB read ~5–10 ms. Write path: async replication, client returns after local write.  
- Complexity: O(1) for both operations. Storage cost linear in number of URLs.

**Edge Cases**  
- Duplicate long URL → same token (idempotent).  
- Expired or deleted tokens → 404 with graceful redirect page.  
- Rate limiting per IP to prevent abuse.  
- Handling very long URLs (>2 KB) – truncate or reject.

**Optimize & Communicate**  
- Use consistent hashing for sharding to balance load and allow easy scaling.  
- Cache warm‑up during traffic spikes.  
- Monitor token generation rate; backpressure if counter reaches limit.  
- Explain trade‑offs: stronger consistency vs latency, larger tokens reduce collision risk but hurt UX.  

This design balances speed, scalability, and reliability while keeping the architecture simple enough for rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
