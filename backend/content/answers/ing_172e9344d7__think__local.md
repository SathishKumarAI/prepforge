---
qid: ing_172e9344d7__think__local
question: 'Explain: Sharding — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 503
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:16:23-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *What* is sharding? A horizontal partitioning of data across machines.  
   - *Why* do we need it? To spread load (reads/writes), improve latency and avoid single‑point bottlenecks.  
   - Assume a relational or key‑value store, stateless application layer, and a moderate to large dataset.

**2️⃣ Adopt the “partition‑key + routing” mental model**  
   - Pick a *shard key* that correlates with access patterns (user_id, region).  
   - Define a deterministic **hash → shard map** (e.g., modulo N or consistent hashing).  
   - Treat each shard as an independent database instance.

**3️⃣ Step‑by‑step reasoning**  

1. **Choose the key** – must be highly selective and stable.  
2. **Design the hash function** – simple modulo works for static shards; use consistent hashing for dynamic scaling.  
3. **Decide on physical placement** – distribute shards across nodes/availability zones to mitigate failure.  
4. **Implement routing logic** – application or a dedicated proxy (e.g., PgBouncer, Vitess) forwards queries based on the hash.  
5. **Handle joins & cross‑shard ops** – either avoid them or use two‑phase commits / materialized views.  
6. **Plan for rebalancing** – when adding/removing shards, move a subset of keys to minimize downtime.

**4️⃣ Common traps to dodge**  

- *Unbalanced key distribution*: leads to hot spots.  
- *Cross‑shard transactions*: complex and slow.  
- *Ignoring replication & failover*: a single node failure kills the shard.  
- *Hard‑coded shard count*: hampers horizontal growth.

**5️⃣ Sanity checks & verbalizing the plan**  

- Verify that every key maps to exactly one shard.  
- Confirm that routing logic is stateless and can be cached.  
- Walk through a sample query: compute hash → route → execute.  
- Explain to a teammate how adding a new node only requires moving ~1/N of keys, not the whole dataset.

This structured approach keeps the design clear, scalable, and maintainable while avoiding the most frequent pitfalls of sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
