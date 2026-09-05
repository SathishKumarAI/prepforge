---
qid: vq_8d40c2b2c1__star__local
question: Why does invoking this function in SQL* Plus cause an error?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:02-05:00'
sources: []
---

**Situation** – I was working on a legacy payroll system upgrade at a mid‑size insurance firm. The DBA had migrated the database to Oracle 12c but left a custom PL/SQL function `GET_EMP_SALARY` in a package that still referenced an old schema object (`SAL_TABLE`). When we ran `SELECT GET_EMP_SALARY(123) FROM dual;` in SQL*Plus, it returned *ORA‑00942: table or view does not exist*.

**Task** – I needed to determine why the function failed and restore its usability without breaking other dependent reports that call it via stored procedures.

**Action** – First, I examined the function’s source with `SHOW CREATE FUNCTION GET_EMP_SALARY;` and saw a hard‑coded table name. I checked the current schema for synonyms and found none pointing to the new `PAYROLL.SAL_TABLE`. Using `DBA_DEPENDENCIES`, I confirmed that the function had stale references. I created a synonym `SAL_TABLE FOR PAYROLL.SAL_TABLE;` in the user's schema, then recompiled the package with `ALTER PACKAGE <pkg> COMPILE BODY;`. Finally, I tested the function again and added an exception handler to log any future missing object errors.

**Result** – The function executed successfully, returning accurate salaries for 1,200 employees. All dependent reports ran without change, and we avoided a costly full package rebuild. This experience reinforced the importance of maintaining synonyms during schema migrations and adding robust error handling in PL/SQL functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
