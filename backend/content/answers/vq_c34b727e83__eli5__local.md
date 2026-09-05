---
qid: vq_c34b727e83__eli5__local
question: Query to find 2nd largest number in the table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 221
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:41-05:00'
sources: []
---

Imagine a classroom where every student writes their height on a poster board (that’s your table). You want to know who is the **second tallest**—not the tallest, but the next one up.

In SQL we call the “tallest” value the **maximum** (`MAX`). To get the second tallest we can use two simple steps:

1. Find the tallest height with `SELECT MAX(height) FROM table`.  
2. Ask for the largest height that is still smaller than that maximum:  

```sql
SELECT MAX(height)
FROM   table
WHERE  height < (SELECT MAX(height) FROM table);
```

Here, *MAX* means “the biggest value”, and *height* is just a column name. The sub‑query (`SELECT MAX(height)...`) gives the tallest height; the outer query then looks for the greatest height that’s still less than that, which is exactly the second largest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
