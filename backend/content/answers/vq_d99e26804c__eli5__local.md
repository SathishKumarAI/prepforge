---
qid: vq_d99e26804c__eli5__local
question: How to find Third highest salary in Employee table using self-join?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 210
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:24-05:00'
sources: []
---

Imagine a group of friends standing in a line, each holding a card that shows their height. You want to know who is the third tallest. One way is to let every friend compare themselves with every other friend—this is what a *self‑join* does: the table is joined to itself so each row can be paired with any other row.

In practice you write:

1. **Join** the employee table to itself on the salary column (the “card”).
2. For each pair, ask if the first person’s salary is higher than the second’s.
3. Count how many people are taller than each employee.
4. The employee whose count equals two is exactly the third highest.

So the self‑join lets every row “look around” at all others, and by counting how many have higher salaries you can pick out the third best without needing fancy ranking functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
