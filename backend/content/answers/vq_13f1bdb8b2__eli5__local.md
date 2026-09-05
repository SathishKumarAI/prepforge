---
qid: vq_13f1bdb8b2__eli5__local
question: WHAT IS A CORRELATED SUBQUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 180
total_tokens: 336
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:22-05:00'
sources: []
---

Imagine you’re making a sandwich in a kitchen that has many recipe books on the wall. You want to know how many slices of cheese each sandwich needs, but every time you open a new book (the outer query) you have to look up the cheese requirement inside the same book you just opened (the inner subquery). The key is that the inner lookup can’t be done once for all books; it must be repeated for each specific sandwich you’re making. That’s a correlated subquery: an inner query that depends on columns from the outer query, so it runs again and again, one time per row of the outer result. It “correlates” its work to the current row, just like your cheese lookup is tied to the particular sandwich recipe in hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
