---
qid: vq_8d40c2b2c1__fp__local
question: Why does invoking this function in SQL* Plus cause an error?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 513
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:35-05:00'
sources: []
---

### Why a “DSA” call in **SQL\*Plus** throws an error

When you type  

```sql
SELECT dsa.my_func(…) FROM dual;
```

in *SQL* *Plus*, the client does **not** ask Oracle to execute a PL/SQL block.  
It asks the SQL engine to evaluate a scalar expression and then format the
result for display.

The “DSA” function you are invoking is a PL/SQL routine that returns an
**associative array (PL/SQL collection)**.  
Oracle’s SQL engine cannot materialise a PL/SQL collection into a single value
that can be printed, because:

1. **Type mismatch** – the cursor fetch expects a scalar datatype
   (`VARCHAR2`, `NUMBER`, …). A collection is an opaque object that lives only
   in PL/SQL memory.
2. **No row‑by‑row expansion** – SQL would need to turn each element into its
   own row, but the call has no `TABLE()` or `CAST` wrapper telling it how to
   do that.

Consequently the server raises an error such as:

```
ORA-00932: inconsistent datatypes: expected - got -
```

or

```
ORA-06512: at line 1
```

**Non‑obvious insight:**  
The problem is not that PL/SQL cannot return a collection, but that *SQL* and
the SQL client (`SQL*Plus`) have no built‑in mechanism to display or consume
PL/SQL collections. To use the function in `SQL*Plus` you must either:

- Wrap it with `TABLE()` (if it returns a nested table) so that each element
  becomes a row, or
- Call it from an anonymous PL/SQL block and handle the collection inside
  PL/SQL.

This subtlety is why many developers inadvertently try to “SELECT” a
collection and are met with an error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
