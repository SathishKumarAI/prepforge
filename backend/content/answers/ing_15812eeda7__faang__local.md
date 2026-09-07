---
qid: ing_15812eeda7__faang__local
question: 'Explain: Google Docs System design | Part 1| Operational transformation
  | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 486
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:09-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how Google Docs uses **Operational Transformation (OT)** for real‑time collaboration—specifically the *differentiate* step that turns user edits into a sequence of operations that can be applied consistently across all replicas. Key assumptions: (1) each client works on a linear text buffer, (2) network latency is variable but operations eventually arrive at every peer, and (3) clients may edit concurrently.

**Approach**  
1. Define an *operation* as `{type, position, content}` (insert/delete).  
2. Each client assigns a monotonically increasing **sequence number** (or Lamport timestamp) to outgoing ops.  
3. When an operation arrives, the receiver runs the *transform* function against all concurrent ops it has already applied but not yet acknowledged by the sender.  

The transform rule `T(op1, op2)` outputs a new op that preserves both edits’ intentions.

**Depth**  
- **Insert‑Insert**: If positions differ, keep both; if equal, order by sequence number.  
- **Insert‑Delete**: If delete precedes insert at same position, shift insert right by deleted length.  
- **Delete‑Delete**: If overlapping ranges, adjust start and length to avoid double deletion.  

The algorithm runs in O(k) where *k* is the number of concurrent ops; it’s linear because each op only needs to be transformed once per peer. OT guarantees convergence: all replicas eventually see the same final document state regardless of operation order.

**Edge Cases**  
- Large simultaneous deletes/insertions that overlap heavily (e.g., two users deleting the entire file).  
- Operations arriving out‑of‑order due to network jitter; the transform must be idempotent.  
- Network partitions: ensure operations are stored and replayed correctly once connectivity resumes.

**Optimize & Communicate**  
To reduce per‑op overhead, we batch operations locally and send them in a single message, then apply transformation only once at the receiver. We also compress operation histories using delta encoding for persistence. In an interview, I’d explain that OT’s elegance lies in its *local* transformation rule set, which keeps client logic lightweight while guaranteeing consistency across millions of concurrent users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
