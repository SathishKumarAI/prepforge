---
qid: ing_d9f2b299e7__fp__local
question: 'Explain: Pattern 2: Active-Active — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 470
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:43:07-05:00'
sources: []
---

**Pattern 2: Active‑Active – the “Always‑On” Load Balancer**

*The Problem.*  
In a highly available web service you want every request to hit an up‑to‑date replica and never be dropped if one node fails. A single point of failure (the load balancer itself) defeats this goal, yet a distributed balancer introduces routing complexity.

*Why “Active‑Active” Works.*  
Let each server run a *local* balancing algorithm that forwards traffic to its peers only when it detects a failure (e.g., via heartbeats). All servers simultaneously accept client connections; no central dispatcher exists. When one node fails, the remaining nodes instantly re‑balance the incoming load among themselves—no round‑trip to a master is needed. This satisfies *strong consistency* of routing decisions: every node holds the same view of cluster health (via gossip or a consensus protocol), ensuring deterministic path selection.

*Deep Principle.*  
The pattern exploits **self‑stabilization** from distributed systems theory: local rules converge to a globally consistent state without centralized coordination. The load distribution is an *optimization problem*—minimize latency while respecting capacity constraints—solved locally by each node’s heuristic (e.g., round‑robin, least‑connections). Probabilistically, the failure detection threshold balances false positives against reaction speed; mathematically this is a trade‑off between **mean time to recovery** and **over‑provisioning**.

*Non‑obvious Insight.*  
Most people treat the balancer as a “routing table.” In an active‑active setup the *routing table itself* is replicated across nodes. The key insight: by making routing decisions locally, you eliminate the *single point of latency*. Even if network partitions occur, each partition can still serve its clients, and once connectivity returns, the partitions automatically converge to a consistent view—achieving **partition tolerance** without sacrificing availability.

Thus, an active‑active load balancer is not just “more nodes” but a principled application of self‑stabilizing distributed algorithms to guarantee seamless, always‑available traffic distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
