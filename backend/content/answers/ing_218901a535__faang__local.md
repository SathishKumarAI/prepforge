---
qid: ing_218901a535__faang__local
question: 'Explain: Design Pastebin.com (or Bit.ly) — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 534
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:01-05:00'
sources: []
---

**Clarify**  
We’re asked to design a Paste‑bin service (like pastebin.com or Bit.ly). The goal is to store user‑created text snippets, expose short URLs, support expiration, and handle high traffic with low latency.

Key assumptions I’d confirm:  
- Public read access only (no auth for reading).  
- Snippets can be large (up to a few MB) but most are small.  
- Write rate ≈ 10 k/s, read rate ≈ 100 k/s.  
- Each paste has a unique short ID and optional TTL.

**Approach**  
1. **API layer** – REST endpoints: `POST /paste` (create), `GET /{id}` (read).  
2. **Storage** – Separate data store for metadata (ID, owner, timestamps) and blob store for content. Use a key‑value store (e.g., DynamoDB/Redis) for metadata; S3 or GCS for blobs.  
3. **Short ID generation** – Base‑62 counter or random string with collision detection. Keep the counter in a distributed atomic counter service (e.g., Cloud Spanner).  
4. **Caching** – Edge CDN (CloudFront, Akamai) to cache popular pastes; local LRU cache on API servers for hot IDs.  
5. **Expiration** – Store TTL in metadata and run a background job or use TTL feature of the KV store to delete expired entries automatically.

**Depth**  
- Metadata schema: `{id, created_at, expires_at, size}`.  
- Blob key: `paste/{id}`.  
- API latency < 200 ms: 50 ms for cache hit, ~120 ms for DB + S3 read.  
- Consistency: eventual consistency is fine for reads; writes are atomic via the counter and KV store.

**Edge Cases**  
- ID collision on random generation → check existence before insert.  
- Extremely large pastes → stream to blob storage instead of loading into memory.  
- Sudden traffic spike → auto‑scale API tier, pre‑warm cache.

**Optimize & Communicate**  
We can reduce cost by compressing text blobs and using object lifecycle policies for automatic deletion. For monitoring, expose metrics: request latency, cache hit rate, error rates. Finally, I’d explain trade‑offs (e.g., choosing DynamoDB vs. Redis based on write throughput) and justify each design choice to the interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
