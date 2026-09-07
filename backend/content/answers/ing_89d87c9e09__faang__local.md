---
qid: ing_89d87c9e09__faang__local
question: 'Explain: Docstore Query Patterns — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 520
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:03-05:00'
sources: []
---

**Clarify**  
The question asks how Uber’s “Docstore” architecture can support ~40 M read‑ops/sec from an online key–value store while keeping latency low and cost reasonable. I’ll assume: (1) reads are highly skewed; (2) data is mostly append‑only; (3) the cache must be coherent across many nodes.

**Approach**  
1. **Tiered storage** – hot docs live in a distributed cache, cold docs stay in persistent storage.  
2. **Cache‑ahead + write‑through** – every read first checks the cache; on miss it fetches from storage and populates the cache. Writes update both layers atomically.  
3. **Consistent hashing & sharding** – distribute keys across cache nodes to avoid hotspots.  
4. **Bloom filters & LRU replacement** – reduce false positives and evict least‑used docs.

**Depth**  
- *Cache layer*: Memcached/Redis clusters, each node holds ~1 GB of hot data; total 10 TB RAM for 40 M RPS.  
- *Storage layer*: Scalable NoSQL (e.g., Cassandra) with SSDs, tuned for sequential reads.  
- *Read path*: <0.5 ms if hit; 1–2 ms if miss + fetch.  
- *Write path*: ~1 ms latency via async replication to storage.  
Complexity: O(1) cache lookup, O(log n) storage search. Trade‑off is memory cost vs. hit ratio.

**Edge Cases**  
- Cache stampede on a sudden hot key → mitigate with request coalescing or token bucket.  
- Inconsistent updates → use optimistic locking or version vectors.  
- Network partitions → fallback to storage read, flag stale data.

**Optimize & Communicate**  
Future improvements:  
- **Adaptive eviction** based on query patterns (LFU).  
- **Compression** in cache for larger payloads.  
- **Hybrid cache** using SSDs for mid‑tier.  
When explaining, I’d first map the problem to a tiered architecture diagram, then walk through read/write flows, highlighting latency budgets and failure modes. This demonstrates clear reasoning, technical depth, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
