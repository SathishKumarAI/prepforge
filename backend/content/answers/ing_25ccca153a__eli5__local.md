---
qid: ing_25ccca153a__eli5__local
question: 'Explain: Update a document — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 218
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:35:53-05:00'
sources: []
---

Imagine you’re editing a recipe book.  
With **MongoDB** it’s like flipping to the page with the recipe, pulling out that page, writing your changes, and then sticking the whole page back into the book. The book (the database) keeps track of which page is where, so only that one page gets replaced—no other pages are disturbed.

With **Cassandra**, think of a notebook whose pages are glued together in a fixed order. If you want to change a recipe, you first have to cut out the old page and then glue a new page in its exact spot. Because the pages are tightly bound, Cassandra must also update an index that tells where each “page” lives in the book’s physical layout.

So: MongoDB updates by swapping one page; Cassandra swaps and rewrites part of the binding. Both keep the rest of the book intact, but Cassandra’s glue‑change is a bit more involved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
