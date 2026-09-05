---
qid: ing_a40ae7ecbf__eli5__local
question: 'Explain: Body — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 231
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:22-05:00'
sources: []
---

**Imagine building a new library in a city that already has a huge, organized archive (Elasticsearch).**  
To add a new section to the archive you first need to tell the system where the books will go and how they should be shelved—this is what “creating an index” does. In Elasticsearch, an *index* is like a dedicated shelf for related documents (think of it as a database table).

When you **create an index via the API**, you send a small request called a *body*. This body contains:

- **Settings** – how fast the shelf should be searched and how many copies of each book to keep.  
- **Mappings** – the rules that tell Elasticsearch what type of information each field (title, author, date) holds.

The API documentation shows exactly which keys you can include in this body and gives examples for common setups. Think of it as a recipe card: give the right ingredients (settings/mappings), hit “create,” and your new shelf appears ready to receive documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
