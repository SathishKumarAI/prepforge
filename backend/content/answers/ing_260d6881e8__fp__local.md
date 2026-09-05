---
qid: ing_260d6881e8__fp__local
question: How to configure replication in Redis? — Redisleaderfollowreplication
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 547
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:26:12-05:00'
sources: []
---

### Why Redis needs replication

At its core Redis is a single‑process key/value store that guarantees **strong consistency**: every write is applied atomically to the in‑memory data set.  
When an application scales horizontally, the same guarantees must still hold across nodes; otherwise some replicas may lag or diverge and clients will see stale data.  
The solution is *master–replica* replication: the master serialises all commands to a log, which each replica replays. This gives **exactly‑once** semantics while allowing reads to be served from any node.

### How it works (first principles)

1. **Command pipe** – every write (`SET`, `DEL`, …) is appended to an in‑memory buffer called the *append‑only file* (AOF).  
2. **Replication stream** – the master opens a TCP socket to each replica and streams the AOF bytes as they are written.  
3. **Snapshotting** – to avoid endless logs, the master periodically takes an RDB snapshot (`BGSAVE`) and sends it as the initial state; replicas then continue receiving incremental changes.

The replication protocol is *pull‑based*: a replica connects, requests the current snapshot, then stays in sync by reading the master’s stream. This guarantees that even if the network hiccups, the replica can resume from the last consistent point.

### Configuration

```bash
# On the master
replica-read-only no          # allow writes on the master
appendonly yes                # enable AOF (ensures durability)
appendfsync everysec

# On a replica
replicaof <master_ip> <port>
slave-serve-stale-data yes    # serve reads while reconnecting
```

The `replicaof` directive tells the node to open a socket, download the master’s snapshot, and then subscribe to its log. The master automatically stops sending new commands until the replica acknowledges receipt (simple ACK), ensuring no data loss.

### Non‑obvious insight

**Replication is not just a copy mechanism; it’s a *consistency bridge* that transforms a single‑process guarantee into a distributed one.**  
Because each replica replays exactly the same byte stream, any bug in the master’s command ordering would manifest identically on all replicas. This symmetry turns replication into a powerful debugging tool: inconsistencies surface immediately as divergent states among replicas, revealing subtle race conditions that would otherwise be invisible in a single‑node deployment.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
