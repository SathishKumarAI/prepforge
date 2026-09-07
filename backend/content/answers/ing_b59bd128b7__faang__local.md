---
qid: ing_b59bd128b7__faang__local
question: 'Explain: Breaking Redlock with bad timings — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 523
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:43-05:00'
sources: []
---

**Clarify**  
The question asks how a distributed system can avoid the “Redlock” algorithm’s pitfalls caused by clock drift or network delays, as described in Martin Kleppmann’s blog. I’ll assume we’re building a lock service that must be safe (no two nodes hold the same lock simultaneously) and liveness‑aware (should not deadlock on slow nodes), while working over an unreliable network with heterogeneous clocks.

**Approach**  
1. **Use consensus** (Raft/Paxos) to elect a leader that serialises lock requests.  
2. **Leverage time‑stamped leases** but derive the timestamp from the *leader’s* clock, not local clocks.  
3. **Validate on each request**: before granting a lease, ensure the requested expiry is in the future relative to the current cluster time and that no other node holds an overlapping lease.

**Depth**  
- The leader maintains a monotonically increasing logical clock (e.g., Lamport or hybrid logical clock).  
- When node A requests lock *L*, it forwards the request to the leader.  
- Leader assigns lease `start = now() + δ` and `end = start + duration`.  
- All replicas record `(node, L, end)` in a replicated log (Raft).  
- A follower that receives a stale message checks its local time against the logical clock; if `now > end`, it discards.  
- Complexity: O(log N) for Raft log replication; lock acquisition is constant‑time after leader contact.  
- Trade‑offs: single point of failure mitigated by leader election; latency increases due to round‑trip to leader.

**Edge Cases**  
- Leader crash during lease issuance → election restores consistency, previous lease invalidated.  
- Clock skew beyond δ → logical clock ensures monotonicity; physical clocks only used for expiry checks.  
- Network partitions: nodes in minority partition will not acquire locks until re‑joined, preserving safety.

**Optimize & Communicate**  
To reduce latency, we can cache the leader’s address and use heartbeats to keep it alive. For scalability, shard locks by key prefix so multiple leaders can coexist. I would explain this flow verbally with a diagram of request → leader → log replication → follower validation, emphasizing that safety is preserved by consensus while liveness is maintained through logical time. This aligns with FAANG’s preference for clear, scalable designs backed by proven protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
