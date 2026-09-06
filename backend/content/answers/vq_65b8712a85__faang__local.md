---
qid: vq_65b8712a85__faang__local
question: What is CHECK OPTION for a view ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 507
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:55-05:00'
sources: []
---

**Clarify**  
You’re asking about the *CHECK OPTION* clause on an Oracle view. The question is: *What does it do and when would you use it?* I’ll assume we’re dealing with a standard SQL‑92 view, not materialized.

**Approach**  
1. Define what a CHECK OPTION is in plain terms.  
2. Explain the two flavors (INHERIT vs LOCAL).  
3. Show how it enforces data integrity on `INSERT`/`UPDATE`.  
4. Mention when to enable or disable it.  

**Depth**  
- **Definition**: A CHECK OPTION forces any row that is inserted or updated through the view to satisfy a predicate that is part of the view’s definition.  
- **Syntax**:  
  ```sql
  CREATE VIEW v_emp AS
    SELECT empno, deptno FROM employees
    WHERE deptno = 10
    WITH CHECK OPTION;
  ```
- **Behavior**: If you try `INSERT INTO v_emp VALUES (1234, 20)`, Oracle rejects it because `deptno=20` violates the view’s filter.  
- **Local vs Inherit**:  
  - *LOCAL* (default): The predicate is applied only to operations that reference the view directly.  
  - *INHERIT*: The predicate also applies to nested views that refer to this view.  
- **Use‑case**: Enforce business rules at the presentation layer, e.g., a “Sales” view that should never expose non‑sales data.

**Edge Cases**  
- If the underlying table schema changes (e.g., adding a column used in the predicate), you must refresh or recreate the view.  
- Using `WITH CHECK OPTION` on a view that already contains an outer query block can lead to unexpected rejections if predicates conflict.

**Optimize & Communicate**  
Explain that while CHECK OPTION is handy for integrity, it adds overhead to every DML through the view and may mask issues in downstream applications. Recommend documenting the intent clearly (e.g., “enforces deptno=10”) so maintainers understand why inserts fail. This structured explanation shows clear problem framing, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
