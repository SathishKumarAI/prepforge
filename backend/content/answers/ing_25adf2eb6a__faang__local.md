---
qid: ing_25adf2eb6a__faang__local
question: 'Explain: Relational Database — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:21-05:00'
sources: []
---

**Relational DB + Distributed Counter System**

| Step | What I’ll Cover |
|------|----------------|
| **Clarify** | *Goal:* a highly‑available counter (e.g., likes per post) that can be read/written by millions of users. <br>*Assumptions to confirm:* <br>• Max QPS and latency targets.<br>• Consistency requirement (strict vs eventual).<br>• Failure model (network partitions, node crashes). |
| **Approach** | 1. Use a relational DB (PostgreSQL/MySQL) for durability & ACID on the *global* counter.<br>2. Cache local counters in each shard’s memory using Redis or Memcached.<br>3. Periodically batch‑flush incremental counts back to the DB via an asynchronous worker (e.g., Kafka → consumer). |
| **Depth** | • **Local Increment:** `local_count += 1` is O(1) and lock‑free.<br>• **Batch Flush:** Every *t* seconds or when threshold reached, send delta to a write queue. Consumer runs `UPDATE posts SET counter = counter + :delta WHERE id=:id`. <br>• **Read Path:** First check local cache; if stale, read from DB and refresh cache. <br>• **Complexity:** Read O(1) (cache hit), write O(1) (in‑memory). Flush cost is amortized over many ops. |
| **Edge Cases** | • **Network Partition:** Local counters keep growing; eventual consistency achieved once partition heals.<br>• **Worker Failure:** Redundant workers or idempotent updates ensure no double counting.<br>• **Cache Eviction:** Use LRU with write‑back to avoid losing increments. |
| **Optimize & Communicate** | • Tune batch size vs latency trade‑off (e.g., 10 k ops/second → 100 ms delay). <br>• Add a lightweight “checkpoint” table to recover unflushed deltas on restart.<br>• Explain that this hybrid model gives near‑real‑time reads with durable persistence, satisfying FAANG’s scale and reliability expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
