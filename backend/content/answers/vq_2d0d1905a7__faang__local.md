---
qid: vq_2d0d1905a7__faang__local
question: What are the nine different types of Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 547
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:05-05:00'
sources: []
---

**Clarify**  
*Problem:* Enumerate the nine canonical index types used in relational data‑engineering.  
*Assumptions:* We’re speaking of SQL‑based systems (PostgreSQL, Oracle, MySQL, etc.) and that “index” means a database structure for speeding up lookups.

---

### 1️⃣ Approach
- List each type with its primary use case.
- Briefly note the underlying data structure.
- Mention any trade‑offs (space vs. speed).

---

## Depth

| # | Index Type | Data Structure | Typical Use |
|---|------------|----------------|-------------|
| **1** | *B‑Tree* | Balanced tree | General‑purpose, range queries, equality/inequality lookups. |
| **2** | *Hash* | Hash table | Fast exact‑match lookups (rarely used for range scans). |
| **3** | *Bitmap* | Bit vectors per distinct value | Low cardinality columns; set operations and aggregations. |
| **4** | *GiST* (Generalized Search Tree) | User‑defined tree nodes | Geospatial, full‑text, interval data. |
| **5** | *SP-GiST* (Space‑Partitioned GiST) | Space‑partitioning trees | Sparse multidimensional data. |
| **6** | *GIN* (Generalized Inverted Index) | Inverted lists | Full‑text search and array containment. |
| **7** | *BRIN* (Block Range INdex) | Summaries of block ranges | Very large tables with naturally ordered columns. |
| **8** | *Clustered* | Physical ordering on disk | Improves I/O for range scans; only one per table in many engines. |
| **9** | *Unique* (enforced uniqueness constraint) | Often a B‑Tree under the hood | Guarantees distinct values, can be implemented with any index type. |

---

### Edge Cases
- **Hash indexes** degrade on updates; not suitable for range scans.
- **Bitmap** indexes explode in size when cardinality is high.
- **Clustered** indexes conflict with other clustering strategies.

---

### Optimize & Communicate
Explain that choosing an index depends on query patterns, data distribution, and storage constraints. Emphasize testing with realistic workloads to validate the trade‑offs before deployment. This structured reasoning showcases problem‑solving clarity and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
