---
qid: vq_44b0032cd2__fp__local
question: What are the SQL clauses supported in the link property sheet ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 581
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:55-05:00'
sources: []
---

In a **link property sheet** (the dialog you open when you drag a table onto a *Link* node in the Data Services Designer), the only place where SQL is written is inside the **“SQL Clause”** field.  
The designer deliberately limits this field to the clauses that can be safely composed into a single‑table statement and that will not break the *link* abstraction (which represents a simple source table or view).  

### Supported clauses
| Clause | Purpose in a link |
|--------|-------------------|
| **SELECT** | Specifies which columns appear on the output side of the link. |
| **FROM** | Declares the underlying source object (table, view, or another link). |
| **WHERE** | Filters rows before they enter the data flow. |
| **GROUP BY** | Aggregates rows when a downstream transformation expects distinct groups. |
| **HAVING** | Applies conditions to aggregated groups. |
| **ORDER BY** | Orders rows – useful for deterministic sampling or row‑numbering downstream. |

All other clauses (e.g., `JOIN`, `UNION`, sub‑queries, CTEs) are *not* allowed because a link is meant to expose a single logical table; adding multi‑table logic would break the one‑to‑one mapping between the source and the link node.

### Why this design?

1. **Simplicity & safety** – The designer can guarantee that every link behaves like a “black box” that simply projects, filters, or aggregates data.  
2. **Optimization transparency** – The underlying engine (e.g., DB2, Oracle) can push these simple clauses directly into the source query plan without needing to rewrite complex join logic.  
3. **Consistency across platforms** – All supported databases understand the same basic clause set; more advanced syntax would require platform‑specific handling.

### One non‑obvious insight

Even though `ORDER BY` is allowed, it has *no effect* on the downstream data flow unless you also use a **Row Number** or **Top N** transformation that consumes the ordering. In other words, the link’s SQL clause can specify an order, but Data Services itself does not guarantee any ordering unless explicitly requested later in the flow. This subtlety often trips users who expect the link to sort data by default.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
