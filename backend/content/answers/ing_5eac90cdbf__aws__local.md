---
qid: ing_5eac90cdbf__aws__local
question: 'Explain: Consistency — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 556
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:40-05:00'
sources: []
---

**Situation (S)** – In my last role I led a team that had to migrate a high‑traffic e‑commerce catalog from a sharded MySQL cluster into Google Cloud’s Spanner for global consistency and low latency. The business required **strong consistency** for price updates across 12 regions; any stale read could cost us millions in lost revenue.

**Task (T)** – I was responsible for designing the data model, choosing the right consistency level, and ensuring that the system met SLA targets of <10 ms read latency and 99.999% availability while keeping costs below $3M/yr.

**Action (A)**  
1. **Modeling & Partitioning:** Used a *single‑row* primary key per product (`product_id`) and added an `update_ts` column to enable *read‑your‑writes* guarantees via Spanner’s *Timestamp Oracle*.  
2. **Consistency Selection:** Chose **Read‑Committed** for most reads but wrapped critical price‑change transactions in a **Strongly Consistent Read‑Write Transaction** using `spanner.TransactionOptions{ReadWrite: &spanner.ReadWriteTransaction{}}`.  
3. **Performance Tuning:** Leveraged *batch writes* and *stale reads* (`ALLOW_STALE_READS`) for non‑critical analytics to reduce load on the primary cluster.  
4. **Cost Control:** Deployed a *regional instance pool* with 2 replicas per region; added autoscaling based on CPU >70% using Cloud Spanner’s autoscaler, keeping compute spend within budget.

**Result (R)** – After rollout:  
- Price‑update latency dropped from 120 ms to **<8 ms**.  
- Consistency errors fell from 3% of reads to **0.001%**, eliminating the $2M monthly loss identified in QA.  
- Total Spanner spend was **$2.7M/yr** (≈10% below target).  

**Leadership Principles Highlighted:**  
- **Customer Obsession** – ensured every customer saw accurate prices instantly.  
- **Ownership & Dive Deep** – I owned the migration, delved into Spanner’s consistency model, and iterated on the design until metrics matched business goals.  

Bar‑raisers listen for: clear ownership, deep technical insight (e.g., why read‑write transactions were chosen), quantified impact (latency, cost savings), and lessons learned from earlier attempts that used weaker consistency and caused revenue loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
