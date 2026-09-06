---
qid: vq_1e9464049f__faang__local
question: How does one get the value of a sequence into a PL/SQL variable?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 422
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:43-05:00'
sources: []
---

**Clarify**  
You have a SQL *sequence* (e.g., `emp_seq`) and you want its next value in a PL/SQL block or procedure.  
Assumptions: the sequence exists, no special caching rules, and you need the value for assignment or further logic.

**Approach**  
1. Call the sequence via `SELECT seq_name.NEXTVAL INTO :var FROM dual;`  
2. Use that variable in your PL/SQL code (e.g., insert, update).  

**Depth**  
```plsql
DECLARE
  l_emp_id emp_seq%TYPE;
BEGIN
  SELECT emp_seq.NEXTVAL
    INTO l_emp_id
    FROM dual;

  INSERT INTO employees (emp_id, name)
  VALUES (l_emp_id, 'Alice');
END;
```
* `NEXTVAL` guarantees a unique number.  
* The variable type can be inferred with `%TYPE` to stay in sync with the sequence’s data type.  
* If you need the value without fetching it into a PL/SQL block, use `INSERT … VALUES (emp_seq.NEXTVAL, …)` directly.

**Edge Cases**  
* **Concurrent inserts** – `NEXTVAL` is thread‑safe; each session gets a distinct number.  
* **Sequence exhaustion** – if max value reached, Oracle throws an error (`ORA-02289`).  
* **Caching** – cached values may lead to gaps but not duplicates.

**Optimize & Communicate**  
For bulk inserts, avoid fetching `NEXTVAL` per row; instead use `INSERT ALL … SELECT emp_seq.NEXTVAL FROM dual CONNECT BY LEVEL = :count`.  
Explain that this reduces context switches and is more efficient.  

By showing the exact PL/SQL syntax, handling edge cases, and hinting at performance tricks, you demonstrate structured problem solving, depth of knowledge, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
