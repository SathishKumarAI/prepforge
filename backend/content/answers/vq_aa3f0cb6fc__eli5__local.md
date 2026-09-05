---
qid: vq_aa3f0cb6fc__eli5__local
question: WHAT IS A SELF JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 177
total_tokens: 331
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:33-05:00'
sources: []
---

A **self‑join** is just a normal table joined to itself, like looking at two copies of the same book side by side. Imagine you have a list of people and each person’s manager is also in that list. To find out who reports to whom, you “join” the list with itself: one copy represents the employee, the other copy represents the manager. The join condition says “the employee’s manager ID must match the manager’s employee ID.”  
In SQL terms, you give each copy a different alias (e.g., `employees e1` and `employees e2`) so the database knows which column comes from which copy. The result shows pairs of rows that satisfy the condition—just like pairing each employee with their manager in one table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
