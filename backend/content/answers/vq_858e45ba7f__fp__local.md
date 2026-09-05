---
qid: vq_858e45ba7f__fp__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 534
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:19-05:00'
sources: []
---

**Short answer:** No – you cannot *directly* open a cursor that lives inside a package from another procedure unless the cursor is exposed in the package’s public interface (spec).  

---

### Why this restriction exists  
1. **Scope & encapsulation** – A cursor declared in a package body is private to that body. PL/SQL enforces lexical scoping: only code within the same body can reference it, just like a private variable.  
2. **Lifetime management** – Cursors have state (open/closed) and are tied to the session’s cursor stack. Allowing arbitrary cross‑procedure access would break this invariant; the caller would not know when the cursor was closed or how many open cursors existed.  
3. **Optimization & reuse** – The optimizer can cache execution plans for a cursor only if it knows where it comes from. Exposing private cursors would force the engine to treat them as ad‑hoc, losing potential performance gains.

### What works
* Declare the cursor in the **package spec** (public) and open it from any procedure that sees the package.
* Or, keep the cursor private but expose a *wrapper* procedure or a `REF CURSOR` function:
  ```plsql
  CREATE OR REPLACE PACKAGE pkg AS
    FUNCTION get_emp_cur RETURN SYS_REFCURSOR;
  END;

  CREATE OR REPLACE PACKAGE BODY pkg AS
    CURSOR emp_cur IS SELECT * FROM employees;
    FUNCTION get_emp_cur RETURN SYS_REFCURSOR IS
      rc SYS_REFCURSOR;
    BEGIN
      OPEN rc FOR emp_cur;
      RETURN rc;
    END;
  END;
  ```

### Non‑obvious insight  
Even though the cursor is “in” a package, its *visibility* is not about where it physically resides but about how PL/SQL’s name resolution rules treat identifiers. The package body is a distinct scope; only the spec forms part of the public namespace. Thus, a cursor can be in a package, yet still be inaccessible from other procedures unless deliberately exported.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
