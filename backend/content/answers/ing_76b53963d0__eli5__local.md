---
qid: ing_76b53963d0__eli5__local
question: 'Explain: Sort mode option — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 278
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:44:24-05:00'
sources: []
---

Imagine you’re looking for a book in a huge library that stores every page of every book as a tiny card (that’s what Elasticsearch does). When you ask it “show me all the books about cooking,” it can return the cards in many orders: newest first, most popular first, alphabetically by title, or even by how many times people have borrowed them. The *sort mode* is like choosing which librarian rule to use when lining up those cards.

- **`score`** (default) – puts the most relevant books at the top, just as a smart librarian would guess you want the best matches first.
- **`frequency`** – orders by how often a term appears in each book, so books that mention “sauce” many times rise to the front.
- **`min`, `max`, `sum`, `avg`** – think of them as ways to combine multiple scores (like if you asked for both “sauce” and “baking”) into one number: smallest match, largest match, total matches, or average.

So, *sort mode* is simply the rule that tells Elasticsearch which way to arrange your search results, just like a librarian deciding how to line up books on a shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
