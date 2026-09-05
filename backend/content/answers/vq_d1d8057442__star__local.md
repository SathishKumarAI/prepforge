---
qid: vq_d1d8057442__star__local
question: What is query to fetch last day of previous month in oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 336
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:06-05:00'
sources: []
---

**Situation:**  
At a retail analytics firm we were building a nightly data mart that fed into the BI layer. The sales team needed a daily snapshot of the previous month's totals for their dashboards, but our current ETL logic was pulling the wrong date range—sometimes it included days from the current month.

**Task:**  
I had to devise an Oracle query that reliably returned the exact last day of the preceding month so the downstream aggregation could use a consistent boundary across all dates and avoid manual corrections each run.

**Action:**  
I used `TRUNC` with the `'MONTH'` format mask to drop to the first day of the current month, then subtracted one day:  

```sql
SELECT TRUNC(SYSDATE, 'MONTH') - 1 AS last_day_prev_month
FROM dual;
```

For robustness in our data warehouse I wrapped it into a function that accepts any date and returns the same value, allowing us to test with historical dates. I also added comments and unit tests in our nightly job script.

**Result:**  
The new query fixed the off‑by‑month bug across all dashboards; sales reports now show correct totals for every month. Since deployment we’ve seen a 15% reduction in support tickets related to date errors, and the function is now reused in several other marts. I learned how a single well‑placed `TRUNC` can eliminate a recurring pain point and the value of encapsulating logic in reusable components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
