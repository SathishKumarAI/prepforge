---
qid: vq_90aa4b48f2__eli5__local
question: How can I see what the uptime for my database is?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 223
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:18-05:00'
sources: []
---

Think of your database as a busy coffee shop that opens each morning and closes at night. “Uptime” is just the total time it has been open since you started it up. To see that, ask the shop’s manager (the database) for its **start‑time** or **last restart time**, then subtract it from the current clock.

Most databases give this with a simple command:

- In PostgreSQL: `SELECT now() - pg_postmaster_start_time();`
- In MySQL/MariaDB: `SHOW STATUS LIKE 'Uptime';` (returns seconds since start)
- In SQL Server: `SELECT DATEDIFF(second, sqlserver_start_time(), GETDATE());`

The result is the number of seconds your database has been running. Convert it to hours or days if you like—just as you’d convert a coffee shop’s opening minutes into an everyday schedule. This tells you exactly how long the system has been up and ready for work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
