---
qid: vq_68e8faa4c9__eli5__local
question: WHAT IS A COMMON TABLE EXPRESSION (CTE)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 187
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:14:16-05:00'
sources: []
---

A Common Table Expression (CTE) is like a *temporary recipe card* you create inside a cooking show.  
You write the recipe once—say “make a list of all employees who earned more than $50k last year”—and give it a name, e.g., `HighEarners`.  
While the episode runs, anyone can reference that recipe by its name to get the list, just as you would pull out the card whenever you need those employees.  

The trick is that the card exists only for the duration of the current “show” (the query). It’s not saved in the kitchen cabinet; once the show ends, the card disappears.  
So a CTE lets you name and reuse an intermediate result inside a single SQL statement, keeping your code tidy without creating permanent tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
