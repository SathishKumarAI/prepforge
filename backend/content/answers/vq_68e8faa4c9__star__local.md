---
qid: vq_68e8faa4c9__star__local
question: WHAT IS A COMMON TABLE EXPRESSION (CTE)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 331
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:34-05:00'
sources: []
---

**Situation** – In a recent payroll analytics project for a mid‑size fintech client, the SQL query that generated employee bonus reports was taking over ten minutes to run because it had to aggregate and join data across three huge tables (employees, timecards, and salary history). The reporting team needed near real‑time dashboards for senior management.

**Task** – My job was to refactor the query so that it could compute the same aggregated metrics in under two minutes while keeping the code maintainable and understandable for other developers.

**Action** – I introduced a Common Table Expression (CTE) to break the logic into three clear, reusable sub‑queries:  
1. `cte_timecards` – pre‑filtered timecard rows by fiscal year and calculated total hours per employee;  
2. `cte_salary` – pulled the latest salary for each employee using window functions;  
3. `cte_bonus_calc` – joined the two CTEs, applied bonus rules, and produced a single result set.  
By materializing intermediate results with the CTE, I avoided repeated scans of the large tables and leveraged index hints on the key columns.

**Result** – The refactored query cut runtime from 10 min to 1.8 min—a 82% improvement—while producing identical bonus totals. It also made the logic easier for teammates to review and extend, teaching me that CTEs are powerful for both performance tuning and code clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
