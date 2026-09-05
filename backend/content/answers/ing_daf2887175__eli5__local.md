---
qid: ing_daf2887175__eli5__local
question: 'Explain: Sort values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 179
total_tokens: 338
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:56-05:00'
sources: []
---

Think of an Elasticsearch index as a giant library where every book (document) has a page that says how “important” it is – like a star rating. When you ask the library for books on a topic, it first pulls out all the relevant titles, then line them up from highest to lowest rating so you see the best ones first.

In technical terms: each document gets a numeric field (the score). The search engine collects every match, assigns each a score based on how well it fits your query, and then orders the list by that number before sending it back. It’s just like sorting a stack of books from most to least popular, so you always see the top picks first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
