---
qid: ing_e44e5bc393__faang__local
question: 'Explain: Um, so, that''s not what you''re seeing — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 540
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:29-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe how Google Wave (launched at Google I/O 2009) works internally—its architecture, data model, and real‑time collaboration mechanics.

**Approach**  
1. Identify core components: *Protocol*, *Data Model*, *Server‑Side Logic*, *Client Sync*.  
2. Explain the flow of a user edit → server → other clients.  
3. Highlight scalability mechanisms (sharding, event streams).

**Depth**  
- **Data Model** – Wave is a *document* split into *blips*; each blip contains an XML‑like tree of *operations* (insert/delete). Operations are *op‑logs* that can be replayed.  
- **Protocol** – Uses the *Google Wave Protocol (GWP)* over HTTP/2, with *XMPP‑style* messages for low‑latency updates. Each operation is an *event* tagged with a monotonically increasing *sequence number*.  
- **Server‑Side** – A stateless front‑end routes ops to the correct *shard*; shards hold the canonical op‑log and a *snapshot* of the current wave state (for fast reads). Conflict resolution uses *Operational Transformation (OT)*: each operation is transformed against concurrent ones so that all clients converge.  
- **Client Sync** – Clients maintain a local copy, send *diffs* to server, receive *patches*, apply OT locally and re‑render blips in ~10 ms. The client also polls for “presence” updates via WebSocket.  
- **Scalability** – 1 B+ users → sharded storage (NoSQL), per‑wave partitioning, and *lazy evaluation* of snapshots to keep writes fast.

**Edge Cases**  
- Network partitions: OT ensures eventual consistency; offline edits are queued locally and replayed on reconnection.  
- Large blobs: binary attachments stored in GCS, referenced by a lightweight metadata blob.  
- Security: each operation signed with OAuth token; server verifies permissions before applying.

**Optimize & Communicate**  
Explain trade‑offs: OT vs CRDT (chosen for latency), snapshot frequency versus memory usage, and how to benchmark convergence time. Conclude that Google Wave’s “under the hood” is a highly distributed, OT‑driven real‑time document system designed to scale to billions of concurrent edits while preserving consistency and low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
