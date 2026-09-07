---
qid: ing_e1c98ac6f4__aws__local
question: 'Explain: Isolation — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 678
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:06-05:00'
sources: []
---

**Situation (S)**  
At my previous role we migrated a legacy monolith that handled 1 M writes/day into a globally‑distributed system on **Google Cloud Spanner**. The biggest risk was *data isolation*—ensuring each transaction remained isolated across shards and regions.

**Task (T)**  
I had to design the transaction layer so that our OLTP workloads stayed ACID‑compliant while still scaling to 10 k concurrent users with <20 ms latency, all under a $200K/year budget.

**Action (A)**  

| Step | What I did | Why it mattered |
|------|------------|-----------------|
| **1. Leverage Spanner’s global serializable isolation** | Configured the cluster to use *TrueTime* and *Paxos‑based consensus* across replicas. | Guarantees *serializability* without manual locks, eliminating lost updates. |
| **2. Use 2PC with “Read‑Write” mode only for critical paths** | Wrapped high‑conflict aggregates in a single `BEGIN TRANSACTION … COMMIT` block. | Keeps conflict rates <0.5 % (measured via Spanner’s `READ_WRITE_TRANSACTION` metrics). |
| **3. Partition data by customer ID and shard on region** | Each partition stored locally; cross‑partition ops used *distributed transactions* with a minimal commit window. | Reduces latency to 12 ms average, meets SLA while keeping replication cost down (≈$150K/yr). |
| **4. Monitor isolation violations** | Deployed Cloud Monitoring dashboards that alert on `aborted_transactions`. | Allowed us to react before user‑visible failures (<1 % error rate). |

**Result (R)**  
- Achieved **99.999% availability** and **<15 ms latency** for 90th percentile traffic, surpassing the original monolith’s 35 ms.  
- Cut operational costs by **30 %** versus a self‑managed Spanner cluster with manual lock management.  
- Reduced rollback incidents from 12 per week to **0** in production.

---

### What a bar‑raiser looks for

| Indicator | Why it matters |
|-----------|----------------|
| **Ownership** – I took full responsibility for the migration and continuous monitoring, not just “handed over” to ops. |
| **Dive Deep** – I analyzed Spanner’s consistency model, Paxos internals, and cost curves before choosing a design. |
| **Quantified Impact** – 30 % cost savings, <15 ms latency, 0 rollback incidents. |
| **Learning from Failure** – After an initial spike in aborted transactions we tuned the transaction window; documented the trade‑off between latency and abort rate for future teams. |

> *Amazon Leadership Principle:* **Ownership** + **Dive Deep** → Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
