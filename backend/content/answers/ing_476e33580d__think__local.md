---
qid: ing_476e33580d__think__local
question: 'Explain: Table Schemas — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 490
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:12:49-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify what “table schemas” refers to in Uber’s context (logical data models stored in a distributed key‑value store).  
   - Assume the system serves real‑time ride requests at ~40 M reads/sec, using an integrated cache layer (e.g., Memcached/Redis) plus persistent storage (Cassandra, MySQL, etc.).  

**2. Mental model / framework**  
   - *Data flow*: Client → API gateway → Cache lookup → Backend store if miss → Cache populate → Response.  
   - *Performance levers*: cache hit ratio, cache size, eviction policy, key design, partitioning, replication, and consistency trade‑offs.  

**3. Step‑by‑step reasoning**  
   1. **Schema design**: flatten denormalized tables into composite keys that encode locality (e.g., `driver:{city}:{zone}`).  
   2. **Cache strategy**: cache most frequently accessed rows; use LRU/TTL tuned to ride lifecycle (~5 min).  
   3. **Write‑through vs read‑through**: writes go to backend + cache; reads hit cache first, fallback to store on miss.  
   4. **Scalability**: shard cache across nodes; use consistent hashing; replicate critical keys.  
   5. **Consistency**: eventual consistency acceptable for ride status; strong consistency only for booking transactions.  

**4. Common traps to avoid**  
   - *Cache stampede*: guard against many concurrent misses with request coalescing or per‑key locks.  
   - *Over‑caching stale data*: enforce TTLs and invalidation on updates.  
   - *Misaligned key design*: poor partitioning leads to hot spots; always test read patterns before production.  

**5. Sanity check & communication**  
   - Verify hit ratio > 95 % for high‑frequency keys; monitor latency distribution (99th percentile < 10 ms).  
   - Explain to stakeholders: “By structuring tables into cache‑friendly keys and maintaining a high hit ratio, Uber keeps read traffic from hitting the backend 40 M times per second, thus preserving throughput and low latency.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
