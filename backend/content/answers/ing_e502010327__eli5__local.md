---
qid: ing_e502010327__eli5__local
question: 'Explain: Mapping — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 259
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:37:31-05:00'
sources: []
---

In Elasticsearch (Elastic Docs), **mapping** is like the “address book” for each document you store.  
Imagine you’re filing a stack of letters into an organized drawer: first you decide what categories exist—name, date, subject—and then you write those labels on the file folder. When someone looks up a letter later, the address book tells them exactly where to find it and how to read its contents.

In Elasticsearch terms:

* **Document** – the letter you’re storing (a JSON object).  
* **Field** – a piece of information in that letter (e.g., “title” or “price”).  
* **Mapping** – the predefined list of fields, plus the type for each one (string, number, date) and how they should be treated during search.

If you don’t give Elasticsearch a mapping, it will guess types automatically—sometimes correctly, sometimes not. By defining a mapping yourself, you guarantee that searches on “price” treat it as a number, while “title” is searched as text with full‑text features. It’s the blueprint that turns raw data into searchable, structured information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
