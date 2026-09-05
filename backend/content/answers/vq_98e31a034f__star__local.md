---
qid: vq_98e31a034f__star__local
question: Which Oracle Procedure Builder built-in package must you use to accomplish
  this task?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 652
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:03-05:00'
sources: []
---

**Situation** – At my last role I was tasked with automating the creation of dozens of audit‑logging stored procedures across three production schemas. The manual process was error‑prone, taking 2–3 hours per procedure, and we were running out of time before the quarterly compliance deadline.

**Task** – Build a reusable PL/SQL driver that could generate, compile, and deploy a parameterised trigger‑based audit procedure for any table in under a minute, ensuring consistent naming conventions and error handling.

**Action** – I leveraged Oracle’s built‑in **DBMS_SQL** package to assemble the DDL dynamically. First, I wrote a template string with placeholders for schema, table name, and column list. Inside a loop, I used `dbms_sql.open_cursor`, `dbms_sql.parse` and `dbms_sql.execute` to inject the specific values and compile the procedure on‑the‑fly. I also wrapped the whole sequence in an exception block that logged any compilation errors to a dedicated audit log table for later review. Finally, I packaged the logic into a single reusable function called `create_audit_proc`.

**Result** – The automation cut down creation time from 2 hours per procedure to less than 30 seconds each. Across 45 tables we saved roughly **12 man‑hours** and eliminated the risk of human error in naming or privilege assignment. I learned that mastering DBMS_SQL for dynamic DDL, coupled with a disciplined logging strategy, can turn a tedious manual task into a robust, repeatable engineering solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
