---
qid: ing_71ad1d8672__faang__local
question: 'Explain: a user has modified the client copy — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 510
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:52-05:00'
sources: []
---

**Clarify**

We’re asked how to keep multiple users’ edits in a shared Google‑Docs‑style editor consistent when each client can modify its local copy offline and later sync with the server.  
Assumptions:  
* Real‑time collaboration over unreliable network.  
* Clients may be offline for arbitrary periods.  
* Operations are small text changes (insert, delete).  

**Approach**

1. **Operational Transformation (OT)** on the client side to maintain a local edit buffer and transform incoming server ops against pending local ops.  
2. On reconnection, the client sends its operation log (a list of operations with timestamps/ids) to the server.  
3. The server applies these ops in order, transforming them against concurrent server ops using OT, then broadcasts the transformed ops back to all clients.  

**Depth**

*Each operation is a tuple `(op_id, type, position, text)`.*  
- **Transformation rules**:  
  - Insert vs Insert: shift positions based on earlier insert.  
  - Insert vs Delete: delete may reduce insert index if it precedes the deletion.  
  - Delete vs Delete: adjust ranges to avoid double‑deletion.  

Complexity per op is *O(n)* where *n* is number of concurrent ops, but in practice *n* stays small due to conflict resolution. The server keeps a version vector to merge logs and detect missing ops.

**Edge Cases**

- Simultaneous insert at same position → deterministic tie‑break by client id.  
- Offline clients with divergent histories → log replay ensures convergence.  
- Large batch of ops (e.g., copy‑paste) may exceed buffer limits → split into atomic ops.  

**Optimize & Communicate**

We can compress the operation log (delta encoding), use binary protocols, and apply *conflict‑free replicated data types* (CRDTs) for eventual consistency if OT overhead grows.  
In an interview I’d narrate: “First, we treat each edit as an operation; by transforming against concurrent ops we preserve intention. If a client reconnects after being offline, we replay its log, transform against newer server ops, and broadcast the corrected sequence.” This shows clear problem‑solving structure, depth in OT mechanics, awareness of edge cases, and an eye toward scalability—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
