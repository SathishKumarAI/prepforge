---
qid: ing_28bbe95689__faang__local
question: 'Explain: screen of user or POS right so — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 485
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:10-05:00'
sources: []
---

## Clarify  
We’re asked how **Google Docs** keeps multiple users’ edits consistent in real time, focusing on *Operational Transformation (OT)* and *Differential Synchronization*.  
Assumptions:  
* Clients send text operations (insert/delete) to a server.  
* Network latency is non‑zero; messages may arrive out of order.  
* We want eventual consistency without locking the document.

## Approach  
1. **Define an operation model** (position, length, content).  
2. **Implement OT on the server**: transform incoming ops against concurrent ones to preserve intent.  
3. **Propagate transformed ops back to all clients**; each client replays them locally.  
4. For *Differential Sync*, maintain a document snapshot + change‑vector; exchange diffs rather than full state.

## Depth  
*OT* transforms two concurrent ops `a` and `b`:  
- If `a` inserts before `b`, shift `b`’s index forward.  
- Deletions adjust indices similarly.  
The server keeps a **history buffer** of last N ops; each incoming op is transformed against all unseen ops. Complexity: O(N) per operation, but N is bounded (e.g., 100).  

*Differential Sync* uses *vector clocks*: each client sends its clock and diff; the server merges by applying only missing ops. This reduces bandwidth but requires careful conflict resolution (last‑write‑wins or merge strategies).

## Edge Cases  
- **Simultaneous inserts at same position** → tie‑break by user ID or timestamp.  
- **Network partitions** → clients buffer ops until reconnection, then reconcile via OT.  
- **Large deletions overlapping multiple ops** → ensure transformation order preserves intent.

## Optimize & Communicate  
*Cache* recent operations and use *delta compression* to cut payloads.  
Explain to interviewers: “We choose OT because it guarantees convergence without locking; differential sync is a lightweight fallback for bandwidth‑constrained clients.”  

This structured reasoning shows clear problem framing, algorithmic detail, complexity trade‑offs, edge‑case handling, and optimization insight—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
