---
qid: vq_f6d8e5129d__faang__local
question: Mention what are the steps of Hive in query processor?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 505
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:49-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks for *the phases that Hive’s query processor follows when executing a SQL‑like statement*.  
Assumptions to confirm:  
- We’re talking about the classic MapReduce execution engine (not Tez or Spark).  
- The input is a single logical `SELECT`/`INSERT` query, not a multi‑statement batch.  

**2️⃣ Approach**  
Outline the lifecycle:  
1. **Parsing & Validation** → Lexical analysis → Syntax tree → Semantic checks.  
2. **Logical Plan Creation** → Logical operators (Project, Filter, Join, etc.).  
3. **Optimization** → Cost‑based rule‑engine; predicate pushdown, join reordering.  
4. **Physical Plan Generation** → MapReduce job graph (MR jobs + stages).  
5. **Execution & Result Collection** → Launch MR jobs → Aggregate and write output.

**3️⃣ Depth**  

| Step | What happens | Key details |
|------|--------------|-------------|
| Parse | HiveQL is parsed by ANTLR → AST | Uses `HiveParser` |
| Semantic | Resolve table/column names, type‑check, permission checks | `SemanticAnalyzer` |
| Logical | Build a tree of logical operators | e.g., `LogicalProject`, `LogicalFilter` |
| Optimizer | Rule‑based + cost‑based (cost model uses HDFS stats) | Push predicates to Map stage, convert Cartesian joins |
| Physical | Translate to MR jobs; each operator becomes a job or task | `MapReduceJobPlan` → `MRTask` |
| Execution | YARN launches mappers/reducers → data shuffles | Final result written to HDFS/Hive warehouse |

**4️⃣ Edge Cases**  
- **Complex UDFs**: may force separate MR stages.  
- **Skewed joins**: optimizer can’t always detect; leads to OOM in reducers.  
- **Dynamic partitioning**: requires extra job to materialize partitions.  

**5️⃣ Optimize & Communicate**  
Explain that newer engines (Tez, Spark) replace the MR step with DAG execution for lower latency. Emphasize how each phase is modular and can be swapped (e.g., using Hive on Presto). Conclude by noting that understanding this pipeline is crucial for tuning job performance and debugging failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
