---
qid: vq_8d40c2b2c1__faang__local
question: Why does invoking this function in SQL* Plus cause an error?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 519
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks why a particular PL/SQL routine, when called from *SQL\*Plus*, throws an exception. We assume: (1) the function is compiled without errors; (2) it contains `RAISE_APPLICATION_ERROR` or an unhandled exception; (3) the caller uses `SELECT … FROM DUAL`.  
We need to identify the root cause—likely a runtime error, not a compile‑time one.

**Approach**  
1. Verify the function’s signature and that it returns a value.  
2. Examine any `RAISE_APPLICATION_ERROR` or implicit exceptions (e.g., division by zero).  
3. Check how SQL\*Plus invokes PL/SQL: via `SELECT func_name FROM dual`.  
4. Consider session settings (`SET SERVEROUTPUT ON`) and the presence of an `EXCEPTION` block that swallows errors.

**Depth**  
A common pitfall is calling a function that raises an exception but not handling it in SQL\*Plus. For example:

```plsql
CREATE OR REPLACE FUNCTION risky_func RETURN NUMBER IS
BEGIN
  IF some_condition THEN
    RAISE_APPLICATION_ERROR(-20001, 'Problem');
  END IF;
  RETURN 42;
END;
```

When invoked as `SELECT risky_func FROM dual;`, SQL\*Plus propagates the Oracle error and aborts the statement. If the function is called within a larger PL/SQL block that has no exception handler, the session ends with the error code.

**Edge Cases**  
- The function returns `NULL` but is used in an arithmetic expression—causes NULL‑related errors.  
- `SET DEFINE OFF` may interfere if the function contains ampersands.  
- Session variables (`NLS_DATE_FORMAT`) can cause conversion failures.

**Optimize & Communicate**  
Wrap the call in a PL/SQL block with an explicit exception handler:

```plsql
BEGIN
  DBMS_OUTPUT.PUT_LINE(risky_func);
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
```

This keeps SQL\*Plus from terminating and gives a clear message. Always test the function in isolation, then within SQL\*Plus, checking `SQLCODE`/`SQLERRM`. This structured reasoning demonstrates problem‑solving, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
