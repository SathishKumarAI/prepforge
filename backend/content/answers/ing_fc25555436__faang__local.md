---
qid: ing_fc25555436__faang__local
question: 'Explain: Data fabric — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:10-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *data architecture* in the context of a **Data Fabric** (IBM’s concept). I’d confirm that they’re asking for:  
1. The definition of data architecture.  
2. How it fits into a Data‑Fabric stack.  
3. Why it matters for ML pipelines.

**Approach**  
I’ll first define data architecture, then map its components to the layers of a Data Fabric (source, integration, governance, analytics), and finally tie it back to ML workflows.

**Depth**  

| Layer | Core Elements | Role in Data Fabric |
|-------|---------------|---------------------|
| **Data Sources** | Structured tables, streams, IoT feeds, APIs | Ingest raw inputs for models. |
| **Integration & Transformation** | ETL/ELT pipelines, data lakes, data warehouses, streaming engines (Kafka, Flink) | Normalizes and enriches data; exposes unified schemas via catalog services. |
| **Governance & Security** | Metadata management, lineage, access controls, compliance rules | Ensures trustworthiness of training data and auditability of ML outputs. |
| **Analytics & Consumption** | BI tools, model serving endpoints, MLOps pipelines (Kubeflow, SageMaker) | Delivers predictions; captures feedback for retraining. |

Data architecture is the *blueprint* that dictates how these layers interconnect—data models, schema evolution policies, and integration patterns—so every ML pipeline can reliably pull, transform, and serve data at scale.

**Edge Cases**  
- **Schema drift** in streaming sources → triggers automatic re‑training or feature recalibration.  
- **Data silos** across org units → broken lineage; need federation logic.  
- **Regulatory changes** (GDPR) → updates to access control rules must propagate through the fabric.

**Optimize & Communicate**  
I’d suggest incremental adoption: start with a unified catalog, then add streaming connectors, and finally embed model‑specific metadata. I’d close by stressing that a well‑designed data architecture reduces ML “data pain points,” accelerates experimentation, and ensures reproducibility—key for any FAANG‑scale AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
