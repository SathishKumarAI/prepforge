---
qid: ing_af3eba2db6__fp__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 550
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:13-05:00'
sources: []
---

**Why the “Assumptions” section matters**

When you design a large‑scale service, every architectural choice is a trade‑off between *feasibility* and *optimality*. The **assumptions** in the Twitter‑style README formalize the constraints that make those trade‑offs well‑defined. They encode a *cost function* that balances latency, throughput, cost, and fault tolerance.

1. **Workload model (tweets per second)**  
   • It turns an abstract “user base” into concrete *requests per second*.  
   • This lets you compute the *throughput budget* for each component (e.g., write‑optimized storage vs. read replicas).

2. **Latency SLA**  
   • A hard bound on end‑to‑end latency translates into a *bandwidth requirement* and a *queue depth* constraint.  
   • It also dictates the *consistency window*: if you need 99 % of tweets visible within 200 ms, your data pipeline must finish serialization, replication, and indexing in that budget.

3. **Data model (tweet size, user graph)**  
   • Knowing the average tweet size lets you size sharding keys and storage.  
   • The user‑follow graph informs the *fan‑out strategy*: push vs. pull, pre‑computed timelines, or on‑demand aggregation.

4. **Failure assumptions**  
   • Assuming a 0.1 % MTBF for disks forces you to build redundancy (RAID, erasure coding) into the storage layer.  
   • It also shapes your *recovery time* and *graceful degradation* logic.

5. **Cost constraints**  
   • By bounding budget per user or per request, you can quantify how many replicas, what type of instances, or whether to use managed services.

---

### One non‑obvious insight

A **tight latency SLA automatically enforces a “write‑once, read‑many” data flow**. If writes must propagate in < 200 ms, you cannot afford heavy transaction logs or synchronous replication across data centers. Instead, the system pushes updates to an *append‑only log* and relies on eventual consistency for followers. This subtle shift—prioritizing write speed over strict ordering—drives many of Twitter’s architectural choices (e.g., using a Kafka‑style log, pre‑computed timelines, and background re‑ordering). It is often overlooked because people think latency concerns only the user interface, not the underlying data ingestion pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
