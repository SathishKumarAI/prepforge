---
qid: vq_04906fc06a__eli5__local
question: What is Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 193
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:10-05:00'
sources: []
---

Imagine you’re looking for every student whose score is higher than the average of their own class.  
You can’t just compute one global average; each class has its own numbers, so you need a “mini‑average” that depends on the outer query’s current row (the student).  

That mini‑average is like a **correlated subquery**: it’s a smaller query written inside another one, and it uses a value from the outer query to decide what to return.  
For each student, the inner query “looks up” that student’s class, calculates the average score for that class, and then the outer query checks whether the student’s score beats it.  

In short, a correlated subquery runs once for every row of the main query, using data from that specific row to filter or compute something new.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
