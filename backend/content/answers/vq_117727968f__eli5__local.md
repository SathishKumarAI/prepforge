---
qid: vq_117727968f__eli5__local
question: HOW DO YOU GET THE NTH HIGHEST SALARY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 241
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:05-05:00'
sources: []
---

Imagine you’re in a classroom where every student has a test score written on their desk. You want to know the score of the *N*‑th highest student without having to look at every single desk.

In SQL, each row is like a desk and “salary” is the number on it.  
1️⃣ **Order** all rows from highest salary downwards (`ORDER BY salary DESC`).  
2️⃣ **Skip** the first N – 1 rows – that’s the same as moving past the top N – 1 scores.  
3️⃣ **Take** the next one row – that is your N‑th highest salary.

The SQL trick for this is the `OFFSET … FETCH` clause (or, in older versions, `ROW_NUMBER()` inside a subquery). It lets the database do the “skip and take” automatically, just like you’d walk past desks until you reach the one you want. No fancy math needed—just a smart way to ask the database: *give me the N‑th score after ordering everything*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
