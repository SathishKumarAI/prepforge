---
qid: ing_6f8b89cb7d__faang__local
question: 'Explain: Clarifying Requirements — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 493
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:37-05:00'
sources: []
---

**Clarify**  
We’re building a public‑facing URL shortener (think bit.ly).  
Assumptions to confirm:  

| Question | Why it matters |
|----------|----------------|
| What traffic volume? | Determines cache vs DB load |
| Do we need custom aliases? | Affects key generation & uniqueness checks |
| Is the service globally distributed? | Drives replication strategy |
| What is the SLA for redirects? | Influences caching layers |
| Are analytics required (click counts, geo‑data)? | Adds extra tables or event streams |

**Approach**  
1. **API layer** – POST `/shorten` → returns short ID; GET `/s/{id}` → 302 redirect.  
2. **Key generation** – Base62 counter + optional custom slug; collision check via DB.  
3. **Storage** – Primary key `id`, columns: `original_url`, `created_at`, `expiry`. Use a distributed KV store (Cassandra / DynamoDB).  
4. **Caching** – In‑memory LRU cache per region for hot URLs; CDN edge caching for GETs.  
5. **Analytics** – Append events to Kafka → downstream analytics service.

**Depth**  
- **Complexity**: POST is O(1) DB write + cache insert; GET is O(1) cache lookup, fallback to DB (O(log N)).  
- **Scalability**: Horizontal scaling of API and cache nodes; sharding by hash(id).  
- **Durability**: Replicate writes across zones; use quorum for consistency.  

**Edge Cases**  
- Duplicate custom slug → reject with 409.  
- Expired URLs → redirect to error page.  
- High‑rate burst → rate limit per IP.  
- Cache invalidation when URL updates → publish invalidate event.

**Optimize & Communicate**  
- Use Bloom filter at edge to pre‑reject non‑existent IDs, saving DB hits.  
- Explain trade‑offs: stronger consistency vs lower latency for writes.  
- Highlight monitoring: cache hit ratio, redirect latency, error rates.  

This structure shows clear problem understanding, a solid design path, and attention to real‑world constraints—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
