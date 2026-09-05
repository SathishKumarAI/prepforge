---
qid: vq_a2c1c115c9__eli5__local
question: How to fetch alternate records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 241
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:45-05:00'
sources: []
---

Imagine you’re in a long line of people holding colored hats, and you only want every other hat—first, third, fifth, and so on. In a database table, each row is like a person in that line. To grab the alternate rows, we give each row a “row number” (like counting 1, 2, 3…) and then pick only those whose number is odd.

In SQL you can do it with a window function:

```sql
SELECT *
FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY id) AS rn   -- give every row a count
    FROM your_table
) t
WHERE MOD(rn, 2) = 1;   -- keep rows where the number is odd
```

Here `ROW_NUMBER()` creates the counter, and `MOD(rn, 2) = 1` keeps only the alternate (odd‑numbered) records. It’s like walking down that hat line and stepping over every other person—simple, clear, and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
