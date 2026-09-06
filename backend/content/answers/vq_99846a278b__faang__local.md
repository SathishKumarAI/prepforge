---
qid: vq_99846a278b__faang__local
question: WHAT IS THE DIFFERENCE BETWEEN A PRIMARY KEY AND A UNIQUE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 512
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:10-05:00'
sources: []
---

**Clarify**  
You’re asking about relational‑database constraints: *primary key* vs *unique key*. I’ll assume we’re dealing with a single table, standard SQL semantics, and that the database supports both constraints (e.g., MySQL, PostgreSQL).

**Approach**  
1. List what each constraint enforces.  
2. Highlight their differences in enforcement, indexing, nullability, and role in relationships.  
3. Touch on practical implications for schema design.

**Depth**  

| Feature | Primary Key | Unique Key |
|---------|-------------|------------|
| **Uniqueness** | Guarantees one unique row per table. | Guarantees uniqueness but can be multiple keys per table. |
| **Nullability** | Implicitly `NOT NULL`. | Allows `NULL` values (unless explicitly constrained). |
| **Indexing** | Creates a single clustered index (in many engines) and often the physical ordering of rows. | Creates separate non‑clustered indexes; no clustering guarantee. |
| **Relationship usage** | Used as foreign‑key reference in other tables. | Can be referenced, but primary key is conventionally used for FK. |
| **Multiplicity** | One per table (except composite). | Multiple allowed. |
| **Default name** | `PRIMARY` (implicit). | User‑defined. |

*Technical nuance*: In MySQL’s InnoDB, the primary key becomes the clustered index; unique keys are separate secondary indexes. PostgreSQL treats all B‑tree indexes the same but enforces `NOT NULL` for PK.

**Edge Cases**  
- Composite keys: both can be composite, but you still have only one PK per table.  
- Nullable columns: a unique key on a nullable column can store many `NULL`s (allowed by SQL).  
- Foreign‑key constraints: referencing a unique key is valid, but some ORMs prefer PKs.

**Optimize & Communicate**  
When designing schemas, pick a primary key that uniquely identifies the entity and drives row storage. Use additional unique keys for business rules (e.g., email addresses) where nulls or multiple such columns are needed. Clarify constraints to interviewers: “The PK is our anchor; the unique key enforces business‑level uniqueness without being the anchor.” This shows you understand both enforcement mechanics and design trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
