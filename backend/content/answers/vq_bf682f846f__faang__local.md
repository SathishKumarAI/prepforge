---
qid: vq_bf682f846f__faang__local
question: What is the functionality of Query Processor in Apache Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 523
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:12-05:00'
sources: []
---

**Clarify**  
> *What does a “query processor” do inside Hive?*  
I’ll assume we’re talking about the component that receives an HQL statement and turns it into executable MapReduce/Tez/Spark jobs, not the underlying Metastore or execution engine.

**Approach**  
1. Parse HQL → AST.  
2. Semantic analysis (type checking, table/column resolution).  
3. Optimizer: rule‑based + cost‑based transformations.  
4. Physical plan generation → DAG of operators.  
5. Code generation / job submission to YARN.

**Depth**  

| Stage | What happens |
|-------|--------------|
| **Parser** | Uses ANTLR; builds an abstract syntax tree (AST). |
| **Semantic Analyzer** | Resolves identifiers, checks data types, validates permissions against the Metastore schema. |
| **Optimizer** | *Rule‑based* rewrites (e.g., push‑down predicates, join reordering) followed by a *cost‑based* optimizer that estimates map/reduce tasks, shuffle size, and selects execution engine (MR/Tez/Spark). |
| **Logical Plan** | Intermediate representation of operations (SELECT, JOIN, GROUP BY, etc.). |
| **Physical Planner** | Maps logical ops to concrete operators (Map, Reduce, SortMergeJoin) and builds a DAG. |
| **Code Generator / Job Launcher** | Generates Java/Tez/Spark code, packages it, and submits to YARN. |

**Edge Cases**  
- Unsupported functions → compilation error.  
- Ambiguous column names → semantic error.  
- Extremely large joins without partitioning → optimizer may still generate a shuffle join, leading to OOM.  
- Missing statistics → cost estimates are rough.

**Optimize & Communicate**  

1. **Cache Statistics** – keep up‑to‑date table stats; reduces bad plans.  
2. **Predicate Pushdown** – early filtering cuts data shuffled.  
3. **Vectorized Execution** – improves CPU locality on Tez/Spark.  
4. **Explain Plans** – always use `EXPLAIN` to surface the DAG and debug mis‑optimizations.

In sum, Hive’s query processor is a compiler that translates HQL into an optimized execution plan, leveraging parsing, semantic checks, rule & cost‑based optimization, and finally generating jobs for YARN.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
