---
qid: vq_de1f6bd156__faang__local
question: What is a Dimension Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 386
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:44-05:00'
sources: []
---

**Clarify**  
You’re asking about a *dimension table* in the context of a star or snowflake schema—used for OLAP and reporting. A dimension table holds descriptive attributes that slice and dice facts (measures). I’ll assume we’re talking relational data warehouses, not NoSQL.

**Approach**  
Explain what it is, why it’s separate from fact tables, typical columns, normalization choices, and how it supports querying. Then touch on design trade‑offs.

**Depth**  
A dimension table contains *dimension attributes* (e.g., `CustomerName`, `City`, `ProductCategory`) that describe a business entity. It has a surrogate primary key (`DimCustomerID`) to avoid slowly changing dimensions (SCD) issues, while the natural key (`CustomerKey`) can be stored for reference. The table is usually denormalized—flattened—to reduce join cost during query time; however, snowflaking (normalizing into sub‑dimensions) trades storage for flexibility. Typical cardinality ranges from a few thousand to millions of rows.

**Edge Cases**  
*Slowly changing dimensions*: type 1 overwrites, type 2 adds a new row with start/end dates. *High cardinality attributes* can blow up fact joins; we might split them into separate dimension tables. *Missing values*: use surrogate keys like `9999` or a dedicated “unknown” row.

**Optimize & Communicate**  
Index the surrogate key (clustered) and any frequently filtered columns. Partition large dimensions by time or geography to speed scans. In an interview, I’d finish by summarizing: dimension tables provide human‑readable context for facts, are typically denormalized for performance, and use surrogate keys to handle data evolution gracefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
