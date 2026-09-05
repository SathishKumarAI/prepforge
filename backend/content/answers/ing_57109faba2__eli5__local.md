---
qid: ing_57109faba2__eli5__local
question: 'Explain: Script based sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 224
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:54:47-05:00'
sources: []
---

Imagine a library that can automatically decide how to arrange books on a shelf. Normally it puts them alphabetically by title—that’s the default sort. But sometimes you want a different order: maybe all mystery novels first, then romance, or you want to push recent releases higher.

In Elasticsearch “script‑based sorting” is like giving the librarian a custom rule written in a simple recipe (a script). The script looks at each book’s data—its genre, publication date, popularity score—and calculates a new value that tells the system how high or low that book should appear. Think of it as a tiny calculator you attach to every search result; it says “rate this item 0–10 based on your recipe.” Then Elasticsearch uses those ratings to reorder the results.

So script‑based sorting lets you tailor the ranking exactly to what matters for your users, beyond the usual alphabetical or date order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
