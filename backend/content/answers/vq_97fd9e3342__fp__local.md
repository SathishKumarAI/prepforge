---
qid: vq_97fd9e3342__fp__local
question: What is the difference between Stored Procedure and UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 480
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:47:27-05:00'
sources: []
---

**Stored Procedures vs. User‑Defined Functions (UDFs)**  
At their core, both are reusable code blocks that live in a database, but they solve different optimization problems.

| Aspect | Stored Procedure | UDF |
|--------|------------------|-----|
| **Purpose** | Encapsulates *procedural logic*—transactions, branching, loops—to perform side‑effects (INSERT/UPDATE/DELETE). | Encapsulates *pure expressions* that return a value for each row; no state changes. |
| **Execution model** | Called imperatively: `EXEC sp_xxx`; can run multiple statements and control flow. | Inlined or scalar; treated like a built‑in function by the query optimizer, enabling vectorized execution. |
| **Performance** | Optimizer treats it as an opaque unit; must fetch plan each time (unless cached). Can benefit from parameter sniffing but may cause suboptimal plans if parameters vary widely. | Often inlined into the calling query; optimizer can merge it with surrounding predicates, enabling predicate pushdown and better cost estimation. |
| **Side‑effects** | Allowed: DML, schema changes, transaction control. | Disallowed (except for deterministic side‑effect‑free UDFs); must be *deterministic* and *immutable*. |
| **Use case** | Complex workflows, batch jobs, or procedures that modify state. | Computations per row, derived columns, reusable logic in SELECT/WHERE clauses. |

**Non‑obvious insight:**  
A scalar UDF can become a *performance bottleneck* because the engine evaluates it row‑by‑row outside the main query plan (unless it's inlined). In contrast, a stored procedure’s procedural code is executed once per call, so even if it contains many DML statements, the overhead of context switches is amortized. Thus, for heavy row‑level logic, favor UDFs *only* when you need to expose the result as part of a query; otherwise, encapsulate the same logic in a stored procedure and materialize results into a temporary table before querying. This subtle distinction—row‑by‑row evaluation vs. single call execution—often determines whether a solution scales or becomes a choke point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
