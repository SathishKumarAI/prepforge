---
qid: vq_b4a98eb044__fp__local
question: Which command can you issue to recompile both procedures?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 348
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:52:30-05:00'
sources: []
---

**Command**

```sql
BEGIN
  DBMS_UTILITY.COMPILE_SCHEMA('YOUR_SCHEMA');
END;
/
```

**Why it works**

`DBMS_UTILITY.COMPILE_SCHEMA` walks the data dictionary, finds every PL/SQL object (procedures, functions, packages, triggers) that belongs to the specified schema and issues an implicit `ALTER … COMPILE`.  
Thus both procedures are recompiled in a single statement, regardless of whether they depend on each other or on external objects.

**Underlying principle**

The command exploits *lazy recompilation* in Oracle: a PL/SQL object is re‑parsed only when it is first executed after being invalidated. By forcing an explicit compile for the whole schema we pre‑emptively resolve any dependency issues, guaranteeing that subsequent calls run without runtime errors.

**Non‑obvious insight**

Recompiling a *single* procedure (`ALTER PROCEDURE … COMPILE`) may leave other dependent objects still invalid if they reference outdated signatures. `COMPILE_SCHEMA` guarantees that every object in the schema is consistent with its dependencies, eliminating “hidden” invalidations that can surface only under specific execution paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
