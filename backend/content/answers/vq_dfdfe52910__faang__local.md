---
qid: vq_dfdfe52910__faang__local
question: can you mention the crieteria for good data model?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 534
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:02-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Identify criteria that make a data model “good” in a data‑engineering context.  
*Assumptions to confirm:*  
- Target is analytical/operational systems (not just a toy schema).  
- The organization values maintainability, performance, and scalability.  
- Stakeholders include DBAs, developers, analysts, and ML engineers.

**2️⃣ Approach**  
I’ll outline the key quality dimensions first, then map each to concrete design decisions, and finally discuss trade‑offs.

**3️⃣ Depth – Core Criteria**

| Dimension | What it means | Typical Design Choices |
|-----------|---------------|------------------------|
| **Correctness & Consistency** | Schema faithfully represents business rules. | Use foreign keys, check constraints, enforce domain models (e.g., `ENUM` for status). |
| **Simplicity / Normalization** | Avoids redundancy while keeping queries efficient. | 3NF for OLTP; star/snowflake schemas for BI. |
| **Scalability & Partitioning** | Handles growth in rows/queries without degradation. | Sharding, table partitioning (range/Hash), column‑store indexes. |
| **Performance / Query Optimisation** | Fast read/write for typical workloads. | Proper indexing, materialised views, denormalization where needed. |
| **Extensibility & Evolvability** | Easy to add new features or modify existing ones. | Versioned schemas (e.g., `effective_start`, `effective_end`), use of surrogate keys. |
| **Data Quality & Governance** | Ensures integrity and auditability. | Data lineage, validation pipelines, data catalog integration. |
| **Security & Compliance** | Protects sensitive data per regulations. | Row‑level security, encryption at rest/transport, access controls. |

**4️⃣ Edge Cases**  
- *Highly dimensional OLAP:* over‑denormalization may hurt write performance; test with incremental load scripts.  
- *Schema‑on‑write vs. schema‑on‑read:* choose based on latency requirements.  
- *Regulatory changes:* ensure that adding a new compliance column doesn’t break existing ETL jobs.

**5️⃣ Optimize & Communicate**  
I’d present the model as a balance sheet: each dimension scores against business priorities, highlighting trade‑offs (e.g., normalization vs. query speed). I would iterate with stakeholders to validate assumptions and refine constraints before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
