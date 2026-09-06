---
qid: ing_65827c7c51__fp__local
question: 'Explain: Requirements Gathering — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 487
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:03-05:00'
sources: []
---

### Why the Problem Exists  
In large‑scale data pipelines, a *job* (ETL, ML training, analytics) is a unit of computation that may span many machines and time‑varying resources.  
If jobs are scheduled naïvely—one after another on a single queue—the system underutilises parallelism, violates SLAs, and becomes fragile to node failures.

### What the Scheduler Must Guarantee  
1. **Throughput** – maximize concurrent job execution subject to resource limits.  
2. **Fairness & Priority** – honor QoS policies (e.g., batch vs. interactive).  
3. **Fault‑tolerance** – detect failed nodes and reschedule lost work without duplication.  
4. **Scalability** – logarithmic overhead as the cluster grows.

### From Requirements to Design  

* **Decentralised state**: store job metadata in a replicated KV store (e.g., Raft/Etcd).  A *master‑less* approach reduces single‑point failure and lets each node propose assignments, converging via consensus.  
* **Resource abstraction**: model workers as *leases* with capacity vectors; use a weighted bipartite matching (Hungarian algorithm) on the fly to assign jobs to optimal workers. This is essentially a linear programming relaxation of bin packing—ensuring optimal utilisation under constraints.  
* **Event‑driven triggers**: instead of polling, publish “job ready” and “node health” events; consumers react immediately, reducing latency (queue‑based event sourcing).  

### Non‑obvious Insight  
The key to *efficient rescheduling* is to treat a failure as a *negative job*: when a node dies, we create a synthetic “fail” task that forces all its in‑flight jobs into the queue. Because the scheduler already knows each job’s resource profile, it can immediately re‑assign them without recomputing the whole schedule—amortising the cost of recovery over the entire cluster.

This principled approach turns ad‑hoc scheduling into a provably optimal, fault‑tolerant algorithm that scales linearly with the number of jobs and nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
