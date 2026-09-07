---
qid: ing_c5ebed1f16__faang__local
question: 'Explain: Key terms in data architecture — What Is a Data Architecture?
  | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 483
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:21:12-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of *data architecture* and the core concepts IBM uses when describing it—essentially, how data is organized, stored, processed, and accessed in a system. I’ll assume you want a concise overview that covers the main components (models, layers, governance) without diving into any specific technology stack.

**Approach**  
1. Define “data architecture” as the blueprint for data flow and structure.  
2. Break it into three pillars: *modeling*, *infrastructure*, and *governance*.  
3. Highlight IBM’s typical terminology (e.g., data lake, warehouse, schema‑on‑read/write).  
4. Wrap up with how these pieces fit together in a modern enterprise.

**Depth**  

| Pillar | Key Concepts | Typical IBM Terms |
|--------|--------------|-------------------|
| **Modeling** | Logical vs physical schemas; entity‑relationship diagrams; dimensional modeling (star/snowflake) | *Data Model*, *Metadata Repository* |
| **Infrastructure** | Storage layers, processing engines, integration pipelines | *IBM Cloud Pak for Data*, *IBM Db2 Warehouse*, *Watson Knowledge Catalog* |
| **Governance** | Quality, lineage, security, compliance | *IBM Information Governance Catalog*, *Data Stewardship* |

A data architecture maps raw inputs → curated datasets → analytics & ML workloads. IBM stresses a *data lakehouse* approach: a unified repository that supports both schema‑on‑read (for exploration) and schema‑on‑write (for OLAP).

**Edge Cases**  
- Legacy monoliths lacking metadata can break lineage tracking.  
- Highly dynamic data sources may violate pre‑defined schemas, causing ingestion failures.  
- Regulatory changes can invalidate governance rules.

**Optimize & Communicate**  
To improve performance, advocate for *partitioning* and *caching* in the warehouse layer; to enhance security, enforce role‑based access at the catalog level. When presenting this, start with a one‑sentence definition, then use the table as a visual anchor, and finish by linking back to how it supports ML pipelines—ensuring interviewers see both breadth and depth of your understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
