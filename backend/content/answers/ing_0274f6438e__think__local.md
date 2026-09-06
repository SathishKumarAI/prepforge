---
qid: ing_0274f6438e__think__local
question: 'Explain: How to do distributed locking — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 522
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:53:20-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What is “distributed locking”?* A single logical lock that can be held by a process on one machine and safely released by any other.  
- Assume a cluster of stateless nodes, network latency ≈ 10‑100 ms, no shared file system, and the need for high availability (i.e., the lock should survive node failures).  

**2️⃣ Mental model / framework**  
Think of the lock as an *optimistic* resource that is protected by a **lease**: a lease has a start time and a TTL.  
- Acquire → request a lease from a *leader* or consensus service.  
- Release → send a revoke message (or simply let the lease expire).  

This maps to the “leases + heartbeats” pattern in distributed systems.  

**3️⃣ Step‑by‑step reasoning**  
1. **Leader election**: use Raft/ZooKeeper/etcd to elect one node that owns the lock state.  
2. **Lease acquisition**: client asks leader for a lease; leader checks current holder and TTL, grants if free.  
3. **Heartbeat / keep‑alive**: client renews before TTL expires; failure of heartbeats causes automatic release.  
4. **Release**: client sends a revoke or the lease simply times out.  

**4️⃣ Common traps to avoid**  
- *Assuming perfect clocks*: use logical timestamps (e.g., Lamport) instead of wall‑clock time.  
- *Single point of failure*: don’t let the leader be the only lock holder; replicate state via Raft.  
- *Underestimating network partitions*: design for split‑brain by rejecting locks during a partition if the majority is unreachable.  

**5️⃣ Sanity‑check & communicate**  
Explain that the lock is effectively “locked” as long as the lease is valid and the leader agrees. Show how a failure leads to automatic release (TTL expiry) and how concurrent acquisition attempts are serialized by the leader. Use diagrams of request → leader → lease ↔ client heartbeat, and highlight that the system tolerates up to N‑1 node failures if using a consensus quorum. This clear flow helps others grasp why distributed locks work without shared memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
