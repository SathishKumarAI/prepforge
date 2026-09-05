---
qid: ing_492bb02afe__eli5__local
question: 'Explain: Track scores — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 222
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:10-05:00'
sources: []
---

**Track scores – sorting search results in Elasticsearch**

Imagine you’re at a library where every book is tagged with how many people have read it (the “score”). When someone asks for the most popular books, the system needs to sort them by that number. In Elasticsearch, *track_scores* tells the search engine: “Yes, I want to know how good each hit is so I can order them from best to worst.”  

When you enable *track_scores*, the searcher calculates a relevance score for every document that matches your query (like counting readers). It then uses those scores to sort the results, giving you the top‑scoring items first. If you disable it, Elasticsearch skips the costly scoring step and can’t order the hits—think of it as showing books in random order because you didn’t ask for popularity.  

So *track_scores* is simply a flag that says, “Compute and use relevance scores to sort my search results.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
