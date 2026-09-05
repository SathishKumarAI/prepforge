---
qid: vq_6d7fe03951__star__local
question: WHAT ARE SQL STORED PROCEDURES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 326
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:12-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our reporting team was pulling monthly risk dashboards from a PostgreSQL database. Each dashboard query ran for 12 seconds on average and the load tests showed that by end‑of‑month we’d hit 30 concurrent users, causing timeouts.

**Task** – I needed to cut the report generation time to under 3 seconds while keeping the logic reusable across multiple BI tools (Tableau, PowerBI) without rewriting SQL in each client.

**Action** – I refactored the heavy aggregation logic into a single stored procedure. Inside PostgreSQL I used `CREATE OR REPLACE FUNCTION` with PL/pgSQL, added parameterized inputs for date ranges and risk categories, and leveraged `RETURN TABLE` to expose a result set. I also created indexes on the partitioned tables referenced by the procedure and used `EXPLAIN ANALYZE` to iterate until the plan hit a single sequential scan. The procedure was then called from all dashboards via a simple `SELECT * FROM sp_generate_risk_report($1,$2)`.

**Result** – Query time dropped from 12 s to 2.4 s, and concurrent users increased by 150 % before the next load test. I learned that encapsulating logic in stored procedures not only centralizes maintenance but also lets the database engine optimize execution plans more effectively than ad‑hoc queries spread across applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
