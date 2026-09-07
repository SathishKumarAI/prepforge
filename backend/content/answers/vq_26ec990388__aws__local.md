---
qid: vq_26ec990388__aws__local
question: How do you manage metadata in Azure Data Lake?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 480
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:43:47-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a migration of our on‑prem data warehouse to **Azure Data Lake Gen2** for a Fortune 500 retailer. The new lake had ~50 TB of raw logs and product catalogs, but the metadata was fragmented across SQL tables, CSV headers, and ad‑hoc JSON files. Without a unified catalog we risked duplicated effort, inconsistent schema, and slow query performance.

**Task (T)**  
I was tasked with designing an enterprise‑grade metadata layer that would give data scientists instant discoverability, enforce lineage, and support compliance audits—while keeping costs below the $2 M budget.

**Action (A)**  
1. **Unified catalog** – I introduced **Azure Purview** as a single source of truth, ingesting schema from Azure Data Factory pipelines and registering ADLS Gen2 assets automatically.  
2. **Automated lineage & quality rules** – Built a Python‑based workflow that ran nightly on Databricks to validate column types against the catalog and flag anomalies in a Power BI dashboard.  
3. **Cost control** – Leveraged Purview’s *scan* pricing model (≈$0.10/GB) versus manual tagging ($1.50/GB), reducing metadata costs by 70%.  
4. **Governance** – Implemented role‑based access via Azure AD, ensuring only authorized teams could publish new datasets.

**Result (R)**  
Within three months the data science team reduced dataset search time from ~15 min to <30 sec, and query latency on Synapse decreased by 45 %. The unified catalog also cut duplicate data ingestion by 60%, saving roughly **$250k annually**.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a self‑serve metadata portal that empowered analysts to find and trust data faster.  
- **Ownership & Dive Deep** – Took full ownership of the migration, dissecting every pipeline to surface hidden lineage gaps.

This approach demonstrates deep technical knowledge, measurable impact, and a bias for action—qualities a bar‑raiser looks for in an AWS interviewee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
