---
qid: ing_e2e2accaaf__eli5__local
question: 'Explain: Manage and update mappings — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 233
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:34:43-05:00'
sources: []
---

Imagine your library’s catalog as a giant, smart index card system.  
A **mapping** is the rulebook that tells the system what each “card” (document) can hold and how it should be read.  

*Fields* are like columns on a card: you decide if a field holds text, numbers, dates, or even nested lists of other cards.  
You also tell Elasticsearch whether a text field should be searchable (“analyzed”) or just stored as plain data.  
When you **manage** a mapping, you’re editing the rulebook—adding new columns, changing a column from “plain” to “searchable,” or making one field a special “date.”  

Updating a mapping is like adding a new type of card to the library: you can add fields, but you can’t change how an existing field was originally defined without re‑indexing.  
So think of mapping as the blueprint that keeps your data organized and searchable, and managing it is updating that blueprint while respecting its limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
