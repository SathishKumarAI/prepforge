---
qid: ing_adf948ce0c__faang__local
question: 'Explain: URL table — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 521
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:59-05:00'
sources: []
---

**Clarify**  
The interviewer wants a design for a *URL‑shortening* service (think TinyURL).  
Key questions:  
- Scale? (Millions of URLs per day?)  
- Throughput? (Requests/second?)  
- Latency requirements?  
- Data model: do we need analytics, expiration, custom aliases?  
- Consistency vs. availability trade‑offs?

**Approach**  
1. **API surface** – `POST /shorten` → `{original_url}`; returns `{id}`.  
2. **Data store** – key/value map (`id → original_url`).  
3. **ID generation** – short, unique token (base62).  
4. **Caching layer** – in‑memory cache for hot URLs.  
5. **Routing** – HTTP redirect from `/s/{token}` to stored URL.

**Depth**  
- *Token Generation*: Use a global counter or a sharded sequence; encode as base62 → ~6 chars for 1B URLs.  
- *Storage*: NoSQL (e.g., DynamoDB, Bigtable) with partition key = token, value = original_url + metadata.  
- *Cache*: Redis/Memcached with LRU eviction; TTL of a few days.  
- *Scaling*: Partition by hash of token; each partition runs on a separate node.  
- *Consistency*: Read‑your‑write consistency via immediate write to DB then cache update.  
- *Analytics*: Separate event stream (Kafka) for click counts, stored in analytics DB.

**Edge Cases**  
- Duplicate URLs: deduplication by hashing original URL → same token.  
- Expiration: store TTL and purge asynchronously.  
- Custom aliases: check uniqueness before inserting.  
- High collision rate: unlikely with base62 but handle via retry or fallback to UUID.

**Optimize & Communicate**  
- **Throughput**: Batch writes to DB; use write‑through cache.  
- **Latency**: Keep redirect logic in front‑end CDN edge (Lambda@Edge).  
- **Cost**: Use spot instances for background jobs, serverless for API.  
Explain trade‑offs: stronger consistency → higher latency; eventual consistency → faster but stale redirects. Conclude with monitoring (latency, error rate) and A/B testing of token strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
