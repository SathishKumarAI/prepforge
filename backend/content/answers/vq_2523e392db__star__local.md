---
qid: vq_2523e392db__star__local
question: WHAT ARE THE DIFFERENT TYPES OF SQL STATEMENTS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 394
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:01-05:00'
sources: []
---

**Situation** – In a recent data‑migration project for a fintech client, I was tasked with auditing the legacy database schema and writing an automated report that would surface all potential security risks in their SQL codebase. The repository contained hundreds of stored procedures and triggers, but no documentation on how they interacted.

**Task** – My goal was to catalog every type of SQL statement used (DDL, DML, DCL, TCL) across the database, quantify their usage, and flag any that could violate compliance rules (e.g., uncontrolled `DROP` statements).

**Action** – I wrote a Python script that queried PostgreSQL’s system catalogs (`pg_catalog.pg_proc`, `pg_catalog.pg_class`) and parsed the function bodies with `sqlparse`. The script extracted every statement type:  
- **DDL** (`CREATE`, `ALTER`, `DROP`) for schema changes,  
- **DML** (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) for data manipulation,  
- **DCL** (`GRANT`, `REVOKE`) for access control, and  
- **TCL** (`COMMIT`, `ROLLBACK`, `SAVEPOINT`) for transaction management.  
I then aggregated counts per schema, highlighted suspicious patterns (e.g., `DROP TABLE` in production code), and generated a Markdown report.

**Result** – The audit uncovered that 18 % of stored procedures contained direct `DELETE` statements without a preceding `WHERE` clause, prompting an immediate refactor. Documentation now lists each statement type per module, reducing future compliance review time by 40%. I learned how to leverage system catalogs and SQL parsing libraries to automate complex schema analyses—skills directly applicable to any large‑scale database maintenance role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
