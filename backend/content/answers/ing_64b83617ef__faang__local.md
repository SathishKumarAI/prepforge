---
qid: ing_64b83617ef__faang__local
question: 'Explain: it''s that simple so whether we are — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 611
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:26-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of **Operational Transformation (OT)** and **Differential Synchronization (DS)** used in collaborative editors like Google Docs.  
Assumptions:  
1. We’re talking about real‑time, multi‑user text editing.  
2. Network latency/partition tolerance is non‑negligible.  

**Approach**  
1. Define each algorithm’s core idea.  
2. Contrast their guarantees (convergence, intention preservation).  
3. Highlight trade‑offs in complexity and deployment.  

**Depth**  
| Aspect | OT | DS |
|--------|----|----|
| **Model** | Clients send *operations* (insert/delete) with a sequence number; server transforms incoming ops against concurrent ones using a transformation function `T(op1, op2)` to preserve intent. | Clients compute *diffs* of their local document state relative to the last known remote snapshot; they send patches that are applied in order on the server and then broadcast back. |
| **Convergence** | Guaranteed if transformation functions satisfy *transformability* properties (inverse, inclusion). | Achieved by applying diffs idempotently; relies on a consistent version history. |
| **Intention Preservation** | Strong: each operation is transformed to keep its original intent even after concurrent edits. | Weaker: diff may be applied blindly; if two users delete overlapping ranges, the last patch wins, potentially losing intent. |
| **Complexity** | O(N) per transform (N = concurrent ops). Requires careful implementation of transformation tables or RGA/CRDTs for large documents. | Diff computation is linear in document size but simpler to implement; network overhead can be higher due to larger patches. |
| **Scalability** | Server‑centric: all ops must pass through a central server, which can become a bottleneck. | More peer‑to‑peer friendly; each client can sync with any other replica, reducing load on the central node. |

**Edge Cases**  
- *Concurrent deletes* in OT require inverse transformation to avoid double deletion.  
- In DS, *conflicting patches* may lead to lost edits unless a merge strategy (e.g., last‑writer‑wins) is enforced.

**Optimize & Communicate**  
For Google Docs, OT is preferred because it guarantees that every user’s intent is preserved even under high concurrency; the server acts as the single source of truth. DS is simpler and works well for low‑latency or offline scenarios but sacrifices strong intention preservation. I’d explain that a hybrid approach (OT core with optional diff‑based conflict resolution) can combine OT’s guarantees with DS’s efficiency, which is why modern editors are moving toward CRDTs that blend both paradigms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
