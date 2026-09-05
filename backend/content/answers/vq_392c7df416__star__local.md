---
qid: vq_392c7df416__star__local
question: what is difference between DAG & Lineage?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:15-05:00'
sources: []
---

**Situation**  
While leading the migration of our batch ETL pipeline from on‑prem Hadoop to a cloud data lake, we discovered that downstream analytics teams were reporting inconsistent metrics during a quarterly audit. The root cause turned out to be unclear lineage and an overly complex DAG that had evolved over three years.

**Task**  
I needed to map the exact flow of data (lineage) for each metric and simplify the DAG so that every transformation was auditable, traceable, and could be re‑run reliably in production.

**Action**  
First, I instrumented our Airflow DAGs with `xcom` tags and a custom metadata service. Using the lineage API, I captured source tables, transformations, and destination tables into an Apache Atlas graph. Then I refactored the DAG: split monolithic tasks into smaller, idempotent operators, added proper dependency annotations, and introduced versioned Airflow DAG files in Git. Finally, I set up automated lineage extraction on each run and visualized it with Metacat.

**Result**  
The new pipeline reduced audit time from 3 days to 2 hours and cut data‑processing latency by 35 %. We achieved full end‑to‑end traceability: every metric could be traced back to raw files, eliminating “black‑box” concerns. The exercise reinforced that a DAG defines execution order, while lineage captures the data’s provenance across those steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
