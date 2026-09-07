---
qid: ing_9c198b2e2b__faang__local
question: 'Explain: Introduction — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 489
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:51-05:00'
sources: []
---

**Clarify**  
The question asks how Uber’s data‑pipeline can serve >40 M reads/sec from a shared “online storage” layer using an integrated cache. We assume: *reads* are user‑level queries (e.g., trip details), *online storage* is a distributed key‑value store, and the cache sits in front of it.  

**Approach**  
1. Identify read patterns (hot keys, access skew).  
2. Design a tiered architecture: client → CDN‑style edge cache → regional in‑memory cache → backend KV store.  
3. Use consistent hashing + replication for cache sharding and fault tolerance.  
4. Implement cache‑aside with write‑through or write‑back policies to keep the store fresh.  

**Depth**  
- **Cache tiering**: Each request first hits a low‑latency L1 (e.g., Redis in AWS ElastiCache) that serves 80–90 % of traffic. Misses go to L2 (larger, distributed cache like Memcached clusters).  
- **Eviction**: LFU or time‑to‑live per key; hot items live longer.  
- **Consistency**: Use version stamps or timestamps so the backend can resolve stale reads.  
- **Scaling**: Auto‑scale cache nodes based on request rate, using metrics like hit ratio and latency.  
Complexity: read path O(1) hash lookup; write path adds a KV store update but amortized over many reads.  

**Edge Cases**  
- Cache stampedes on cold keys → use lock‑based back‑off or “single flight.”  
- Network partitions → fallback to backend with higher latency.  
- Data model changes → invalidate relevant cache entries.  

**Optimize & Communicate**  
To push >40 M reads/sec, we’d:  
1. Increase cache capacity (more nodes).  
2. Use faster in‑memory engines (e.g., Aerospike or RocksDB on RAM).  
3. Compress payloads and batch network calls.  
Explain that the key to success is a well‑balanced hit ratio (~95 %) and robust eviction/consistency mechanisms, allowing Uber to deliver sub‑10 ms latency at massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
