---
qid: ing_0a9d07f270__faang__local
question: 'Explain: Um, let me give this one more — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 475
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:09:05-05:00'
sources: []
---

**Clarify**  
We’re asked to describe how Google Wave worked internally (as presented at Google I/O 2009).  
Assumptions: the audience knows basic client‑server and collaborative‑editing concepts; we’ll focus on architecture, data model, and consistency.

---

**Approach**  

1. Explain Wave’s *document* abstraction.  
2. Describe the *client–server sync protocol*.  
3. Cover *conflict resolution* (Operational Transformation).  
4. Touch on *scalability* layers (sharding, replication).

---

**Depth**

- **Wavelets & Blobs**: A *wave* is a top‑level container; each wave contains multiple *wavelets* (sub‑documents) and *blobs* (binary attachments). Each wavelet holds a *sequence of operations* that transform its state.  
- **Operational Transformation (OT)**: Clients generate local ops, send them to the server; the server rebases incoming ops against concurrent ones, guaranteeing convergence across replicas. OT also handles undo/redo and access control.  
- **Sync Protocol**: Uses long‑polling websockets (“WaveletSync”) where clients subscribe to wavelets. The server pushes incremental diffs (ops) in JSON, minimizing bandwidth. Clients apply ops via OT before rendering.  
- **Scalability**: Wave data is sharded by *wave ID*; each shard runs a master–replica set for fault tolerance. A global namespace service maps wave IDs to shards. Caching and batch pushing of ops reduce latency.

---

**Edge Cases**

- Network partitions → temporary divergence, resolved once connectivity returns.  
- Large blobs → stored in GCS with signed URLs; only metadata in WaveDB.  
- Conflicting access rights → server enforces permissions before applying ops.

---

**Optimize & Communicate**

Improvements: adopt CRDTs for eventual consistency, reduce OT complexity. In an interview I’d narrate the flow from a user edit → local op → OT rebasing → batched push → server rebasing → broadcast → client apply, emphasizing how each layer keeps the system fast, consistent, and horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
