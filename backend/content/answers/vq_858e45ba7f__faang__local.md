---
qid: vq_858e45ba7f__faang__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 453
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:29-05:00'
sources: []
---

**Clarify**  
You’re asking whether a cursor declared inside a PL/SQL package can be opened from a different procedure (outside the package).  
Assumptions:  
1. The cursor is *static* (`CURSOR cur IS SELECT …;`).  
2. We want to open it in a separate stored‑procedure that is **not** part of the same package body.

**Approach**  
1. Expose the cursor via a public function or procedure inside the package.  
2. That wrapper will open the cursor and return it (as `SYS_REFCURSOR`).  
3. The caller can then fetch from the returned ref‑cursor.

**Depth**  
```plsql
-- In package body
FUNCTION get_emp_cur RETURN SYS_REFCURSOR IS
  rc SYS_REFCURSOR;
BEGIN
  OPEN rc FOR SELECT * FROM employees;   -- static cursor logic
  RETURN rc;
END;

-- External procedure
PROCEDURE use_cursor IS
  c SYS_REFCURSOR;
  rec employees%ROWTYPE;
BEGIN
  c := pkg.get_emp_cur;          -- open via wrapper
  LOOP FETCH c INTO rec; EXIT WHEN c%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(rec.employee_id);
  END LOOP;
  CLOSE c;
END;
```
*Complexity*: O(n) fetches, cursor overhead minimal.  
*Trade‑off*: You expose a public API; otherwise, the cursor is package‑private.

**Edge Cases**  
- If the cursor uses bind variables, the wrapper must accept parameters.  
- Ensure proper error handling and `CLOSE` in `EXCEPTION` block.  
- Verify that the caller has necessary privileges on underlying tables.

**Optimize & Communicate**  
Explain that while a cursor can’t be opened directly outside its package, exposing it through a public function gives controlled access and keeps encapsulation intact. Mention alternative: use a pipelined table function if you need streaming results without manual fetches. This shows clear reasoning, technical depth, and awareness of best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
