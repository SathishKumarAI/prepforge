---
qid: vq_d64400701c__faang__local
question: What is normalization? What are the types?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 420
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:51-05:00'
sources: []
---

**Clarify**

You’re asking about *database normalization*—the process of organizing data in a relational database to reduce redundancy and improve integrity.  
Assumptions:  
1. We’re dealing with SQL‑style tables.  
2. The goal is to avoid anomalies (update, insert, delete).  

**Approach**

Explain the purpose, then enumerate the normal forms (NF) and their key constraints.

**Depth**

Normalization starts with **First Normal Form (1NF)**: each column holds atomic values; rows are unique.  
- *Second NF (2NF)*: 1NF + every non‑key attribute fully depends on the whole primary key (eliminate partial dependencies).  
- *Third NF (3NF)*: 2NF + no transitive dependency of non‑key attributes on the primary key.  
- **Boyce–Codd Normal Form (BCNF)**: a stricter version of 3NF; every determinant is a candidate key.  
- **Fourth NF (4NF)**: eliminates multi‑valued dependencies (no table has two independent many‑to‑many relationships).  
- **Fifth NF (5NF/Projection‑Join Normal Form)**: ensures that all join dependencies are implied by candidate keys, useful for highly decomposed schemas.

**Edge Cases**

- Composite primary keys can cause 2NF violations.  
- Functional dependencies that aren’t obvious may hide transitive issues.  
- Over‑normalization (e.g., 5NF) can hurt performance; denormalization is sometimes necessary.

**Optimize & Communicate**

Summarize: normalization reduces redundancy, enforces integrity, but each NF has trade‑offs in query complexity. In interviews, mention that we usually normalize up to 3NF or BCNF and consider denormalization for read‑heavy workloads. This shows clear problem framing, structured reasoning, and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
