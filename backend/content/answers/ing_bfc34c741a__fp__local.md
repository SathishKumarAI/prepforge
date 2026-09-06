---
qid: ing_bfc34c741a__fp__local
question: 'Explain: Database Choice — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 424
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:53-05:00'
sources: []
---

**Why the “database‑choice” question matters**

At its core, a system design interview asks you to *optimize* information flow: **retrieve what you need, when you need it, with minimal cost**.  
In machine‑learning pipelines this trade‑off is between *latency*, *throughput*, and *data integrity*. The database you pick must support the **entropy of your workload**—the distribution of reads vs writes, the size of the feature set, the freshness requirement, and the need for joins or aggregations.

1. **Model the access pattern**  
   - If 90 % of traffic is read‑only inference requests, a *read‑optimized* store (e.g., columnar OLAP or key‑value cache) wins.  
   - If you’re training nightly with massive feature tables that are updated in‑place, a *write‑heavy* relational engine with ACID guarantees becomes essential.

2. **Quantify the cost**  
   Use the *information‑theoretic* view: every index reduces entropy (uncertainty) about where data lives; each shard incurs communication overhead. The optimal design balances the *Shannon entropy* of queries against the *network latency* penalty per hop.

3. **Pick a schema that mirrors your objective**  
   - Feature tables → denormalized JSON/Parquet for quick scans.  
   - Model metadata → relational with foreign keys to enforce versioning.

**Non‑obvious insight:**  
Most candidates focus on “NoSQL vs SQL” and forget the *temporal dimension*. In ML, model weights evolve; treating them as time‑series data (using a time‑partitioned key‑value store or a graph DB for lineage) can drastically cut down recomputation costs. Design your database to be *lineage‑aware* from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
