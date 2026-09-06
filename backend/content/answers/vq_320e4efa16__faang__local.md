---
qid: vq_320e4efa16__faang__local
question: Explain List of Activities in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 522
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:04-05:00'
sources: []
---

**Clarify**  
In Azure Data Factory (ADF) the *Activities* are the work‑units that build a pipeline’s workflow. I’ll explain the main categories, how they’re used together, and any assumptions—e.g., you’re on ADF v2, using a data‑flow‑driven ETL.

**Approach**  
1. Enumerate core activity types (Copy, Data Flow, Stored Procedure, Custom, Web, etc.).  
2. Group them by purpose: ingestion, transformation, orchestration, monitoring.  
3. Show how they compose a pipeline (trigger → activities → downstream).  

**Depth**  
| Category | Typical Activities | Use‑case |
|----------|-------------------|----------|
| **Ingestion/Movement** | *Copy* – bulk data copy between sources/destinations; supports format conversion, schema drift handling. | Load logs from blob to Synapse. |
| **Transformation** | *Data Flow* (mapping or wrangling), *Spark*, *Databricks*, *HDInsight*. | Complex ETL that needs distributed compute. |
| **Orchestration/Control** | *If Condition*, *Switch*, *ForEach*, *Until*. | Conditional branching, looping over collections. |
| **External Invocation** | *Stored Procedure*, *Azure Function*, *Custom (Python/R)*, *Web* (REST). | Trigger downstream services or run custom logic. |
| **Monitoring/Alerting** | *Set Variable*, *Wait*, *Get Metadata*. | Manage pipeline state, add delays, fetch schema info. |

Each activity can specify *linked services*, *datasets*, *parameters*, and has a *retry* policy, *timeout*, and *logging*. Activities are executed in parallel when no dependencies exist; otherwise, the control flow activities enforce order.

**Edge Cases**  
- Large payloads exceeding 4 GB in Copy → use *Blob staging*.  
- Schema drift → enable “Preserve Hierarchy” or map manually.  
- Long‑running Spark jobs → set appropriate timeout and monitor via Linked Service diagnostics.  

**Optimize & Communicate**  
To reduce costs, batch small files into larger ones before a Copy; for high‑volume pipelines, use *Data Flow* with column pruning and partitioning. I’d explain that the choice of activity directly impacts performance, reliability, and maintainability—critical trade‑offs for any data engineering solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
