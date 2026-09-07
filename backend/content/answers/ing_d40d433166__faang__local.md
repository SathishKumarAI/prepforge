---
qid: ing_d40d433166__faang__local
question: 'Explain: that nothing is going to go wrong — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 482
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:23-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *Operational Transformation (OT)* guarantees consistency in a real‑time collaborative editor like Google Docs—i.e., “nothing goes wrong” even when many users edit concurrently.

*Assumptions to confirm:*  
1. Clients send operations (insert/delete) to the server.  
2. Operations may arrive out of order or be delayed.  
3. The system must preserve intent and eventual consistency.

**Approach**  
1. Define a *transform* function that, given two concurrent ops `a` and `b`, produces transformed ops `a' = transform(a,b)` and `b' = transform(b,a)`.  
2. Apply OT on the server: when an op arrives, it is transformed against all concurrent ops already applied to the shared state.  
3. Broadcast the transformed op to other clients; each client applies the same transform logic locally.

**Depth**  
- *Transform rules* handle insert‑insert (offset adjustment), delete‑delete (shifting indices), and insert‑delete (cancellation or offset).  
- **Correctness proof**: OT satisfies two properties—*convergence* (all replicas reach the same state) and *intention preservation* (each user’s intent remains). The transform function is designed to satisfy these.  
- **Complexity**: Each incoming op requires O(n) transforms against `n` concurrent ops; however, in practice, conflict windows are small, keeping latency low.

**Edge Cases**  
- Simultaneous deletes of the same character → one delete becomes no‑op.  
- Network partitions → operations queued and later transformed once connectivity restores.  
- Large batch edits (e.g., copy‑paste) → split into atomic ops to maintain transform invariants.

**Optimize & Communicate**  
- Use *tunneling* or *delta‑sync* to reduce bandwidth.  
- Implement a *conflict resolution policy* (e.g., last writer wins) as a fallback for extreme contention.  
- When explaining, start with the problem, outline OT’s guarantees, walk through a concrete example, and finish by summarizing how convergence is achieved—this demonstrates clear reasoning and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
