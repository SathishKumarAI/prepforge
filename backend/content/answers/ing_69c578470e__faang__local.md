---
qid: ing_69c578470e__faang__local
question: 'Explain: Ericsson — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 560
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:42-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks how *Ericsson* employs **Valkey** (the open‑source, Redis‑compatible key/value store) to support its machine‑learning workloads.  
Assumptions I’d confirm:  
- Valkey is used as a distributed cache/queue for ML inference data.  
- The system runs in a hybrid cloud environment with latency constraints.  

**2️⃣ Approach**  
Outline the end‑to‑end flow: data ingestion → feature extraction → model inference → post‑processing, and show where Valkey sits (caching pre‑computed features, buffering prediction requests, or serving hot model weights).  

**3️⃣ Depth**  
- **Feature caching:** Features are expensive to compute; Valkey stores them with TTLs so repeated inferences hit the cache. Complexity is *O(1)* per lookup.  
- **Queueing inference jobs:** Using Valkey Streams or Lists as a lightweight message broker, enabling horizontal scaling of inference workers. Guarantees at‑least‑once delivery with consumer groups.  
- **Model weight sharding:** Large transformer models are partitioned; each shard is cached in Valkey for fast retrieval during distributed inference.  
- **Observability:** Pub/Sub channels expose cache hit/miss metrics to Prometheus, feeding into a dashboard that auto‑scales workers.  

**4️⃣ Edge Cases**  
- *Cache stampede:* Multiple requests miss simultaneously → use “cache‑aside with lock” pattern (SETNX + expiry).  
- *Data consistency:* Feature drift requires cache invalidation; implement versioned keys or keyspace notifications.  
- *Network partitions:* Fallback to disk‑backed storage if Valkey becomes unreachable.  

**5️⃣ Optimize & Communicate**  
- **Performance tuning:** Use pipelining for bulk feature loads, enable persistence (RDB/AOF) only for critical data, and configure eviction policy to `ALLKEYS-LRU`.  
- **Cost trade‑off:** In-memory storage is fast but expensive; balance TTLs to keep hot data in RAM while evicting stale entries.  
- **Narrative:** “By positioning Valkey as the glue between raw telemetry and our inference engines, Ericsson achieves sub‑millisecond latency for real‑time network optimization while keeping operational costs predictable.”  

This structure demonstrates clear problem framing, a concrete solution path, technical depth (data structures, complexity), edge‑case handling, and an eye toward performance trade‑offs—all key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
