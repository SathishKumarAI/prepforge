---
qid: ing_cb1992b231__fp__local
question: 'Explain: Post Uploads (Writes) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 404
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:26-05:00'
sources: []
---

**Post‑Upload Writes in a Social‑Feed Service**

The core problem is *persisting user content fast enough that the UI feels instant*, while guaranteeing **durability**, **consistency**, and **scalability** as millions of uploads occur every second.  
At first principles, a write is an *event* that must be stored in a fault‑tolerant log (for replay) and indexed for quick reads (feed construction).  

1. **Write‑ahead Log (Kafka/Log‑Structured Merge)** – Every upload is appended to a partitioned log keyed by user ID. This guarantees order per author, linear scalability, and provides an immutable audit trail.  
2. **Distributed Cache (Redis) + “Cache‑Aside”** – The first write updates the cache; subsequent reads hit the in‑memory store, eliminating disk I/O for hot posts.  
3. **Secondary Indexes (Cassandra / DynamoDB)** – A fan‑out table stores `user_id → post_id` pairs. This decouples storage from feed generation and allows O(1) lookups for a user’s timeline.  
4. **Back‑pressure & Rate Limiting** – The log consumer streams to the index; if it falls behind, uploads are throttled or queued, preventing write amplification.

A non‑obvious insight: *the cache is not just a speedup but a consistency guard*. By treating the cache as the source of truth for “recent” posts and only evicting after persistence confirmation, we avoid stale reads that would otherwise corrupt a user’s experience.  

Thus, the system balances **optimistic concurrency** (fast writes) with **eventual consistency** (index lag), all derived from the fundamental trade‑off between latency and durability in distributed storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
