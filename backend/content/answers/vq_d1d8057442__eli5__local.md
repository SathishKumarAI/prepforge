---
qid: vq_d1d8057442__eli5__local
question: What is query to fetch last day of previous month in oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 264
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:15-05:00'
sources: []
---

Think of a calendar as a giant spreadsheet that Oracle keeps in its own language.  
To pull the very last day of the month *before* today’s month, you first “snap” the current date to the start of this month, then step back one month and finally jump to that month’s final day.

```sql
SELECT TRUNC(ADD_MONTHS(SYSDATE, -1), 'MONTH') + INTERVAL '1' MONTH - INTERVAL '1' DAY
       AS last_day_prev_month
FROM dual;
```

**What each part does**

* `SYSDATE` – today’s date.  
* `ADD_MONTHS(...,-1)` – go back one month.  
* `TRUNC(…, 'MONTH')` – chop off the day, leaving the first day of that month.  
* `+ INTERVAL '1' MONTH - INTERVAL '1' DAY` – move forward one whole month and then step back one day, landing on the last day of the original month.

Run it, and Oracle hands you the exact date you asked for—no magic needed!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
