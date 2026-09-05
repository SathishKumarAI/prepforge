---
qid: vq_d0cae4a501__fp__local
question: ) what happens when two clients tries to access same file in Hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 399
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:57:17-05:00'
sources: []
---

**Why HDFS can’t let two writers race on the same file**

At its core, HDFS is a *write‑once* system that guarantees *exactly‑once* semantics for clients.  
The fundamental problem it solves is **avoiding corruption of data while still allowing high throughput**.  
If two processes could write simultaneously to the same block, they would corrupt each other’s bytes and break the “single writer” invariant that underpins HDFS’s consistency model.

### The mechanism

1. **Lease acquisition** – When a client opens a file for *write*, it requests an exclusive lease from the NameNode.  
   The lease is a lightweight token; only one holder can exist at any time, and the lease owner must keep renewing it (heartbeat).  

2. **Block creation & replication** – While holding the lease, the writer streams data to DataNodes, which create new blocks and replicate them.  
   Since no other client can open the same file for write, the NameNode guarantees that all replicas are written from a single source.

3. **Read‑write coexistence** – Readers do not need a lease; they access *completed* blocks.  
   A writer can still stream data while readers read older blocks because HDFS is append‑only at block level.

### Non‑obvious insight

The lease mechanism is *stateless* on the DataNodes: they never know who holds the lease, only that a file is being written.  
This decoupling lets DataNodes focus on throughput (writing data) while the NameNode enforces consistency (single writer).  
Thus HDFS trades a tiny amount of coordination overhead for massive scalability—exactly what large‑scale analytics demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
