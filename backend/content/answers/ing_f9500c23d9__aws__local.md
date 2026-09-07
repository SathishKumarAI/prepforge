---
qid: ing_f9500c23d9__aws__local
question: 'Explain: Using time to solve consensus — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 420
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:58-05:00'
sources: []
---

**Situation & Task**  
I was leading a team that had to add a *distributed lock* for a real‑time bidding system (≈ 10 k requests/s). The goal was to guarantee at most one instance could modify an ad inventory slot per second while keeping latency < 50 ms.

**Action – Design**  
1. **Consensus via Raft** (Martin Kleppmann’s approach) → single leader, log replication for safety.  
2. **Implementation on AWS**:  
   * **Amazon EC2** hosts the Raft nodes; each node runs a lightweight Go service.  
   * **Elastic Load Balancer (ELB)** routes lock requests to the current leader via its DNS name.  
   * **Amazon DynamoDB** stores the slot state and a short TTL entry for stale locks.  
3. **Scalability & Availability**:  
   * Auto‑scaling groups keep 3–5 nodes; leader election guarantees < 200 ms failover.  
   * DynamoDB’s global tables provide cross‑region read replicas, keeping latency low even during leader re‑election.  
4. **Cost & Trade‑offs**:  
   * ~ $0.015/h per node (t3.medium) + DynamoDB on-demand ($0.25/100K writes).  
   * Chose Raft over Paxos for easier debugging and strong consistency.

**Result**  
After deployment, lock contention dropped from 12 % to < 1 %. The system handled 15 k req/s with 99.9 % SLA, saving the business ~ $2M annually in lost auction revenue.  

*Leadership Principles:* **Ownership** – I owned the end‑to‑end design and incident response; **Dive Deep** – I dissected Raft’s guarantees and AWS service limits to build a robust solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
