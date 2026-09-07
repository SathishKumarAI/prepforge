---
qid: ing_260d6881e8__faang__local
question: How to configure replication in Redis? — Redisleaderfollowreplication
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 535
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:30-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks how to set up *replication* in Redis (master‑slave or leader‑follower). I’ll assume:  
- Single master node, one or more replicas.  
- Use the built‑in replication mechanism, not external clustering.  
- Need to discuss configuration files, runtime commands, and failover handling.

**2️⃣ Approach**  
1. Enable `replicaof` (or `slaveof` in older docs) on each replica.  
2. Point replicas to the master’s IP/port.  
3. Optionally set `repl-diskless-sync`, `repl-ping-slave-period`, and `max-replicas`.  
4. For high‑availability, add a sentinel or use Redis Cluster for automatic failover.

**3️⃣ Depth (core answer)**  

```bash
# Master (redis.conf)
port 6379
save ""          # optional: no persistence during dev

# Replica (redis.conf)
replicaof <master_ip> 6379
port 6380
```

Or via CLI:

```bash
127.0.0.1:6379> CONFIG SET replicaof <master_ip> 6379   # on the replica
```

Key points:  
- **Replication is asynchronous**; writes on master propagate later.  
- **Snapshot (RDB) + AOF** can be used for fast startup of replicas.  
- `repl-diskless-sync` reduces disk I/O during sync but requires shared filesystem or network copy.  
- Sentinel monitors the master and promotes a replica automatically (`sentinel monitor mymaster 127.0.0.1 6379 2`).  

**4️⃣ Edge Cases**  
- Network partitions → replicas may become stale; need `repl-backlog-size` for large backlogs.  
- Master reboot: replicas reconnect automatically if `replicaof` persists.  
- Large data set: diskless sync or partial resynchronization (`SYNC` vs `PSYNC`).  
- Security: use ACLs and TLS to protect replication traffic.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: synchronous replication (with `wait`) guarantees consistency but hurts latency; asynchronous is faster. Highlight that for millions of writes, keep replicas read‑only and load‑balance clients. Wrap up by noting that monitoring (`INFO REPLICATION`) gives real‑time health metrics.

---  

*Word count: ~210 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
