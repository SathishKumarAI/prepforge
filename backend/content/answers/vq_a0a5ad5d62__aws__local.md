---
qid: vq_a0a5ad5d62__aws__local
question: Difference between Azure Data Factory and Azure Databricks ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 505
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:47-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑migration project for a fintech client, the team needed to decide between **Azure Data Factory (ADF)** and **Azure Databricks** for ingesting ~10 TB of log files nightly into a Snowflake warehouse.

**Action**  
I mapped each tool’s strengths against our constraints:  
| Requirement | ADF | Azure Databricks |
|-------------|-----|-----------------|
| Orchestration + monitoring | ✔️ built‑in pipelines, triggers, SLA tracking | ✖️ requires external workflow (e.g., Airflow) |
| Spark processing & ML | ✖️ limited; relies on external compute | ✔️ native 2+ cluster types, auto‑scaling, notebooks |
| Cost control | Pay‑per‑run; low idle cost | Compute cost higher but burstable with spot VMs |
| Data transformation | SQL/ADF mapping only | Spark SQL + Python/Scala pipelines |

Given the heavy ETL (window joins, schema evolution) and need for iterative ML experiments, I recommended **Azure Databricks**. We provisioned two pools: a **Standard pool** for nightly jobs (auto‑scale 2–10 workers) and a **Spot pool** for ad‑hoc exploratory notebooks.

**Result**  
The switch cut end‑to‑end latency from 4 h to 45 min, reduced overall cost by 28% (thanks to spot VMs), and enabled on‑demand feature engineering that accelerated downstream model training by 3×. The client’s data freshness SLA improved from “daily batch” to “near real‑time”.

**Learning & Leadership Principles**  
*Customer Obsession*: I focused on the client’s need for speed and cost efficiency.  
*Ownership*: I led the evaluation, built proof‑of‑concepts, and drove the migration plan.  
*Dive Deep*: I benchmarked Spark vs. ADF pipelines, analyzed per‑step costs, and validated cluster sizing formulas.  

Bar‑raisers will note my data‑driven decision, the clear trade‑off analysis, and the measurable impact on SLAs and cost—hallmarks of ownership and deep technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
