---
qid: ing_260d6881e8__think__local
question: How to configure replication in Redis? — Redisleaderfollowreplication
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 450
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:11:30-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
   - What *type* of replication is needed (master–slave vs. Redis‑Cluster)?  
   - Are we using a single Redis instance or multiple nodes?  
   - Do we need persistence, failover, or read‑scale only?  
   - Assume a typical master–replica setup on separate servers.

**2. Choose the mental framework**  
   - *Configuration flow*: Identify master → set `slaveof` (or `replicaof`).  
   - *Verification steps*: Use `INFO replication`, check `role:master/slave`.  
   - *Failover logic*: Understand `min-slaves-to-write`, `max-replicas`.

**3. Step‑by‑step reasoning**  
   1. Pick a master node and note its IP/port.  
   2. On each replica, edit `redis.conf` or issue `SLAVEOF <master_ip> <port>`.  
   3. Restart replicas (or use the command live).  
   4. Verify with `INFO replication`; ensure `connected_slaves` counts match.  
   5. Optionally enable `replica-read-only yes`, set `maxmemory-policy` if needed.

**4. Common traps to avoid**  
   - Forgetting that replicas must not have a `bind` to localhost only.  
   - Mixing up `slaveof` (older) vs. `replicaof` (newer syntax).  
   - Not configuring authentication (`requirepass`) before replication.  
   - Overlooking network firewalls blocking the replication port.

**5. Sanity‑check & verbalize**  
   - Ask: “Does the replica show `master_link_status:up`?”  
   - Run a write on master and read from replica to confirm data flow.  
   - Communicate clearly: “I set up the replica with SLAVEOF, verified connectivity via INFO replication, and ensured network rules allow traffic on port 6379.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
