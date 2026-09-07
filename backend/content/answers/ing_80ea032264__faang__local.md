---
qid: ing_80ea032264__faang__local
question: 'Explain: Memory — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:41-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *live comment system* (think YouTube live chat) that can store, retrieve, and serve comments in real‑time with low latency. Key assumptions:  
1. High write throughput (thousands of comments/sec).  
2. Read‑heavy for the most recent N comments per stream.  
3. Comments are immutable once posted.  
4. Need horizontal scalability and fault tolerance.

**Approach**  
1. **Write path** – publish comment → message queue → consumer → write to a *write‑optimized* store (e.g., Cassandra or DynamoDB).  
2. **Read path** – serve from a *read‑optimized* cache (Redis, Memcached) that keeps the latest M comments per stream.  
3. **Eviction policy** – time‑based TTL + LRU to keep memory bounded.  
4. **Replication & sharding** – partition by stream ID; use consistent hashing for even load.

**Depth**  
- **Data model**:  
  *Table*: `stream_id | timestamp | comment_id | user_id | text`.  
  Partition key = `stream_id`; clustering key = `timestamp DESC`.  
- **Complexity**: Write O(1) (single partition write); Read O(log k + M) where k is number of partitions per stream.  
- **Trade‑offs**: Using a single cache per stream keeps latency low but may exceed memory; mitigate with LRU and fallback to DB for older comments.

**Edge Cases**  
- Burst traffic spikes → queue backpressure, auto‑scaling consumers.  
- Stream termination → purge cache entries after TTL.  
- Duplicate messages → idempotent writes using `comment_id` as PK.

**Optimize & Communicate**  
Explain that we first batch writes to reduce write amplification, then push batches into the cache asynchronously to keep latency < 50 ms. Highlight monitoring (latency SLA, queue depth) and how adding a CDN‑edge cache would further reduce global read latency. This demonstrates clear structure, technical depth, and awareness of production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
