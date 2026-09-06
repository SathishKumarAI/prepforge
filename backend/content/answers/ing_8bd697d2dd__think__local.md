---
qid: ing_8bd697d2dd__think__local
question: 'Explain: Database Replication & Backups — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 510
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:18:26-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Ask whether we’re focusing on *data consistency*, *availability*, or *performance*.  
- Assume a read‑heavy workload (like Instagram), large media blobs, and millions of users.  
- Decide on a CAP trade‑off: favor **Availability + Partition tolerance (AP)** with eventual consistency.

**2️⃣ Adopt a layered mental model**  
1. *Data storage* → object store for images/videos, relational DB for metadata.  
2. *Replication strategy* → master–slave or multi‑master per region.  
3. *Backup cadence* → point‑in‑time snapshots vs incremental restores.  
4. *Failover & disaster recovery* → cross‑region replication + automated switchover.

**3️⃣ Step‑by‑step reasoning**  
- **Write path**: client → API → write to primary DB → async replicate to replicas, store blob in S3‑like object store.  
- **Read path**: read from nearest replica; if stale, tolerate eventual consistency.  
- **Replication**: use *asynchronous log shipping* (e.g., MySQL binlog) for low latency; consider *read‑repair* or *anti‑entropy* to converge.  
- **Backups**: schedule nightly full snapshots of the relational DB, incremental hourly backups of object store metadata. Store snapshots in immutable storage (WORM).  
- **Recovery**: restore from latest snapshot + apply WAL logs to reach point‑in‑time; for media, rely on object store’s durability.

**4️⃣ Common pitfalls to avoid**  
- *Over‑replicating*: increases write latency unnecessarily.  
- *Ignoring conflict resolution* in multi‑master setups.  
- *Blindly trusting snapshots*: they may miss recent writes if not coordinated with WAL.  
- *Underestimating storage costs* for immutable backups.

**5️⃣ Sanity check & verbalize**  
- Verify that **writes are fast** (primary only), **reads are highly available** (any replica).  
- Confirm that a **restore to any region** can be done within the SLA (e.g., < 1 h).  
- Explain trade‑offs: eventual consistency vs. strict ACID, cost of cross‑region traffic vs. availability. This verbal walk‑through shows you understand both design choices and their operational implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
