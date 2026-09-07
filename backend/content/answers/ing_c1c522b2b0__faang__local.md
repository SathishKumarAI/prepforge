---
qid: ing_c1c522b2b0__faang__local
question: 'Explain: or just discard although you know I — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 540
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:35-05:00'
sources: []
---

**Clarify**  
You’re asking how *operational transformation* (OT) and *differential synchronization* (diff‑sync) solve real‑time collaborative editing for a document like Google Docs. I’ll assume we’re focusing on low‑latency, conflict resolution, scalability, and offline support.

**Approach**  
1. Outline the key properties each algorithm must satisfy.  
2. Describe OT’s transformation rules and how they keep documents consistent.  
3. Explain diff‑sync’s batched state diffs and merge strategy.  
4. Compare trade‑offs (latency, bandwidth, complexity, offline handling).

**Depth**  

| Feature | OT | Diff‑Sync |
|---------|----|-----------|
| **Conflict resolution** | Transforms concurrent operations to preserve intention; guarantees convergence regardless of operation order. | Merges document snapshots via tree‑diffs; resolves conflicts by last‑write‑wins or custom merge logic. |
| **Latency** | Near‑instant: each keystroke becomes an operation sent to the server; transformation is O(1) per op. | Higher latency: clients send diffs every few seconds (or on disconnect), so edits appear delayed. |
| **Bandwidth** | Tiny messages (insert/delete, position, length). | Larger diff payloads (whole line or block changes). |
| **Offline support** | Limited; must buffer ops and replay them once re‑connected, risking complex transformation chains. | Native: clients can edit locally, generate diffs when reconnecting, merge with server state. |
| **Scalability** | Requires a central sequencer to order ops; works well up to thousands of users per doc. | Stateless diff‑merging scales easily but may need conflict resolution logic on the server for many concurrent editors. |

**Edge cases**  
- OT must handle simultaneous insertions at same index (transform by position).  
- Diff‑sync can suffer from “lost updates” if two clients edit overlapping ranges before syncing; custom merge functions mitigate this.

**Optimize & communicate**  
For a production system like Google Docs, we choose **OT** for its low latency and strong intention preservation. We augment it with an offline buffer that replays ops upon reconnection, and use diff‑sync only for large structural changes (e.g., inserting tables). This hybrid strategy delivers responsive editing while keeping the algorithmic complexity manageable.

---  
*Word count: 221*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
