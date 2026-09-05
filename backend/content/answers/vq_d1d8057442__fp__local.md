---
qid: vq_d1d8057442__fp__local
question: What is query to fetch last day of previous month in oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 442
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:57:39-05:00'
sources: []
---

**Why we need a “last‑day of previous month” value**

In data warehousing you often slice facts by calendar periods.  
When a job runs on the first day of a month it must reference *the last
complete month* (e.g., 31 Oct when running 1 Nov).  
Oracle’s date arithmetic is based on the **calendar model**: adding or
subtracting months keeps the same day number, but truncating to a period
normalises the time component.  

**Derivation**

1. `TRUNC(SYSDATE,'MM')` → first day of *current* month at midnight.  
2. Subtract one month with `ADD_MONTHS(...,-1)` → first day of *previous*
   month.  
3. Add 31 days and truncate to month (`TRUNC(...,'MONTH')`) – the
   earliest day that is still in the target month; then subtract one day
   to get the last calendar day.

This works because `ADD_MONTHS` preserves the day number, and
`TRUNC(...,'MM')` guarantees we’re at a clean boundary before rolling back.

**Query**

```sql
SELECT TRUNC( ADD_MONTHS(TRUNC(SYSDATE,'MM'),-1) + 31, 'MONTH' ) - 1 AS last_day_prev_month
FROM dual;
```

**Non‑obvious insight:**  
Using `+31` instead of a hard‑coded `+30` or `+32` makes the expression
robust to months with 28–31 days. The `TRUNC(...,'MONTH')` after adding
31 guarantees we land on the first day of the *next* month, no matter
how many days the previous month had; subtracting one gives the exact last
day. This pattern is reusable for any “last day of a prior period”
requirement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
