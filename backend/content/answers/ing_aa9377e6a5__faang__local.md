---
qid: ing_aa9377e6a5__faang__local
question: 'Explain: Back-of-the-Envelope Estimation — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 530
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:01-05:00'
sources: []
---

**Clarify**  
We need a URL‑shortening service (tinyurl.com style) that can generate unique short paths, store mappings, and redirect users quickly. Key assumptions: high traffic (~10⁶ requests/second), persistence across restarts, minimal latency (<100 ms), 99.9% uptime, and ability to handle millions of distinct URLs.

**Approach**  
1. **API surface** – `POST /shorten` → short ID; `GET /{id}` → redirect.  
2. **ID generation** – use a monotonic counter + base‑62 encoding (≈6 chars for 10⁹ URLs).  
3. **Storage** – key/value store (e.g., DynamoDB/Redis) with primary key = id, value = long URL.  
4. **Cache layer** – LRU cache (memcached/Redis) to hit hot URLs in‑memory.  
5. **Scalability** – horizontal scaling of API nodes behind a load balancer; partition storage by hash(id).  
6. **Consistency** – eventual consistency is acceptable for redirects; use atomic counter to avoid collisions.

**Depth**  
- **ID generation**: maintain a global counter in a distributed lock (e.g., DynamoDB’s `AtomicAdd`). Counter wraps every 62⁶ ≈ 56 billion IDs → collision risk negligible.  
- **Latency**: cache hit ~50 µs; DB lookup ~200 µs. Total <100 ms.  
- **Throughput**: 10⁶ req/s → 1 kB payload ≈ 1 GB/s bandwidth; use CDN for static redirects.  
- **Cost**: storage cost ≈ $0.00025 per URL/day (S3/NoSQL).  

**Edge Cases**  
- Duplicate long URLs → idempotent `POST` to avoid spam.  
- Rate limiting to prevent abuse.  
- Handling deletions or TTL for short links.  
- Counter wrap‑around: maintain epoch timestamp in ID.

**Optimize & Communicate**  
Potential improvements: use Bloom filters to pre‑check existence, shard counters per region to reduce contention, and implement a background job to clean stale entries. In an interview I’d explain each trade‑off (e.g., counter contention vs. complexity) and validate with metrics such as cache hit ratio and latency distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
