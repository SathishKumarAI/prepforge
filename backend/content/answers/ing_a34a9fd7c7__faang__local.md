---
qid: ing_a34a9fd7c7__faang__local
question: 'Explain: Resolving Data Conflicts — Amazon Dynamo Architecture - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 518
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:19-05:00'
sources: []
---

**Clarify**  
Amazon Dynamo is a highly‑available key–value store that tolerates network partitions by replicating data to multiple nodes and using *eventual consistency*. The problem: when concurrent writes occur on different replicas, how does Dynamo resolve which value wins without sacrificing availability?

*Assumptions to confirm*:  
- Each node keeps a version vector (or Lamport timestamp).  
- Clients use “last‑write‑wins” or application‑defined merge logic.  
- Replication factor *N*, consistency level *R* for reads, *W* for writes.

**Approach**  
1. Accept the write at the coordinator, assign a new version tag.  
2. Forward to *N* replicas asynchronously.  
3. On read, query *R* nodes, gather their values + versions.  
4. Resolve conflicts locally using deterministic rules (e.g., vector‑clock comparison).  
5. Return merged result and propagate it back to all replicas in a background “anti‑entropy” phase.

**Depth**  
- **Version vectors** capture causality; a value *A* is newer than *B* iff its vector dominates.  
- If vectors are incomparable (concurrent writes), Dynamo falls back on an application‑supplied merge function or arbitrarily picks one (last‑write‑wins).  
- Anti‑entropy via Merkle trees ensures eventual convergence with O(log N) network traffic.  
- Complexity: write latency O(1); read latency O(R); anti‑entropy cost O(N log N) per cycle.

**Edge Cases**  
- Clock skew leading to wrong “last‑write” decisions.  
- Network partitions causing divergent histories that never converge if anti‑entropy fails.  
- Clients reading stale data because *R* < *W*.

**Optimize & Communicate**  
- Use hybrid logical clocks to reduce clock skew impact.  
- Tune *R* and *W* per operation type (e.g., strong consistency for inventory updates).  
- Provide a clear API exposing merge policies so clients can inject domain logic.  

By articulating the conflict‑resolution pipeline, its trade‑offs, and mitigations, you demonstrate deep understanding of Dynamo’s design while keeping the explanation concise and structured—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
