---
qid: vq_c8076813eb__fp__local
question: What are the types of UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 465
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:52-05:00'
sources: []
---

**Why UDFs exist**

Data systems expose a declarative language (SQL, Spark‑SQL, etc.) that can only express *known* operations. When you need something custom—say a complex string transformation or a domain‑specific calculation—you must inject code that the engine will call for each row or group of rows. That injection point is a **User‑Defined Function** (UDF). The UDF must fit into the optimizer’s execution plan: it can be applied element‑wise, reduced across partitions, or produce new rows.

---

### 1. Scalar (or *single‑row*) UDF  
*Input:* a fixed set of columns.  
*Output:* one value per row.  
Used for transformations that preserve cardinality—e.g., hashing a key, formatting a date.  

### 2. Aggregate UDF  
*Input:* a group of rows (often via `GROUP BY`).  
*Output:* one summary value per group.  
Essential when the logic cannot be expressed with built‑in aggregates—like computing a custom weighted mean or a median.

### 3. Table‑Valued UDF (TVF)  
- **Inline TVF**: defined as a single SELECT statement; the optimizer can inline it, treating it like a view.  
- **Multi‑statement TVF**: contains procedural code and returns a result set.  

TVFs let you encapsulate complex joins or recursive logic and expose them as “tables” that can be queried normally.

---

#### Non‑obvious insight  
Because UDFs bypass the optimizer’s cost model, they often become *bottlenecks*. The deeper principle is **information locality**: every row that hits a UDF must travel from the distributed executor to the user code and back. Minimizing calls (e.g., by vectorizing or using Pandas UDFs in Spark) preserves parallelism and keeps data hot, turning an otherwise linear scan into a distributed operation again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
