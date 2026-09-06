---
qid: ing_8c587d9922__fp__local
question: 'Explain: Databricks System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 599
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:29-05:00'
sources: []
---

**Why the “Databricks‑style” interview matters**

The core problem a large data platform must solve is *scalable, low‑latency analytics over petabytes of semi‑structured data*.  
Two physics‑like principles govern the solution:

1. **Conservation of information** – every transformation must preserve lineage so that a query can be answered from the smallest set of materialized views without recomputing everything.
2. **Entropy minimisation in distributed computation** – shuffle operations explode network traffic; the design must minimise data movement while keeping fault‑tolerance.

From these, the canonical architecture emerges:

| Layer | Purpose | Key Design Question |
|-------|---------|---------------------|
| **Ingestion (Delta Lake)** | Immutable append‑only tables with ACID guarantees | How does the system detect and resolve concurrent writes? |
| **Metadata & Scheduling (Unity Catalog + Workload Scheduler)** | Fine‑grained access control, job orchestration | What trade‑offs exist between global vs. per‑table catalog updates? |
| **Compute (Spark/Delta Engine)** | Declarative query optimisation + adaptive execution | How does the engine decide when to switch from vectorised to whole‑stage code generation? |
| **Storage** | Tiered, object‑store backed | When should data be tier‑promoted based on access patterns? |

**Typical FAANG questions**

1. *Explain how Delta Lake achieves ACID without a centralized transaction log.*  
   – The answer must detail the use of *commit markers* (`_delta_log`) and optimistic concurrency control, highlighting why this eliminates global locks.

2. *Design a fault‑tolerant shuffle that scales to 10 k nodes.*  
   – Discuss *hash‑partitioning*, *combiner stages*, and *data locality heuristics*; emphasise the cost of network I/O versus CPU overhead.

3. *Propose an adaptive query plan for streaming joins.*  
   – Derive why *watermarking* and *micro‑batch size tuning* directly influence latency, linking to probability theory on data arrival distributions.

4. *How would you optimise a multi‑tenant environment with competing workloads?*  
   – Connect to the principle of *resource isolation*: fair‑share scheduling, dynamic allocation, and the non‑obvious insight that *over‑provisioning CPU can actually reduce shuffle traffic by allowing more parallelism.*

**Non‑obvious insight**

Many candidates overlook **metadata as a first‑class resource**. In Databricks’ design, catalog updates are distributed via a gossip protocol; this reduces lock contention but introduces eventual consistency—requiring careful version checks during query planning. Recognising this subtlety is the difference between a surface answer and one that demonstrates deep architectural intuition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
