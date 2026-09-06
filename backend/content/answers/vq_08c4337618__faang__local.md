---
qid: vq_08c4337618__faang__local
question: Can one use dynamic SQL within PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 445
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:32-05:00'
sources: []
---

**Clarify**  
You’re asking whether a PL/SQL block can build and execute an SQL statement at runtime – i.e., “dynamic SQL.” Confirm the context: do you need to change table names, column lists, or predicates on the fly? Are you targeting Oracle 11g+ where `EXECUTE IMMEDIATE` is available?

**Approach**  
1. Use **static SQL** when the query structure never changes – it compiles once and is faster.  
2. When any part of the statement (table name, columns, predicates) must be decided at runtime, switch to **dynamic SQL** via `EXECUTE IMMEDIATE` or `DBMS_SQL`.  

**Depth**  
```plsql
DECLARE
  v_sql   VARCHAR2(4000);
  v_cnt   NUMBER;
BEGIN
  v_sql := 'SELECT COUNT(*) FROM ' || p_table_name ||
           ' WHERE ' || p_condition;
  EXECUTE IMMEDIATE v_sql INTO v_cnt;  -- fetch result
END;
```
* `EXECUTE IMMEDIATE` is simple and works for single statements.  
* For loops or multiple bind variables, use `DBMS_SQL` (open, parse, bind, execute).  

Complexity: O(1) compile time for static SQL vs O(n) parsing at runtime for dynamic. Security risk: SQL injection – always validate/whitelist inputs.

**Edge Cases**  
- Too large statements (>4000 chars) → use `DBMS_SQL` or CLOBs.  
- Bind variables vs string concatenation; misuse leads to performance hits.  
- Privilege checks happen at execution time, so the caller must have rights on the dynamic target objects.

**Optimize & Communicate**  
Prefer static SQL when possible for readability and performance. Use dynamic only for genuinely variable parts, always sanitize inputs and consider `DBMS_SQL` for complex scenarios. Explain to interviewers that Oracle’s dynamic SQL is a powerful tool but should be applied judiciously to avoid injection vulnerabilities and runtime overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
