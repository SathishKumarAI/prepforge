---
qid: ing_38fcdd0629__faang__local
question: 'Explain: Functional Requirements — Distributed Counter System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 411
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:04-05:00'
sources: []
---

**Clarify**

We’re asked to design a *distributed counter* (e.g., view count, likes).  
Key assumptions:  
1. The counter must support high‑write throughput and low read latency.  
2. Reads should reflect near real‑time values across all nodes.  
3. Data durability is required; the system must tolerate node failures.  

**Approach**

1. **Partitioning** – shard counters by key (e.g., post ID) using a hash ring so updates hit a single partition.  
2. **Local state + replication** – each partition runs on a leader node that persists increments to local storage and streams changes to followers for redundancy.  
3. **Eventual consistency** – readers can query the leader or read from any replica with a small staleness window.  

**Depth**

- *Write path*: client → API gateway → shard‑determined partition → leader → append to WAL (or log) → update in‑memory counter → async replication.  
- *Read path*: API gateway → target partition’s leader → return cached value.  
- Complexity: O(1) per operation; storage overhead linear in number of partitions.  
- Trade‑off: strong consistency vs latency—use quorum reads if strict accuracy is needed.

**Edge Cases**

- Partition splits when a counter grows beyond a threshold (rebalance).  
- Network partition causing leader loss → automatic failover via Raft/Consul.  
- Counter overflow – use 64‑bit integers or modular arithmetic with version tags.  

**Optimize & Communicate**

- Use in‑memory cache + write‑through persistence for latency.  
- Batch replication logs to reduce network traffic.  
- Expose a “stale‑acceptable” read API to allow higher throughput.  
Explain that this design balances consistency, availability, and partition tolerance while keeping the system horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
