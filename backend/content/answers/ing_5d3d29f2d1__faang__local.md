---
qid: ing_5d3d29f2d1__faang__local
question: 'Explain: Dedupe in Memory — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:49-05:00'
sources: []
---

**Dedupe in‑Memory – Idempotency (System Design)**  

---

### 1️⃣ Clarify  
We need an *in‑memory deduplication layer* that guarantees **idempotent** processing of events/messages.  
Assumptions:  
- High write throughput (10⁶ ops/s).  
- Events are immutable, keyed by a unique identifier (`eventId`).  
- System must recover from crashes without reprocessing duplicates.  

### 2️⃣ Approach  
1. **Hash‑based cache** – maintain a concurrent hash map `seen[eventId] → timestamp`.  
2. **TTL eviction** – periodically purge entries older than *max retention* to bound memory.  
3. **Persist checkpoint** – snapshot the map to durable storage (e.g., RocksDB) every N seconds for crash recovery.  
4. **API contract** – `isDuplicate(eventId)` returns true/false; callers decide whether to process or drop.

### 3️⃣ Depth  
- **Complexity:** O(1) average insert/check per event.  
- **Memory:** ≈ `sizeof(eventId)+metadata` × active events (e.g., 100 MB for 10⁶ IDs).  
- **Thread‑safety:** Use `ConcurrentHashMap` + atomic compare‑and‑set to avoid race conditions.  
- **Recovery:** On restart, load checkpoint into memory; stale entries may exist but TTL will clean them.

### 4️⃣ Edge Cases  
- **Clock skew**: use logical timestamps or monotonic clock for eviction.  
- **Burst traffic**: burst can overflow the map → back‑pressure via bounded queue.  
- **Duplicate after crash**: if checkpoint missed an event, it may be re‑processed; acceptable trade‑off vs. complexity.

### 5️⃣ Optimize & Communicate  
- **Bloom filter** as a lightweight pre‑check to reduce hash lookups for rare duplicates.  
- **Shard the map** across multiple nodes (consistent hashing) to scale horizontally.  
- Explain to interviewers: “We keep the dedupe state in memory for speed, back it up for durability, and clean it with TTL to control size—balancing latency, throughput, and fault tolerance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
