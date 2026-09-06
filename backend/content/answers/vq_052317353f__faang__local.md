---
qid: vq_052317353f__faang__local
question: What is a Star Schema?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:41-05:00'
sources: []
---

**Clarify**  
You’re asking for the definition of a *star schema* and why it matters in data warehousing. I’ll assume you want an overview that covers its components, purpose, and typical use‑cases.

**Approach**  
1. Define the concept.  
2. List core entities (fact & dimension tables).  
3. Explain relationships & cardinality.  
4. Highlight benefits & trade‑offs.  
5. Mention common pitfalls.

**Depth**  
A star schema is a dimensional modeling technique where a central *fact* table—containing measurable, transactional data—is surrounded by one or more *dimension* tables that describe context (e.g., customer, product). The fact table’s primary key is a composite of the dimension keys. This “star” shape yields highly denormalized tables: dimensions are flat, often with pre‑aggregated attributes, and facts store only foreign keys plus numeric measures.

**Benefits**  
- **Query simplicity**: joins are predictable; analysts can write SQL without deep knowledge of normalization.  
- **Performance**: indexes on dimension keys and materialized views accelerate OLAP workloads.  
- **Maintenance**: changes to dimensions rarely affect the fact table.

**Edge Cases**  
- *Highly granular facts* may explode in size; consider a snowflake schema if many attributes need further normalization.  
- *Slow‑changing dimensions*: Type 2 SCDs create history rows, inflating dimension tables.  
- *Foreign key violations*: missing or orphaned keys break analytical consistency.

**Optimize & Communicate**  
When presenting this to stakeholders, emphasize that a star schema trades some storage for query speed and developer productivity—ideal for BI dashboards and reporting. Highlight that proper indexing (bitmap on low‑cardinality dims, B‑tree on high‑cardinality) and partitioning the fact table by time further boost performance. This structured answer demonstrates clear communication, depth of knowledge, and awareness of trade‑offs—all key signals in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
