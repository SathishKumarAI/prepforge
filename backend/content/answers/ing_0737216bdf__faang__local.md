---
qid: ing_0737216bdf__faang__local
question: 'Explain: Types of data architecture — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:01:14-05:00'
sources: []
---

**Clarify**  
*Problem:* Define “data architecture” and enumerate its main types (e.g., data‑warehouse, data‑lake, stream, graph).  
*Assumptions to confirm:* Is the audience familiar with ETL/ELT concepts? Are we focusing on enterprise vs. cloud‑native patterns?

**Approach**  
1. Start with a concise definition.  
2. List each architectural pattern with its key characteristics and typical use cases.  
3. Highlight trade‑offs (latency, cost, flexibility).  

**Depth**  
> **Data Architecture** is the blueprint that governs how data is ingested, stored, processed, governed, and consumed across an organization. It defines the *what*, *where*, *how*, and *who* of data flow.

| Pattern | Core Traits | Typical Use‑Cases | Trade‑offs |
|---------|-------------|-------------------|------------|
| **Data Warehouse** (RDBMS/columnar) | Structured, schema‑on‑write, ACID. | BI dashboards, OLAP queries. | Schema rigidity; higher cost for large volumes. |
| **Data Lake** (object storage + metadata catalog) | Schema‑on‑read, supports raw & semi‑structured data. | Data science, experimentation. | Potential “data swamp” if governance weak. |
| **Streaming / Lambda** | Near‑real‑time ingestion + batch layer. | Fraud detection, IoT telemetry. | Complexity of maintaining dual pipelines. |
| **Graph Store** (property graph) | Node/edge relationships; traversal queries. | Social network analysis, recommendation engines. | Limited scalability for very high cardinality graphs. |

**Edge Cases**  
- *Mixed workloads*: combining batch and streaming in a single lakehouse can blur boundaries.  
- *Governance gaps*: unstructured data in lakes may violate compliance if not cataloged.  
- *Cost spikes*: on‑demand cloud warehouses can explode with ad‑hoc queries.

**Optimize & Communicate**  
Explain that modern “lakehouse” architectures merge the best of warehouses and lakes (e.g., Delta Lake, Snowflake). Emphasize the importance of a unified metadata layer to mitigate data swamp risk. Conclude by noting that choosing a pattern hinges on latency requirements, data variety, and governance maturity—key points interviewers look for in structured problem‑solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
