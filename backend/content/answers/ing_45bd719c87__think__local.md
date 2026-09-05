---
qid: ing_45bd719c87__think__local
question: 'Explain: When to Use Vertical Scaling — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 406
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:08:38-05:00'
sources: []
---

**1. Clarify the problem scope and assumptions**  
   * Identify whether the workload is CPU‑bound, memory‑bound, or I/O‑bound.  
   * Assume the current system runs on a single machine (or a small cluster) and that horizontal scaling isn’t yet feasible due to data sharding complexity or strong consistency needs.

**2. Adopt a “resource bottleneck” mental model**  
   * Treat vertical scaling as increasing the capacity of one node: more cores, RAM, SSD speed, or network bandwidth.  
   * Use the CAP theorem to justify that adding resources can preserve Consistency and Availability for small‑to‑medium workloads.

**3. Step‑by‑step reasoning**  
   1. Profile the ML pipeline (data ingestion → preprocessing → training → inference).  
   2. Pinpoint which stage saturates CPU, memory, or disk I/O.  
   3. Evaluate if adding cores/ RAM on that node will proportionally reduce latency or increase throughput.  
   4. Verify that the workload remains within a single‑node footprint (no sharding needed).  

**4. Common traps to avoid**  
   * Assuming “more memory = always better” – sometimes the bottleneck is CPU or I/O.  
   * Over‑scaling beyond the point of diminishing returns; watch for lock contention or context switching spikes.  
   * Ignoring cost per performance gain—vertical upgrades can be expensive.

**5. Sanity‑check & communicate**  
   * Re‑explain: “We’ll boost the single node’s resources because our profiling shows a clear CPU/memory ceiling and the dataset fits in one machine.”  
   * Confirm with stakeholders that horizontal scaling isn’t required yet, and outline when to reconsider it (e.g., data volume grows beyond current RAM or latency targets can’t be met).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
