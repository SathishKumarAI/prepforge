---
qid: ing_647b737b91__fp__local
question: 'Explain: Non-Functional Requirements — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 516
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:34-05:00'
sources: []
---

### Why a leaderboard must be **fast, reliable, and fair**

At its core, a leaderboard is a *ranked list* of scores that users continually update.  
The fundamental problem is to maintain an ordering over millions of writes while
answering queries in sub‑millisecond latency.  From this need emerge three non‑functional pillars:

| Pillar | What it guarantees | Why it follows from the core problem |
|--------|--------------------|--------------------------------------|
| **Latency** | < 5 ms for reads, < 50 ms for writes | Ranking is a *real‑time* feature; a delay kills engagement.  The data structure must support O(log N) or better operations (e.g., skip lists, balanced trees). |
| **Scalability** | Horizontal scaling with sharding/partitioning | Scores arrive in bursts; we need to distribute load while preserving global order—hence consistent hashing + a distributed sorted set. |
| **Consistency & Accuracy** | Strongly‑consistent ordering across replicas | Users expect the same rank everywhere.  We rely on consensus (Paxos/Raft) or multi‑phase commit for updates that touch multiple shards. |

#### Deeper principle: *Monotonicity as an invariant*

The leaderboard must preserve a **monotone** mapping from score to rank.  
Any update can only move a user upward; it cannot create “phantom” ranks without changing the underlying set.  
This is analogous to maintaining a sorted array under insert/delete while keeping the index stable—an order‑preserving data structure guarantees that the *rank* is an accurate function of the *score*.

#### Non‑obvious insight

Most designs focus on write throughput, overlooking **temporal locality**: users often query only recent leaders.  
By caching a sliding window (e.g., top 10 000) in memory and refreshing it asynchronously from disk, we can satisfy both ultra‑fast reads for the most relevant subset *and* durable persistence for the full set—achieving a graceful trade‑off that is rarely mentioned in tutorials.

> **Bottom line:** Treat the leaderboard as an online sorted‐set service; enforce latency, scalability, and consistency through data‑structure choice and sharding strategy, while exploiting temporal locality to keep the most valuable ranks instantaneously available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
