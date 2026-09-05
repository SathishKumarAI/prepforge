---
qid: vq_90d76ef8f7__eli5__local
question: HOW DO YOU FIND THE SECOND-HIGHEST SALARY IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 242
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:19-05:00'
sources: []
---

Imagine a classroom where every student writes their score on a sticky note and the teacher wants to know who scored second‑highest. The simplest way is to let the notes fall into a pile, then pick out the top two scores one by one.

In database terms, you have a table of salaries and you need the second highest value. Think of the “salary” column as that pile of sticky notes. You can ask the database to sort all salaries from biggest to smallest (that’s called **ORDER BY salary DESC**) and then skip the first note (the highest) and take the next one. In SQL this looks like:

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

Here, *DISTINCT* removes duplicate salaries so you don’t count the same amount twice; *LIMIT 1* says “give me just one row”; and *OFFSET 1* tells it to start after the very first (highest) salary. The result is exactly the second‑highest salary in the table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
