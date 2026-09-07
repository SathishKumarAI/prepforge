---
qid: ing_b16daeda8e__faang__local
question: 'Explain: 7.3 Durability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 686
total_tokens: 928
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:36:28-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how the *Durability* layer in Instagram’s architecture guarantees that a user’s photo never disappears once it’s uploaded.  
Assumptions to confirm:  
- Users can upload millions of photos per day.  
- The system must support reads from anywhere (mobile, web, CDN).  
- We need strong consistency for “once‑uploaded → always visible”.  

**2️⃣ Approach**  
1. **Write‑through replication** – every write goes to a primary node and at least one secondary before acknowledging success.  
2. **Multi‑region persistence** – store the same blob in geographically separated data centers (e.g., AWS S3 cross‑region).  
3. **Immutable storage + append‑only logs** – avoid overwrites; use versioned objects so accidental deletes are recoverable.  
4. **Eventual tombstone propagation** – if a photo is deleted, propagate the delete event to all replicas and mark it as *soft* until all replicas confirm removal.  

**3️⃣ Depth (Technical Detail)**  
- **Primary‑Secondary with Paxos/RAFT**: The primary receives `PUT /photos`, writes to local disk + S3, then sends replication log entries. Secondary nodes ack after persisting.  
- **Durability flag** in the DB row (`is_durable=TRUE`) is set only after all replicas confirm. Until then, reads return a *pending* status.  
- **Cross‑region sync**: Use AWS S3’s `replicate` feature (or similar) with *Eventual Consistency*, but enforce *strong consistency* on the control plane via the log.  
- **Versioned objects**: Each upload gets a UUID + timestamp; deletes write a tombstone object rather than overwriting the blob.  

Complexity: Write latency ≈ `O(n)` where n = number of replicas (usually 3). Read latency is O(1) from nearest CDN, with consistency fallback to primary if stale. Trade‑off: higher write cost for guaranteed durability vs. lower read latency via caching.

**4️⃣ Edge Cases**  
- **Network partition**: If a replica loses connectivity, writes still succeed on the primary; replication resumes when connection restores (ensuring no data loss).  
- **Simultaneous deletes/uploads**: Use vector clocks or Lamport timestamps to resolve conflicts—delete wins if timestamp > upload.  
- **Disk failure**: Local logs are replicated before ack; if a node dies, another can replay the log to recover state.

**5️⃣ Optimize & Communicate**  
- **Batch replication**: Group writes into micro‑batches to reduce per‑request overhead.  
- **Compression & deduplication**: Store only unique image data across users (e.g., via perceptual hashing).  
- **Monitoring**: Expose metrics (`replica_sync_time`, `tombstone_age`) and alert on divergence.  

When explaining, I’d narrate the flow from upload → primary log → secondary ack → cross‑region sync, emphasizing that durability is achieved by *write‑through + replication* with immutable storage, ensuring “once uploaded → always retrievable” even in failure scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
