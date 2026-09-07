---
qid: ing_0100686d73__faang__local
question: 'Explain: if you guys know that there was — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 542
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level explanation of how Google Docs keeps multiple users in sync using *Operational Transformation (OT)* and *Differential Synchronization*. I’ll assume we’re discussing real‑time collaborative editing on a shared document, not the underlying persistence or conflict resolution for non‑text data.

**Approach**  
1. Outline OT: concurrent edits → transform operations so they can be applied in any order without diverging state.  
2. Outline Differential Sync: each client keeps a copy of the server’s “anchor” and sends only deltas (diffs) when changes occur, with periodic full‑state checksums to recover from desynchronization.

**Depth**  
- **OT**: Each edit is an operation (insert/delete at position). When two ops arrive concurrently, we transform one against the other (e.g., if both insert at same index, resolve by a deterministic rule like client ID). Transformed ops are then applied locally and sent to others. Complexity is O(n) per transformation where n is number of concurrent ops; but in practice only a few peers share an edit stream, so it’s efficient.  
- **Differential Sync**: Clients compute a diff (e.g., using Myers’ algorithm) between their local state and the last known server anchor. The diff is sent as a patch. Server applies patches sequentially, updates its anchor, and pushes patches to other clients. If a client falls behind or diverges, it requests a full snapshot; the server sends a compressed representation (e.g., protobuf). Complexity: O(|Δ|) for sending, O(|doc|) for reconstructing on miss.

**Edge Cases**  
- Network partitions → OT ensures convergence once connectivity returns; Differential Sync may require re‑sync.  
- Binary data or large attachments aren’t handled by OT directly—use separate blob storage and pointers.  
- Simultaneous deletes/overwrites can produce “ghost” characters if transformation rules are weak.

**Optimize & Communicate**  
To reduce bandwidth, use delta compression (gzip) and only send operations for visible portions of the document. For scalability, shard documents by user or section so that OT transforms remain local to a small set of peers. I’d explain trade‑offs: OT gives fine‑grained consistency but is algorithmically complex; Differential Sync is simpler but can lag during high edit rates. Conclude with a diagram (omitted here) and emphasize real‑time latency targets (<200 ms).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
