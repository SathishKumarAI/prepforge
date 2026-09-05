---
qid: ing_28c0f4fe48__fp__local
question: 'Explain: Next, let''s look at what do you — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 523
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:56-05:00'
sources: []
---

### Why database choice matters

In any large‑scale system the **data model is the contract** between your application and its users: it defines what you can ask for, how fast, and at what cost. A poorly chosen schema turns every read/write into a *resource bottleneck* that cannot be fixed by caching or sharding alone.

#### 1. Start from the *access patterns*  
Treat each query as a constraint on your storage engine:  
- **Read‑heavy, point queries** → key‑value stores (Redis, DynamoDB).  
- **Complex joins, multi‑row analytics** → relational RDBMS with proper indexes.  
- **High write throughput, append‑only logs** → column families or time‑series DBs.

#### 2. Normalize *just enough*  
Full normalisation eliminates redundancy but forces costly JOINs; denormalising a few hot tables can reduce latency by an order of magnitude—this is the classic “write‑amplification vs read‑amplification” trade‑off.

#### 3. Partition on **hotness**  
Shard by a *natural key* (e.g., user_id) that keeps related data together, or by time for log‑style tables. Avoid “random” sharding because it forces cross‑node joins you can’t afford at scale.

#### 4. Choose the right consistency model  
Strong consistency is expensive; eventual consistency can be acceptable if your business logic tolerates stale reads (e.g., recommendation counters). Match the *CAP* trade‑off to your latency requirements.

> **Non‑obvious insight:** *Index selection is a geometric problem.* Each index defines a subspace of the data that can be queried efficiently. By visualising queries as vectors in this space, you can spot “orthogonal” indexes that cover multiple use cases without redundancy—something designers often miss when they think only about single queries.

#### 5. Plan for evolution  
Design schemas with *migration* in mind: use versioned tables or event sourcing so you can add columns without downtime. A good schema is a contract that can be renegotiated without breaking the system.

By grounding every decision in **access patterns, consistency needs, and geometric intuition**, you turn database design from an art into a disciplined engineering practice that scales with your users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
