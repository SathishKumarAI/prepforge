---
qid: vq_9abd25f7a2__faang__local
question: What are the three degrees of normalization and how is normalization done
  in each degree?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 441
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:23-05:00'
sources: []
---

**Clarify**  
The interviewer asks for the first three normal forms (1NF, 2NF, 3NF) used to reduce redundancy in relational schemas and how a table is transformed into each form.

---

### 1. First Normal Form (1NF)
| What it enforces | How to achieve |
|------------------|----------------|
| • Atomic attributes – no repeating groups or arrays. | • Split multi‑valued columns into separate rows.<br>• Ensure every cell holds a single value and each column has a unique name. |

### 2. Second Normal Form (2NF)
| What it enforces | How to achieve |
|------------------|----------------|
| • 1NF + no partial dependency on part of a composite primary key. | • Identify candidate keys.<br>• For any non‑key attribute that depends only on a subset of the PK, move that attribute (and its dependent rows) into a new table with the subset as its primary key.<br>• Keep the original table’s PK intact. |

### 3. Third Normal Form (3NF)
| What it enforces | How to achieve |
|------------------|----------------|
| • 2NF + no transitive dependency among non‑key attributes. | • Detect functional dependencies where a non‑key attribute determines another non‑key.<br>• Extract the dependent attribute into its own table, using the determining attribute as PK (or FK).<br>• The remaining table contains only attributes that are fully functionally dependent on the primary key. |

---

**Edge Cases & Testing**
- Composite keys with multiple columns: verify all partial dependencies removed.
- Recursive or circular dependencies: may need 4NF or 5NF.
- Ensure referential integrity via foreign keys after splits.

**Optimization & Communication**
Explain that normalization improves data integrity and query performance at the cost of join overhead. Mention that in practice, denormalization is sometimes applied for read‑heavy OLAP workloads, but the first three normal forms are foundational to sound schema design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
