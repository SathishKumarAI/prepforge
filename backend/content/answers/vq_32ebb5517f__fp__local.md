---
qid: vq_32ebb5517f__fp__local
question: What are the types of Calculated columns available ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 662
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:26-05:00'
sources: []
---

### Calculated‑Column Typology in Data‑Service Automation (DSA)

| Type | Core Idea | Typical Syntax | Why It Works |
|------|-----------|----------------|--------------|
| **Scalar** | A single value derived from one or more source columns (e.g., `first_name || ' ' || last_name`). | `SELECT CONCAT(first_name, ' ', last_name) AS full_name` | Keeps the *cardinality* of the row set unchanged; each output row corresponds to exactly one input row. |
| **Aggregate** | Computes a summary over a group (e.g., total sales per region). | `SELECT region, SUM(sales) AS revenue FROM orders GROUP BY region` | Relies on *commutative* and *associative* properties of the aggregation function; guarantees determinism regardless of row order. |
| **Window** | Produces a running value that depends on a sliding set of rows (e.g., moving average). | `SELECT sales, AVG(sales) OVER (ORDER BY date ROWS BETWEEN 4 PRECEDING AND CURRENT ROW) AS mov_avg` | Extends the aggregate idea to *ordered* partitions; preserves row identity while adding context. |
| **Hierarchical** | Builds a path or level number in a tree‑structured dataset (e.g., `employee_id, manager_id`). | `SELECT employee_id, LEVEL FROM employees CONNECT BY PRIOR employee_id = manager_id` | Uses the underlying graph structure; ensures each node’s depth is computed recursively but still yields one row per node. |
| **User‑Defined Function (UDF)** | Encapsulates reusable logic written in SQL or a host language. | `SELECT dbo.fn_format_currency(sales) AS revenue_formatted FROM orders` | Abstracts complexity, enabling modular optimization and caching of the function’s execution plan. |

#### Non‑obvious Insight  
The *partitioning* mechanism—whether implicit (`GROUP BY`) or explicit (`OVER (PARTITION BY …)`)—is the hidden glue that guarantees consistency across all calculated column types. When you partition a dataset, DSA treats each partition as an isolated universe: aggregates reset, windows restart, and hierarchical paths are re‑initialized. This means that the same expression can behave differently simply by adding or removing a `PARTITION BY` clause—a subtlety that often trips up analysts who assume global aggregation semantics. Understanding this partitioning principle lets you craft calculations that scale cleanly from flat tables to deeply nested hierarchies without rewriting logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
