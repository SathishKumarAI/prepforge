---
qid: ing_c8ae0d5794__faang__local
question: 'Explain: on the either side we arrive at — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 544
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of the *operational transformation (OT)* and *differential synchronization* mechanisms that power real‑time collaborative editors such as Google Docs. I’ll assume:  

1. Multiple users edit the same document concurrently over unreliable networks.  
2. Edits are small text operations (insert/delete).  
3. The system must converge to a consistent state for all clients with minimal latency.

**Approach**  
Describe OT first, then differential sync as an alternative. Highlight key invariants: *convergence*, *intention preservation*, and *causality*.  

**Depth**

| Technique | Core Idea | Workflow |
|-----------|-----------|----------|
| **Operational Transformation (OT)** | Transform incoming operations against concurrent ones so that each client applies the same net effect. | 1) Client generates op = (Δ, base‑version). <br>2) Server assigns a global order, transforms op against ops it has already applied (using transform(op₁,op₂)). <br>3) Broadcast transformed op to all clients; each client updates local state and version. |
| **Differential Synchronization** | Periodically exchange *diffs* of the entire document; resolve conflicts by merging or prompting users. | 1) Client sends diff = current‑state – last‑known‑state. <br>2) Server merges diff with its own changes (often via a three‑way merge). <br>3) Send merged result back; clients replace local copy. |

*Complexities*: OT is **O(k)** per op where *k* is concurrent ops, but keeps document size small. Differential sync is **O(n)** on the whole doc but simpler to implement and tolerant of large operations.

**Edge Cases**

- Network partitions → OT ensures eventual consistency; diff sync may lose edits if diffs are lost.  
- Large simultaneous inserts → OT transforms may become expensive; differential sync can batch them.  
- Undo/redo → Requires storing inverse ops (OT) or full history snapshots (diff).

**Optimize & Communicate**  

For a production system like Google Docs, combine OT for fine‑grained latency with periodic differential sync to catch up clients that fell behind. Mention scalability: shard documents across servers, use vector clocks to detect causality. Conclude by emphasizing the trade‑off between complexity (OT) and robustness (diff sync).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
