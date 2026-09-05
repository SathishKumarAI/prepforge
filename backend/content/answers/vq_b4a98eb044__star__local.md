---
qid: vq_b4a98eb044__star__local
question: Which command can you issue to recompile both procedures?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 435
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:41-05:00'
sources: []
---

**Situation** – At my last job I was maintaining a legacy payroll system that had two critical stored procedures, `P_PAYROLL_RUN` and `P_TAX_CALC`. After a recent schema change the application started throwing “PL/SQL: compilation error” on every payroll run. The developers needed an immediate fix so they could keep running monthly batches.

**Task** – I had to recompile both procedures in one go, verify that the errors were gone, and ensure no new warnings appeared before the next scheduled batch.

**Action** – Using SQL*Plus I logged into the schema and issued two compile statements back‑to‑back:

```sql
ALTER PROCEDURE P_PAYROLL_RUN COMPILE;
ALTER PROCEDURE P_TAX_CALC   COMPILE;
```

After each `COMPILE` I queried `USER_ERRORS` to confirm zero errors. Because both procedures were in the same schema, there was no need for a loop or dynamic SQL; two simple statements were enough. I also added a quick PL/SQL block to test a sample call:

```sql
BEGIN P_PAYROLL_RUN(:emp_id); END;
```

**Result** – Both procedures compiled cleanly (0 errors, 2 warnings). The next payroll batch ran successfully within the scheduled window, saving the team a potential 4‑hour outage. I learned that even in complex systems, a concise `ALTER … COMPILE` command can be a lifesaver when used correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
