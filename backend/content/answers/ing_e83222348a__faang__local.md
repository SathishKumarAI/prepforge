---
qid: ing_e83222348a__faang__local
question: 'Explain: MetaData Sharding - Based on VideoID — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 522
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:41-05:00'
sources: []
---

**Clarify**  
You’re asking how to shard a large metadata store for YouTube‑style video streaming, using the **VideoID** as the sharding key.  
Assumptions I’d confirm:  
1. VideoIDs are unique, monotonic or hashable.  
2. Read traffic is far heavier than writes (metadata updates are rare).  
3. Latency < 50 ms for a single metadata lookup.

---

**Approach**  

| Step | Rationale |
|------|-----------|
| 1️⃣ **Key selection** – use the numeric VideoID as the partition key. |
| 2️⃣ **Hash‑to‑range mapping** – hash(VideoID) → range of shards (e.g., consistent hashing). |
| 3️⃣ **Replication** – each shard stored on ≥ 3 nodes for HA. |
| 4️⃣ **Indexing** – per‑shard secondary index on attributes needed for search (tags, language). |
| 5️⃣ **Cache layer** – in‑memory LRU cache per request path to reduce DB hops. |

---

**Depth**  

*Hash function*: a fast non‑cryptographic hash (xxhash) guarantees even distribution.  
*Shard count*: start with 2^k shards; adjust as data grows; use consistent hashing to minimize re‑balance.  
*Read/write paths*: reads go straight to the responsible shard; writes update the shard and invalidate cache entries.  
*Complexity*: O(1) lookup per shard, plus O(log N) for secondary index scans.  

---

**Edge cases**

- **Hot VideoIDs**: bursty traffic on trending videos → use a separate hot‑cache tier or read replicas.  
- **Shard imbalance**: if VideoID space is skewed, rehash or add virtual nodes.  
- **Failure of majority nodes**: quorum reads/writes to preserve consistency.

---

**Optimize & communicate**

1. **Monitoring**: shard latency histograms; trigger auto‑sharding when 95th percentile > X ms.  
2. **Batching**: prefetch adjacent VideoIDs for sequential watch patterns.  
3. **Explainability**: document the hash‑to‑shard mapping and cache invalidation policy so ops can troubleshoot quickly.

This design keeps lookups fast, scales horizontally, and is resilient to node failures—exactly what a FAANG streaming backend needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
