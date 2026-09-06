---
qid: ing_ed80fdfe97__fp__local
question: 'Explain: Execution Service — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 411
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:24:28-05:00'
sources: []
---

**Why we need it**

A cloud platform runs *millions* of jobs (ETL, ML training, data‑flow) that share a finite set of compute nodes.  
The core problem is **resource allocation under uncertainty**: each job arrives with an unknown runtime, priority, and dependencies, while the scheduler must keep throughput high and latency low.  

**Fundamental design principles**

1. **Decentralised state → scalability** – Every worker keeps only its own queue; a global “master” maintains minimal metadata (job‑to‑worker mapping).  
2. **Work‑stealing + back‑pressure** – Idle nodes pull work from overloaded peers, preventing hot spots and keeping the system self‑balancing.  
3. **Probabilistic runtime estimates → risk‑aware scheduling** – Use Bayesian inference on past runs to predict duration; schedule higher‑variance jobs earlier to bound tail latency.  

**Key components**

| Layer | Function |
|-------|----------|
| **API gateway** | Exposes `submit(job)` and `cancel(id)`. |
| **Metadata store** (e.g., Raft‑based KV) | Persists job status, dependencies, and worker heartbeats. |
| **Scheduler daemon** | Periodically polls the store, assigns jobs to workers based on estimated runtime and resource fit. |
| **Worker nodes** | Pull tasks via gRPC, report completion/failure back to the store. |

**Non‑obvious insight**

The *optimal* policy is not “always give the biggest job first”; it’s *probability of finishing before the deadline*.  
By modeling each job’s runtime as a distribution, the scheduler can compute the expected *deadline miss probability* for every candidate assignment and pick the one that minimizes the sum over all jobs. This subtle shift turns a greedy queue into a globally optimal, risk‑aware system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
