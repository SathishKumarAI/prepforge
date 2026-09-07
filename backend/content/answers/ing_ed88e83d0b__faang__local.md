---
qid: ing_ed88e83d0b__faang__local
question: 'Explain: Schema — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 515
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:52:50-05:00'
sources: []
---

**Clarify**  
We need to explain how database *schema* differs between relational (SQL) and non‑relational (NoSQL) systems, and what that implies for a typical system‑design interview. I’ll assume the interviewer wants an architectural view, not just code.

**Approach**  
1. Define “schema” in each model.  
2. Contrast enforcement, flexibility, and query patterns.  
3. Map those differences to common design decisions (e.g., normalization vs denormalization, joins vs single‑document reads).  
4. Highlight trade‑offs on consistency, scalability, and maintenance.

**Depth**  

| Feature | SQL (RDBMS) | NoSQL (Document/Key‑Value/Column) |
|---------|-------------|-----------------------------------|
| **Schema** | Fixed, enforced at table creation; every row follows same columns. | Optional; each document can have a different shape or nested fields. |
| **ACID** | Strong consistency by default; transactions across tables are easy. | Eventual consistency (e.g., DynamoDB) or tunable; multi‑document ACID is hard. |
| **Joins & Normalization** | Native joins, normalization reduces redundancy but can be costly at scale. | No joins; denormalize or use client‑side aggregation; reduces query latency. |
| **Scalability** | Vertical scaling; horizontal sharding requires careful design. | Horizontal by design (partition key, replicas). |
| **Schema evolution** | Requires migrations, downtime if large tables. | Add/remove fields without schema changes; backward compatible reads. |

In a system‑design interview, you’d pick SQL when you need complex relational integrity (e.g., banking) and NoSQL when you need high write throughput, flexible data models, or global distribution.

**Edge Cases**  
- Migrating from NoSQL to SQL: data loss if schema assumptions change.  
- Mixed workloads: using a polyglot persistence pattern.  
- Strict consistency needs in NoSQL: use multi‑region replicas and conditional writes.

**Optimize & Communicate**  
Show the interviewer you can balance *consistency* vs *availability*, explain your choice of database type, and how schema decisions affect API design and future maintenance. Summarize: “In SQL we enforce structure to guarantee integrity; in NoSQL we trade that for flexibility and horizontal scalability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
