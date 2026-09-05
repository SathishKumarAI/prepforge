---
qid: vq_1420371ba0__eli5__local
question: How do you pivot data in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 252
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:29-05:00'
sources: []
---

Imagine your table is a set of colored pencils laid out by color (rows) and each pencil has marks that show how many times it was used in different months (columns). Pivoting is like flipping the whole page so that colors become columns and months become rows, making it easier to see which month had the most use for each color.

In SQL you “pivot” by telling the database:  
*Take a column (e.g., `Month`) as new headings.*  
*Turn another column’s values (e.g., `Count`) into the data that fills those headings.*  
You do this with the `PIVOT` operator or, if your system doesn’t support it, by using conditional aggregation:  

```sql
SELECT Color,
       SUM(CASE WHEN Month = 'Jan' THEN Count END) AS Jan,
       SUM(CASE WHEN Month = 'Feb' THEN Count END) AS Feb,
       …
FROM   PencilUsage
GROUP BY Color;
```

The result is a neat matrix where each row is a color and each column shows its usage per month, just like the flipped page of pencils.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
