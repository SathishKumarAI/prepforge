---
qid: ing_8bd697d2dd__fp__local
question: 'Explain: Database Replication & Backups — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 441
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:29-05:00'
sources: []
---

**Why every photo‑centric service needs strong replication and backup**

The *fundamental problem* is **availability under failure**: a user’s post must be retrievable no matter which nodes die or the network partitions.  
Let \(R\) be the number of replicas per shard, \(W\) the write quorum, and \(N\) the total nodes. The consistency equation  

\[
R + W > N
\]

guarantees that at least one replica in every quorum contains the latest update. If we set \(R=W=\lceil N/2 \rceil+1\), a single node failure still satisfies the inequality, so reads are never blocked and writes remain durable. This is not an arbitrary choice—it follows from **majority voting** in distributed consensus: only a majority can agree on a state change.

**Backups** add another layer of resilience. They are snapshots taken at times \(t_i\) and stored off‑site (e.g., object storage). The key insight is that *snapshots need not be continuous*; by using **incremental differencing** we reduce bandwidth and cost while preserving the ability to roll back to any point in time. This leverages the fact that user data changes sparsely relative to its size, so each delta is tiny compared to a full copy.

**Non‑obvious insight:**  
Replication protects against *hot spot* failures (e.g., a rack loss), but it does not protect against **temporal consistency gaps** during network partitions. By coupling replication with *vector clocks* per post, the system can expose conflict resolution paths to the client instead of silently discarding writes, thereby preserving user intent even when the network is partitioned.

In sum: majority‑based quorum guarantees availability; incremental snapshots guarantee recoverability; vector clocks turn consistency into a first‑class API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
