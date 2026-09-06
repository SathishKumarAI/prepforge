---
qid: ing_97f66e1dcb__think__local
question: 'Explain: Redis Replication - Leader-follower technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 468
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:09:53-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- Confirm we’re talking about *Redis* (in‑memory data store) and its replication model.  
- Assume a basic “master–replica” terminology (though Redis calls them “primary–replica”).  
- Understand that “leader‑follower” is just another way to describe the same pattern.

**2️⃣ Mental model / framework**  
- Think of a *single source of truth* (the leader) that accepts writes.  
- Followers maintain an exact copy by applying every command sent by the leader.  
- The system can be visualized as a directed graph: one node → many nodes, no cycles.

**3️⃣ Step‑by‑step reasoning**  
1. **Write path** – Clients write to the primary; it executes commands locally.  
2. **Replication stream** – Primary logs each command (append‑only file) and streams it over TCP to replicas.  
3. **Apply on replicas** – Replicas read the stream, replay commands in order, updating their own memory state.  
4. **Read path** – Clients can read from any replica for scalability; writes still hit the primary.  
5. **Failover** – If the primary fails, a replica is promoted to new leader (via Sentinel or manual switch).  

**4️⃣ Common traps to avoid**  
- Mixing up *replication* vs *sharding*: replication keeps copies, sharding splits data across nodes.  
- Assuming replicas are fully synchronized instantly; they lag behind by network latency.  
- Forgetting that writes are not allowed on replicas unless explicitly configured (Redis 7+ allows write‑through replicas).  

**5️⃣ Sanity‑check & verbalize**  
- Verify the direction of data flow: primary → replica, never the reverse for writes.  
- Ask: “If I delete a key on the primary, will it disappear on all replicas?” – yes, after replication.  
- Summarize in one sentence: *Redis leader‑follower replication ensures a single writer (leader) pushes every command to followers, which replay those commands to stay in sync while allowing read scaling.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
