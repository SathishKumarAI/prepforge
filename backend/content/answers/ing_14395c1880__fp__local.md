---
qid: ing_14395c1880__fp__local
question: 'Explain: Now what is the third category? Let''s — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 454
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:19-05:00'
sources: []
---

### The Third Category: **New‑SQL Databases**

When a system‑design interview asks you to “choose the best database,” the answer usually falls into one of three camps:

| Category | Core Problem it Solves | Typical Use‑Case |
|----------|------------------------|------------------|
| **Relational (SQL)** | Strong ACID guarantees on structured data | OLTP, banking, ERP |
| **NoSQL** | Horizontal scalability and schema flexibility | Big data analytics, real‑time feeds |
| **New‑SQL** | *Same* ACID semantics **plus** the horizontal scaling of NoSQL | High‑volume e‑commerce, SaaS platforms |

#### Why New‑SQL Exists

The fundamental tension in distributed systems is **consistency vs. availability vs. partition tolerance (CAP)**. Relational engines sacrifice scalability to preserve consistency; NoSQL engines trade ACID for speed and scale. New‑SQL tackles this by re‑architecting the storage layer (e.g., using sharded, column‑archetype stores) while still enforcing transactions via *distributed consensus* protocols (Raft/Paxos). Thus they offer:

- **Transactional guarantees**: `BEGIN…COMMIT` works across shards.
- **Horizontal scalability**: Add nodes to absorb traffic spikes.
- **SQL interface**: Familiar query language, mature tooling.

#### One Non‑Obvious Insight

Many interviewers assume New‑SQL is simply a “high‑performance SQL.” The subtlety lies in its *transaction isolation levels*. Because each shard may hold only a fragment of the data, serializable isolation can be achieved with **two‑phase commit** or **optimistic concurrency control**, but this incurs significant coordination overhead. Hence, performance gains are often limited to workloads that *do not* require cross‑shard joins or complex transactional logic. Recognizing when such trade‑offs hurt is key to selecting the right database for a given system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
