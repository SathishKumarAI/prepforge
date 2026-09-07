---
qid: vq_d1d8057442__faang__local
question: What is query to fetch last day of previous month in oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 407
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:35:18-05:00'
sources: []
---

**Clarify**

> *“Fetch the last day of the previous month in Oracle.”*  
Assumptions:  
1. We need a single‑row result for the current session’s date (`SYSDATE`).  
2. The output should be a `DATE` (or formatted string) representing midnight on that day.

**Approach**

Use Oracle’s date arithmetic and the built‑in `TRUNC`/`LAST_DAY`.  
1. Truncate `SYSDATE` to the first of its month → start of current month.  
2. Subtract one day → last day of previous month.

**Depth**

```sql
SELECT LAST_DAY(TRUNC(SYSDATE, 'MM') - 1) AS prev_month_last_day
FROM dual;
```

*Explanation:*  
- `TRUNC(date, 'MM')` gives the first day of the current month.  
- Subtracting `1` moves to the last day of the prior month.  
- `LAST_DAY` is redundant here but keeps the intent explicit; it can be omitted.

If you prefer a string:

```sql
SELECT TO_CHAR(TRUNC(SYSDATE, 'MM') - 1, 'YYYY-MM-DD') AS prev_month_last_day_str
FROM dual;
```

**Edge Cases**

- Works across month boundaries (e.g., Jan → Dec of previous year).  
- Handles leap years automatically.  
- No timezone concerns since `SYSDATE` is session‑based.

**Optimize & Communicate**

The query runs in O(1) time, no table scans, and uses only built‑in functions—ideal for production reporting or ETL pipelines. Explain the logic to stakeholders: “We truncate to the month’s start then step back one day; Oracle’s date math handles all edge cases.” This clear reasoning aligns with FAANG expectations of concise, correct solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
