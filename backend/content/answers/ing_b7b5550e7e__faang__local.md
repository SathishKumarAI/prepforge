---
qid: ing_b7b5550e7e__faang__local
question: 'Explain: Step 2 - Command Parser — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 424
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:21-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a detailed walk‑through of the “Command Parser” phase that turns an incoming SQL statement into executable actions inside a database engine. I’ll assume we’re dealing with a relational DB that supports DDL/DML, transaction semantics, and a basic optimizer.

**Approach**  
1. Tokenization → Lexical analysis.  
2. Parsing → Syntax tree (AST).  
3. Semantic checks → Symbol resolution, type checking.  
4. Plan generation → Logical plan → Physical plan.  
5. Execution → Operator pipeline with concurrency control.  

**Depth**  
*Lexing*: split into identifiers, literals, operators, respecting case‑insensitivity and quoting rules.  
*Parsing*: recursive descent or Pratt parser builds an AST; detect syntax errors early.  
*Semantic*: resolve table/column names against the catalog, enforce privileges, check data types, compute implicit casts.  
*Planning*: transform the logical plan (e.g., `SELECT … WHERE …`) into a cost‑based physical plan: choose indexes, join algorithms (nested loop vs hash), apply predicates early. Store the plan in a cache keyed by query signature for reuse.  
*Execution*: operators fetch tuples from storage engines via buffer pool; maintain locks/row‑level MVCC per transaction context; pipeline operators to minimize materialization.

**Edge Cases**  
- Ambiguous column names without table qualifiers.  
- Subqueries that need correlated evaluation.  
- DDL inside a transaction (needs special isolation).  
- Huge result sets requiring streaming vs in‑memory aggregation.  

**Optimize & Communicate**  
Explain how caching parsed trees, reusing execution plans, and incremental cost estimation reduce latency. Highlight trade‑offs: full plan cache increases memory use; aggressive optimization can add parse time. Conclude by stressing the importance of modularity—each phase can be swapped (e.g., replace regex lexer with a DFA) without breaking the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
