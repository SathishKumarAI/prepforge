---
qid: ing_8b1d1e0ea8__faang__local
question: 'Explain: Conflict resolution — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 551
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:47-05:00'
sources: []
---

**Clarify**  
We’re asked how *Liveblocks* solves conflict‑resolution in a real‑time, multi‑user environment—think collaborative editors or multiplayer games where many clients update shared state concurrently.

Assumptions to confirm:  
1. Updates are event‑driven (e.g., “add node”, “move object”).  
2. Clients may be offline or lagging, so updates can arrive out of order.  
3. The system must preserve a consistent view for all users with minimal latency.

**Approach**  
Liveblocks employs *Operational Transformation (OT)* and *Conflict‑Free Replicated Data Types (CRDTs)* under the hood.  
1. **Local optimist**: each client applies changes immediately, generating a local operation ID.  
2. **Broadcast & ack**: ops are sent to the server; once acknowledged, they’re rebroadcasted to peers.  
3. **Transformation / Merge**: incoming ops are transformed against concurrent ones (OT) or merged deterministically (CRDT), ensuring commutativity.

The server acts as a *sequencer* and provides a canonical history for new clients.

**Depth**  
- OT requires maintaining transformation matrices; it guarantees convergence but can be heavy on memory.  
- CRDTs (e.g., *LSEQ*, *RGA*) avoid transformations by designing data structures that merge without conflict, offering linear time merges.  
Liveblocks exposes a simple API: `onChange`, `applyPatch`; under the hood, it tags each patch with a Lamport timestamp and uses a *vector clock* to order them.

Complexity:  
- OT: O(n) per operation (n = concurrent ops).  
- CRDT: typically O(1)-O(log n) depending on data type.  
Trade‑off: OT is powerful for text editors; CRDT scales better for structured scene graphs in games.

**Edge Cases**  
- Network partitions → operations replayed once reconnected.  
- Simultaneous deletes/updates → deterministic tie‑breakers (e.g., client ID priority).  
- Large batch updates → compression and chunking to avoid timeouts.

**Optimize & Communicate**  
Future work: hybrid OT+CRDT for mixed workloads; adaptive batching based on latency; leveraging WebRTC for lower hop counts. I’d explain the rationale by walking through a “two users move the same object” scenario, showing how timestamps and transformations resolve it while keeping UI responsive. This demonstrates structured thinking, depth, and clear communication—key to FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
