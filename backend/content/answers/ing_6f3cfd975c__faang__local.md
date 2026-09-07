---
qid: ing_6f3cfd975c__faang__local
question: 'Explain: Pros — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 536
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:07-05:00'
sources: []
---

**Design a URL‑Shortening Service**

| Section | Key Points |
|---------|------------|
| **Clarify** | • Shorten any HTTP/HTTPS link → unique short key.<br>• Support redirects, analytics, expiration, custom aliases.<br>• Scale to millions of daily requests; low latency (< 50 ms).<br>• Assume eventual consistency for stats. |
| **Approach** | 1. **API layer** – REST endpoints: `POST /shorten`, `GET /{code}`.<br>2. **Service tier** – stateless microservice with cache & rate‑limit.<br>3. **Persistence** – key→URL map in a distributed DB (e.g., DynamoDB, Spanner).<br>4. **Hashing** – base‑62 incremental counter or UUID → shorten to 6–8 chars.<br>5. **Redirection** – lookup + cache hit → HTTP 301/302.<br>6. **Analytics** – async write‑behind queue (Kafka) → analytics DB. |
| **Depth** | *Lookup* is O(1) via in‑memory Redis; fallback to DB if miss.<br>*Write* uses a global counter stored atomically (e.g., DynamoDB atomic increment).<br>Cache invalidation on update via TTL or pub/sub.<br>Data model: `code PK`, `long_url`, `created_at`, `expires_at` (optional).<br>Complexity: read O(1), write amortized O(log N) for counter; storage ~ N × size_of_record. |
| **Edge Cases** | • Duplicate long URLs → same code or allow multiple? Decide policy.<br>• Collisions in hash → use UUID or verify uniqueness before insert.<br>• Expired codes → return 410 GONE.<br>• Custom alias conflicts → check existence atomically.<br>• High traffic surge → auto‑scale API tier, increase cache nodes. |
| **Optimize & Communicate** | • Use CDN edge nodes to cache redirects for global low latency.<br>• Batch analytics writes; use Bloom filters to reduce DB hits.<br>• Monitor hit/miss ratio and add more shards if needed.<br>Explain trade‑offs: strong consistency vs availability, single‑point counter bottleneck vs sharded counters. |

*Total words:* ~210  
*Markdown used for clarity.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
