---
qid: ing_8302ae98fa__faang__local
question: 'Explain: Cache Crash — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 515
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:49:16-05:00'
sources: []
---

**Clarify**  
The question asks why a cache (e.g., Redis, Memcached) can become unreliable or “crash” and what the root causes are. I’ll assume we’re talking about in‑memory key‑value stores used for latency‑sensitive workloads.

**Approach**  
1. List typical failure modes.  
2. Explain each mode’s mechanism.  
3. Summarize mitigation patterns.  

**Depth**  

| Failure | What Happens | Why It Happens | Mitigation |
|---------|--------------|----------------|------------|
| **Memory exhaustion** | Cache evicts aggressively or runs out of RAM → OOM kills process. | Poor eviction policy, unbounded key growth, memory leaks, large values. | Use `maxmemory` + `volatile-lru`, set TTLs, monitor memory usage, split data across shards. |
| **Data loss on restart** | In‑memory data disappears after crash or power‑off. | No persistence or WAL replay. | Enable snapshotting (RDB) or append‑only files (AOF), use replication + failover. |
| **Stale or inconsistent reads** | Clients read old values after write race or network partition. | Eventual consistency in a single node, split‑brain scenarios. | Strong consistency via primary/replica quorum, use `GET` with version tags. |
| **Network partitions / split brain** | Multiple nodes think they’re master → divergent writes. | Lack of consensus protocol. | Run Redis Sentinel or Cluster mode; enforce majority lock before promotion. |
| **CPU thrashing / GC pauses** | Cache slows down under load, causing latency spikes. | Heavy serialization/deserialization, large data structures. | Use efficient serializers (msgpack), off‑load compaction, tune JVM GC. |

**Edge Cases**  
- Extremely hot keys can starve the rest of the cache.  
- Malformed or malicious payloads may trigger crashes.  
- Backups that are too frequent can degrade performance.

**Optimize & Communicate**  
Explain trade‑offs: tighter eviction vs. higher memory cost; persistence overhead vs. durability. Narrate by walking through a real incident (e.g., sudden spike in write volume causing OOM) and how you’d diagnose with `INFO`, logs, and metrics. Conclude with a checklist: capacity planning → eviction policy → replication & persistence → monitoring alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
