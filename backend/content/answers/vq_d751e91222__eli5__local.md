---
qid: vq_d751e91222__eli5__local
question: How do you get the second highest salary from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 227
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:01-05:00'
sources: []
---

Think of the salary table as a line‑up of runners at a race finish, each runner standing on a podium that shows how far they ran (their salary).  
To find the **second highest salary** you need to know who is right behind the winner.  

1. **Sort the runners** from tallest to shortest (salary descending).  
2. **Look at the second spot** in that line‑up; the runner there has earned the next best amount.

In SQL this is like asking the database: “give me the salary value that would be in position 2 if I ordered all salaries from largest to smallest.”  
You can do it with a simple query that orders and then skips the top one, or by using `LIMIT 1 OFFSET 1` (skip one row, take the next).  

So, just imagine lining up the runners by finish time and picking the second‑place finisher—that’s the second highest salary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
