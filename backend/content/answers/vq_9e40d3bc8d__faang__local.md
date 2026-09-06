---
qid: vq_9e40d3bc8d__faang__local
question: WHAT IS NORMALIZATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 392
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a definition of *normalization* in SQL and its purpose. I’ll confirm they want an overview of the normal forms (1NF–3NF/BCNF) and why we use them to avoid redundancy and anomalies.

**Approach**  
Explain that normalization is a systematic decomposition of tables into smaller, well‑structured ones while preserving data integrity. Mention the key goals: eliminate duplicate columns, prevent insert/update/delete anomalies, and enforce referential integrity via foreign keys.

**Depth**  
- *1NF*: atomic values; no repeating groups.  
- *2NF*: every non‑key attribute fully functionally dependent on the entire primary key (eliminate partial dependencies).  
- *3NF*: no transitive dependencies—non‑key attributes depend only on the key.  
- *BCNF* (Boyce–Codd): for every functional dependency X→Y, X must be a superkey.  
Normalization often stops at 3NF/BCNF for practical design; further forms (4NF, 5NF) handle multi‑valued and join dependencies but rarely needed in OLTP.

**Edge cases**  
- Over‑normalization can lead to excessive joins and performance hits.  
- Some denormalized tables are used deliberately for reporting or caching.  
- Circular foreign keys or many-to-many relationships require junction tables, which is still normal form compliant.

**Optimize & communicate**  
I’d close by summarizing: *Normalization is the disciplined process of structuring relational schemas to reduce redundancy and enforce data integrity, typically up to 3NF/BCNF for most applications.* I’ll emphasize trade‑offs between normalization and query performance, and how modern DBMSs can mitigate join costs with indexing or materialized views.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
