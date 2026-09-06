---
qid: vq_ab54d1d43d__faang__local
question: Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 468
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:37-05:00'
sources: []
---

**Azure Data Factory (ADF) – Quick FAANG‑style Overview**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem:* “Explain Azure Data Factory and its core use cases.”<br>Assumptions: you’re familiar with cloud concepts, need a 5‑minute pitch, focus on data ingestion/ETL. |
| **Approach** | 1️⃣ Define ADF as a serverless orchestration service.<br>2️⃣ Highlight pipelines, activities, triggers.<br>3️⃣ Contrast it with other services (Databricks, Synapse). |
| **Depth** | • **Pipelines:** JSON‑based workflow that chains activities (Copy, Data Flow, Databricks, Stored Procedure).<br>• **Linked Services & Datasets:** Connection metadata to sources/sinks.<br>• **Triggers:** Schedule, tumbling window, event‑driven.<br>• **Integration Runtime (IR):** Self‑hosted or Azure‑managed compute for data movement and transformation.<br>• **Data Flows:** Visual Spark‑based ETL without code. <br>• **Monitoring:** UI & REST API for status, run history, alerts. |
| **Edge Cases** | • Large file splits: use *Parallel Copy* and *Blob Prefixes*.<br>• Schema drift: enable *Auto‑Map* or use *Data Flow* with schema inference.<br>• Failures: retry policies, dead‑letter queues for downstream systems. |
| **Optimize & Communicate** | • Use *Self‑hosted IR* only when on‑prem data is involved; otherwise Azure IR saves costs.<br>• Cache linked services to avoid repeated authentication overhead.<br>Explain trade‑offs: serverless = no ops, but limited control over runtime vs. Databricks for heavy compute. |

**TL;DR:** ADF is Microsoft’s cloud‑native orchestration engine that glues together data movement, transformation, and workflow scheduling across heterogeneous sources—ideal for building end‑to‑end ELT pipelines with minimal infrastructure management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
