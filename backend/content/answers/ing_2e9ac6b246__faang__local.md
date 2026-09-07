---
qid: ing_2e9ac6b246__faang__local
question: 'Explain: 4.1 Requirement 1: URL Shortening — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 470
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:31:42-05:00'
sources: []
---

**Clarify**

> Build a service that turns long URLs into short, unique tokens and redirects users back to the original URL.  
> *Assumptions*:  
> • High traffic (millions of requests/day).  
> • Global availability, low latency.  
> • Persistence of mappings for years; occasional deletion by user.  
> • No need for custom aliases or analytics in this baseline.

**Approach**

1. **API Layer** – REST endpoints: `POST /shorten`, `GET /{token}`.  
2. **Storage** – Key‑value store (e.g., DynamoDB/Redis). Key = token, value = original URL + metadata.  
3. **Token Generation** – Base‑62 incremental counter hashed with a secret salt → short string (~6 chars).  
4. **Redirection** – Cache hot tokens in Redis; fallback to DB on miss.  
5. **Scalability** – Horizontal API instances behind load balancer; sharded DB by token hash.  
6. **Analytics (optional)** – Append hit counter atomically in DB.

**Depth**

*Token generation*: Use a distributed atomic counter (e.g., DynamoDB auto‑increment) → convert to Base62 for compactness.  
*Redirection path*: Cache lookup → if miss, fetch from DB and populate cache. Complexity: O(1) average per request.  
*Consistency*: Strong read/write on the primary DB; eventual consistency acceptable for analytics.

**Edge Cases**

- Token collision (unlikely with counter).  
- URL validation & HTTPS enforcement.  
- Extremely long URLs – truncate or store in a separate blob store.  
- Rate limiting to prevent abuse.  
- Handling of deleted URLs (return 404).

**Optimize & Communicate**

*Improvements*:  
• Use CDN edge caching for static redirects.  
• Shard by token prefix for write scalability.  
• Implement per‑user quota and analytics dashboards.

I’d explain each layer, justify trade‑offs (e.g., counter vs hash collision), and demonstrate how the system meets latency, durability, and scaling goals while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
