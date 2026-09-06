---
qid: vq_0ceb12afd6__faang__local
question: How to display Date in DD-MON-YYYY table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 381
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:57:21-05:00'
sources: []
---

**Clarify**  
You want a SQL query that formats the date column as `DD-MON‑YYYY` (e.g., `15-JAN‑2024`).  
Assumptions:  
1. The database is Oracle (the syntax differs in other engines).  
2. The column is of type `DATE` or `TIMESTAMP`.  
3. You only need a display format, not a stored string.

**Approach**  
Use the `TO_CHAR` function with an appropriate format mask and optionally set NLS date language to ensure month abbreviations are in English.

**Depth**  
```sql
SELECT TO_CHAR(order_date,
               'DD-MON-YYYY',
               'NLS_DATE_LANGUAGE = ENGLISH') AS order_date_fmt
FROM orders;
```
* `DD` – two‑digit day.  
* `MON` – three‑letter month abbreviation (locale‑dependent).  
* `YYYY` – four‑digit year.  

Complexity: O(1) per row; the formatting is done in the database engine, so no extra processing in application code.

**Edge cases**  
- If the session’s NLS language isn’t English, `MON` may return a different abbreviation (e.g., “jan”). Test by changing `ALTER SESSION SET NLS_DATE_LANGUAGE = 'SPANISH';`.  
- For NULL dates, the result is NULL; handle explicitly if you need a placeholder.  

**Optimize & communicate**  
If you’re formatting many columns, consider creating a view that encapsulates the format mask so callers don’t repeat it. In application code, keep the raw `DATE` type and format only when rendering to avoid locale drift. This keeps your data layer clean and lets UI layers handle presentation nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
