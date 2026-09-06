---
qid: ing_59f0d89e22__fp__local
question: 'Explain: Leaderboard API — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 426
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:15:25-05:00'
sources: []
---

**From the Problem to the Solution**

A *leaderboard* must rank millions of users by a score that changes every second, answer queries in < 50 ms, and scale without bottlenecks.  
The core requirement is **low‑latency reads + high‑write throughput**, which suggests a *partitioned key–value store* rather than a relational DB.

**Why Partitioning Works**

1. **Write locality** – each user’s score lives on a single shard; writes never race across nodes.  
2. **Read amplification control** – queries for “top k” need only the shards that contain those users.  
3. **Eventual consistency** is acceptable: a lag of one update per second hardly matters for ranking.

Thus we model the system as:
```
score(user) → shard = hash(user_id) % N
shard  → sorted structure (e.g., skiplist or B‑tree)
```

**Ranking Engine**

- Each shard keeps its users in a *sorted list* by score.  
- To fetch global top k, each shard returns its local top k; a lightweight merge (heap) produces the final result.  
- Complexity: O(N·k + k log N), negligible for millions of shards.

**Non‑obvious Insight**

Most designs cache the *global* top k only. The trick is to also **cache per‑region or per‑game leaderboards** by maintaining a *secondary index* on the shard’s key space (e.g., `region:user`). This reduces merge cost from O(N·k) to O(R·k), where R ≪ N, and keeps latency stable even as user count explodes.

In short: hash‑partitioned sorted stores + per‑shard top k + lightweight merge = a leaderboard that scales linearly with users while staying sub‑50 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
