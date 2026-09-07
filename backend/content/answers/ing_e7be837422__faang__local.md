---
qid: ing_e7be837422__faang__local
question: 'Explain: 4.5 Addressing Single Points of Failure — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 492
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:56-05:00'
sources: []
---

**Clarify**  
We need a *distributed job scheduler* that eliminates single points of failure (SPOFs). Assume: jobs are batch or stream, can be long‑running, may depend on other jobs, and the system must scale to thousands of workers. We’ll ask about persistence guarantees, fault tolerance, and SLA expectations.

**Approach**  
1. **Decouple control & compute** – a *controller* cluster manages metadata; worker nodes execute tasks.  
2. **Consensus for state** – use Raft or Paxos‑based key/value store (e.g., etcd) to hold job queues, DAGs, and worker heartbeats.  
3. **Leader election + sharding** – multiple controllers elect a leader; shards of the job graph are replicated across replicas to avoid one node failure.  
4. **Health monitoring & retry** – workers ping health endpoints; if missed, tasks are reassigned.  
5. **Immutable logs** – write‑ahead log (e.g., Kafka) for all state changes so recovery is deterministic.

**Depth**  
- *Job submission* writes to the Raft log → replicated, then enqueued into a partitioned priority queue.  
- *Task assignment* uses consistent hashing on job ID to pick a worker; leader checks health before dispatch.  
- If a worker dies mid‑run, its heartbeat stops → controller requeues task in O(log n).  
- Fault tolerance: each replica set contains at least 3 nodes; majority required for writes ensures no single node can corrupt state.  
Complexity: log replication O(1) per write (amortized), assignment O(log w) where *w* is worker count.

**Edge Cases**  
- Network partitions: split‑brain avoided by Raft’s election timeout.  
- Leader crash during task dispatch: queued tasks stay in log, new leader picks up.  
- Heavy load spikes: sharding of job queues + dynamic scaling of controller replicas.

**Optimize & Communicate**  
Explain trade‑offs: stronger consistency (Raft) vs latency; use tunable replication factor for cost. Highlight monitoring dashboards showing replica health and job throughput. Conclude with how this architecture removes SPOFs while keeping the system horizontally scalable and resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
