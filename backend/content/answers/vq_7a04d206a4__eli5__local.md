---
qid: vq_7a04d206a4__eli5__local
question: How to select unique records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 209
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:05-05:00'
sources: []
---

Imagine a library where every book has a title, but many copies share that same title. If you want *one* copy of each title, you walk to the shelf and pick only one from every stack. In database terms, that’s “selecting unique records.” You ask the table, “Give me just one row for each distinct value in this column (or set of columns).”

In practice you write a query like:

```sql
SELECT DISTINCT column1, column2 …
FROM your_table;
```

`DISTINCT` is the library clerk who keeps only one book per title. If you need uniqueness across several columns—say, `first_name`, `last_name`, and `birth_date`—you list them all; the database will return one row for each unique combination of those values.

That’s it: use `SELECT DISTINCT` to pull out a single representative from every group of identical rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
