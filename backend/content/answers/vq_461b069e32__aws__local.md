---
qid: vq_461b069e32__aws__local
question: How to implement incremental load in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 516
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:01-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a migration of the nightly 1 TB sales‑pipeline from an on‑prem ETL to **Azure Data Factory (ADF)**. The business required near‑real‑time inventory updates; re‑processing the full stream every day would hit cost & SLA limits.

**Action**  
I implemented an **incremental load strategy** that combined ADF’s *Change Tracking* with a **Delta Lake** landing zone on Azure Data Lake Storage Gen2.  
1. **Source tracking** – enabled CDC in SQL Server and used the *Get Metadata* activity to capture row‑count deltas (`SELECT @@ROWCOUNT`).  
2. **ADF pipeline** – a *ForEach* loop reads the delta log, copies only new/updated rows to a staging folder, then runs an *Execute Data Flow* that upserts into Delta Lake using Spark’s merge API.  
3. **Scalability & cost** – the data flow runs on Azure Synapse Spark (auto‑scale 1–4 DWUs), costing ~ $0.02 per GB processed versus $0.10 if re‑ingesting full data.  
4. **Availability** – the pipeline is wrapped in an *If Condition* that retries up to 3 times; each run writes a checkpoint file so restarts resume from last successful batch.

**Result**  
The incremental approach cut nightly runtime from **12 h → 1 h** and reduced ADF activity cost by **68 %**. Inventory accuracy improved (zero‑latency updates) and the solution was fully self‑healing, meeting SLA of < 30 min for new sales records.

---

### Leadership Principles  
- **Ownership** – I scoped the end‑to‑end pipeline, selected Azure services, and drove cost optimisation.  
- **Dive Deep & Deliver Results** – I quantified performance gains (runtime, cost) and iterated on failure scenarios to make the system resilient.  

**Bar‑raiser cues**: clear ownership narrative, data‑driven impact, deep understanding of ADF components, trade‑off analysis (Spark vs. Copy), and lessons from initial failures (retry logic & checkpointing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
