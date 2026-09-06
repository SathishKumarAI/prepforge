---
qid: vq_392c7df416__faang__local
question: what is difference between DAG & Lineage?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 519
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:08-05:00'
sources: []
---

**Clarify**  
You’re asking how a *Directed Acyclic Graph* (DAG) differs from *data lineage*.  
Assumptions: we’re talking about ETL pipelines or dataflow systems (Airflow, dbt, Snowflake), not just graph theory.

---

**Approach**  
1. Define each concept in the context of data engineering.  
2. Highlight their purposes and typical representations.  
3. Compare/contrast key attributes (structure, scope, mutability).  

---

**Depth**

| Aspect | DAG | Lineage |
|--------|-----|---------|
| **Definition** | A graph of tasks where edges denote *execution order*; no cycles → guarantees a finite schedule. | A record of *how data items were transformed*: source → intermediate → target, including metadata (who, when, why). |
| **Primary use** | Scheduling and dependency resolution for jobs. | Auditing, impact analysis, compliance, debugging, provenance. |
| **Granularity** | Task‑level (or job‑level) nodes; edges are “runs after”. | Record‑level or schema element level; often annotated with timestamps/versions. |
| **Stateful vs stateless** | Stateless structure; the graph itself doesn’t hold data values. | Stores actual lineage facts (e.g., `customer_id` in table A came from column X in file Y). |
| **Evolution** | Usually static per DAG run, but can be versioned. | Continuously updated as new runs happen; may be stored in a separate metadata store. |

In practice, a DAG *exposes* the workflow to an orchestrator, while lineage *records* what happened inside that workflow.

---

**Edge Cases**

- A DAG with dynamic branching (e.g., sensor‑driven tasks) still remains acyclic but can complicate lineage capture.
- Lineage may be incomplete if transformations are opaque (binary blobs), breaking auditability.

---

**Optimize & Communicate**  
Explain that while both involve graphs, they answer different questions: “What must run and in what order?” vs. “Where did this data originate?”. In an interview, emphasize how you would implement lineage storage (e.g., Iceberg’s `PROVENANCE` column) and ensure the DAG remains acyclic by design checks before deployment. This showcases clear reasoning, technical depth, and awareness of operational trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
