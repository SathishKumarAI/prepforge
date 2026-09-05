---
qid: vq_b67c26a197__star__local
question: Who are SCOTT, SYSTEM and SYS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 397
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:04-05:00'
sources: []
---

**Situation** – When I joined the data‑warehouse team at a financial services firm, we were migrating from an on‑prem Oracle 11g to Oracle Cloud Autonomous Database. During the cutover, the automated scripts kept throwing ORA‑00942 errors: “table SCOTT.EMP does not exist.” The DBA team was baffled because our application queries used that schema.

**Task** – I had to identify why the migration tool couldn’t see the SCOTT schema, resolve the missing object issue, and ensure all legacy reports would run against the new cloud instance without breaking existing code.

**Action** – First, I reviewed the Oracle data dictionary. I discovered that the SCOTT user was a pre‑defined sample schema that had been dropped during the initial database clean‑up, but our application still referenced it. I recreated the SCOTT schema using `CREATE USER SCOTT IDENTIFIED BY tiger; GRANT CONNECT, RESOURCE TO SCOTT;` and reloaded the EMP table from the backup dump. Next, I examined the SYSTEM and SYS accounts: SYSTEM is the privileged user that owns most of the data dictionary tables (e.g., DBA_TABLES), while SYS is the internal system account that owns the core Oracle objects (e.g., SYS.SYSDATE). Understanding their roles allowed me to grant the appropriate privileges to SCOTT without compromising security.

**Result** – After restoring SCOTT, all reports ran successfully on the cloud instance. The migration completed 2 days ahead of schedule and saved the company $45k in manual effort. I learned that knowing the purpose of Oracle’s built‑in users (SCOTT for sample data, SYSTEM for DBA tasks, SYS for internal engine objects) is essential when troubleshooting schema visibility issues during migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
