---
qid: vq_4a089de965__star__local
question: What are the differences between Temporary Table and Table Variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 321
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:54-05:00'
sources: []
---

**Situation**  
While refactoring a nightly ETL job for our sales analytics platform, I noticed the nightly batch was hitting the query planner’s timeout because it kept materializing large intermediate results in tempdb.

**Task**  
I needed to reduce runtime by 30 % and ensure the job stayed within the 15‑minute SLA while still keeping the logic readable.

**Action**  
I replaced a series of ad‑hoc `SELECT … INTO #Temp` statements with table variables (`DECLARE @SalesSummary TABLE (…)`) for small lookup tables, but kept temp tables for large fact slices. I measured plan cache hit ratios and observed that the temp tables were being recompiled each run; I added explicit indexes on them to avoid scans. For the table variables, I leveraged their in‑memory nature to skip logging overhead and used `READONLY` hints where possible. I also switched from `INSERT … SELECT` into a temp table to a single bulk insert using `OPENROWSET(BULK…)` to reduce tempdb contention.

**Result**  
Runtime dropped from 18 minutes to 12 minutes, meeting the SLA with headroom. The job now uses less tempdb space (down 25 %) and I learned that table variables are ideal for small, read‑only sets, while temp tables excel when you need indexes, large data volumes, or cross‑batch persistence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
