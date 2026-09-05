---
qid: ing_f9a5f3589c__eli5__local
question: 'Explain: LEFT JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 243
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:05-05:00'
sources: []
---

Think of two tables as two different lists in a recipe book.  
One list (Table A) has every ingredient you need: “Tomato,” “Basil,” “Olive Oil.”  
The other list (Table B) is a shopping‑list that tells which ingredients are on sale and how much they cost.

A **LEFT JOIN** is like saying, *“Give me every item from the first list, plus any price information from the second list if it exists.”*  
You start with all rows in Table A (the left side). For each row you look down the aisle of Table B for a matching ingredient. If you find one, you add its price next to the ingredient. If there’s no match, you still keep the ingredient, but the price column is blank (NULL).

So the join keeps every record from the left table and enriches it with data from the right when available—just as a recipe stays complete even if some prices are missing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
