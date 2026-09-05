---
qid: vq_0ceb12afd6__eli5__local
question: How to display Date in DD-MON-YYYY table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 301
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:23-05:00'
sources: []
---

Think of a date like a book’s cover page: it shows the day, month, and year so anyone can read it at a glance. In a database, a date column stores the full value, but you can tell the computer to “print” it on the cover in any style you want.

In most SQL systems you use a *formatting function* (for example `TO_CHAR` in Oracle or PostgreSQL’s `to_char`) and give it two things:

1. **The date column** – the raw value that already knows the day, month, and year.
2. **A format string** – a recipe telling how to arrange those parts.

To get “DD-MON-YYYY” (e.g., 15-JUL-2024) you write something like:

```sql
SELECT TO_CHAR(order_date, 'DD-MON-YYYY') AS order_day
FROM orders;
```

The format string works as a template:  
- `DD` = two‑digit day,  
- `MON` = three‑letter month abbreviation,  
- `YYYY` = four‑digit year.

When the query runs, each row’s date is converted into that human‑friendly string and displayed in your result set. This way you keep the original data intact while showing it exactly how you want.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
