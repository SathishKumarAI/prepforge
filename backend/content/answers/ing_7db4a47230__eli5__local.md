---
qid: ing_7db4a47230__eli5__local
question: 'Explain: Sorting numeric fields — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 231
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:56:11-05:00'
sources: []
---

Imagine you’re at a library that automatically arranges books on a shelf by the number of pages. In Elasticsearch, “sorting numeric fields” works like that: each document (a book) has a number field—say, *price* or *rating*. When you ask for search results, you can tell Elasticsearch to line them up from lowest to highest, just as the librarian would stack the shortest books first.

**Key terms**

- **Document** – one piece of data in Elasticsearch (like a book).  
- **Field** – a named value inside a document; numeric fields hold numbers.  
- **Sort** – an instruction that orders results by a chosen field.

When you request a sort, Elasticsearch reads the numeric values, compares them, and returns the list in order. If two documents have the same number, it falls back to a secondary rule (often the original relevance score). This is how you get clean, ordered search results without extra work on your side.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
