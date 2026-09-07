---
qid: ing_48902fe48f__faang__local
question: 'Explain: an end number of different copies of — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 441
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:38-05:00'
sources: []
---

**Clarify**

We’re asked how a system like Google Docs keeps *many* concurrent users editing the same document in sync.  
Key assumptions:  
• Users can edit text, insert/delete characters, and format.  
• Edits arrive out‑of‑order over the network.  
• The system must preserve intent (the “meaning” of each user’s action).  

**Approach**

1. **Model operations** as a sequence of *op* objects (insert, delete, format) with positions & timestamps.  
2. Use **Operational Transformation (OT)** to transform incoming ops against concurrent ones so that every replica applies the same final state.  
3. Store a *log* of ops on a central server; each client keeps a local history and the last applied op ID.

**Depth**

- When an edit arrives, the server rebases it: `transform(op_new, op_concurrent)` → new_op.  
- The transformed op is broadcast to all clients.  
- Each client applies ops in order of their *server timestamps*; if a local op conflicts with a remote one, OT resolves by adjusting positions (e.g., insert before delete).  

Complexity: each transform is O(1) per concurrent op; total latency ≈ network round‑trip + transform cost.  
Trade‑off: OT guarantees convergence but can be complex to implement correctly for rich formatting.

**Edge Cases**

- Network partitions → clients may diverge until reconnect (OT ensures eventual consistency).  
- Large deletes spanning many characters → position mapping must handle gaps.  
- Simultaneous insertions at the same spot → tie‑breaking by user ID or timestamp.

**Optimize & Communicate**

- Batch ops to reduce round‑trips; compress operation payloads.  
- Use a **vector clock** per client for efficient conflict detection.  
- Explain to interviewers: OT is chosen because it preserves user intent and works with low‑latency, peer‑to‑peer updates—exactly what Google Docs requires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
