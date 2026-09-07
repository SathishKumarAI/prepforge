---
qid: ing_06ed06e087__faang__local
question: 'Explain: Read vs Writes - URL Shortening is a read-heavy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 390
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:32-05:00'
sources: []
---

**Clarify**  
The question asks why a URL‑shortener service is *read‑heavy*. I’ll confirm that “reads” mean lookups of the long URL from a short key, while “writes” are the creation of new keys. The system must handle many more lookup requests than key generations.

**Approach**  
1. Identify traffic patterns (lookups ≫ writes).  
2. Map these to data‑access characteristics: read latency, cacheability, write durability.  
3. Propose architecture that optimizes reads without sacrificing consistency.

**Depth**  
- **Read‑heavy nature:** Every click on a short URL triggers a lookup; millions of users use the same key over time, while new keys are created only when a user creates a link.  
- **Caching strategy:** Store hot keys in an LRU cache (Redis/Memcached) to reduce database hits.  
- **Read‑optimized storage:** Use a read‑replica or NoSQL key–value store (e.g., DynamoDB, Bigtable) with low‑latency reads.  
- **Write path:** Write once to primary, then asynchronously propagate to replicas; eventual consistency is acceptable for URL resolution.  
- **Cost trade‑off:** Replicas increase cost but keep read latency low (~10 µs).  

**Edge Cases**  
- Key collisions → use UUID or hash + collision handling.  
- Expired keys → TTL in cache and DB.  
- Distributed denial of service → rate‑limit writes.

**Optimize & Communicate**  
Explain that we’d monitor hit ratios, tune cache size, and shift more reads to CDN edge caches for global traffic. Emphasize the balance: low read latency, minimal write overhead, and cost‑effective scaling—all key FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
