---
qid: ing_f1822cd358__eli5__local
question: 'Explain: Full text queries — Full text queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 206
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:57:02-05:00'
sources: []
---

Imagine you’re looking for a specific recipe in a huge cookbook that’s all written in plain language.  
A **full‑text query** is like asking the cookbook, “Show me every page that talks about *chocolate cake*,” instead of searching for an exact phrase or number.

In Elasticsearch, each document (a page) is first broken into words—called *tokens*. These tokens are stored in a special index called a **full‑text index**. When you issue a full‑text query, Elasticsearch looks up the tokens you asked for and returns all documents that contain them, even if they’re mixed with other words or appear in different orders.

Think of it as a librarian who can instantly find every recipe mentioning “chocolate” and “cake,” no matter how the ingredients are listed. That’s full‑text search: fast, flexible, and built for natural language.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
