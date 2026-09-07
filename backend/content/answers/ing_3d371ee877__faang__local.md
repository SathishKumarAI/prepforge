---
qid: ing_3d371ee877__faang__local
question: 'Explain: Data warehouses — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 448
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:07-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *data architecture* in the context of data warehouses, referencing IBM’s terminology. I’ll confirm that they’re interested in how data is modeled, stored, and accessed across an enterprise warehouse, not just ETL pipelines.

**Approach**  
1. Define a data warehouse as a consolidated repository.  
2. Break down the layers: source, staging, integration (OLTP → OLAP), storage (dimensional vs. normalized), metadata, security, and consumption.  
3. Highlight IBM’s “data architecture” components: enterprise data model, reference models, and governance.

**Depth**  
A data architecture is the blueprint that dictates *what* data lives in a warehouse, *how* it’s transformed, and *where* it resides.  
- **Enterprise Data Model (EDM)** captures business concepts (customers, orders) independent of technology.  
- **Reference Architecture** maps EDM to physical schemas: star/snowflake for reporting, normalized for transactional support.  
- **Metadata Layer** stores lineage, definitions, and quality metrics—critical for governance.  
- **Security & Compliance** enforce role‑based access and data masking at the column level.  
IBM’s architecture emphasizes *semantic consistency* across heterogeneous sources, using a “data fabric” that abstracts physical storage while exposing a unified API to BI tools.

**Edge Cases**  
- Rapid schema evolution (new dimensions) → need for flexible metadata management.  
- Mixed workloads (real‑time vs batch) → hybrid OLTP/OLAP stores can break performance guarantees.  
- GDPR or CCPA compliance → data lineage must be auditable; missing lineage breaks auditability.

**Optimize & Communicate**  
I’d suggest incremental adoption: start with a minimal EDM, then layer in governance and security. Explain trade‑offs: star schema simplifies queries but duplicates data; normalized stores save space but complicate reporting. End by stressing that a robust data architecture is the foundation for scalable analytics—exactly what IBM promotes for enterprise success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
