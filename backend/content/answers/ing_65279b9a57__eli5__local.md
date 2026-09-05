---
qid: ing_65279b9a57__eli5__local
question: 'Explain: Static index settings — General index settings | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 253
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:21-05:00'
sources: []
---

Imagine you’re setting up a library that will hold books forever, and every book must follow the same rules—how many shelves per floor, how tall each shelf is, and whether visitors can rearrange the books.  
In Elasticsearch, an **index** is like that library. Before any documents (books) are added, you define its *static index settings*. These are the immutable “rules” that shape the whole structure:  

* **Number of shards** – how many separate “shelves” the data is split into; more shelves mean more parallel reading but also more overhead.  
* **Number of replicas** – copies of each shelf kept in other rooms for safety and faster access.  
* **Mapping type (e.g., keyword, text)** – tells Elasticsearch whether a field should be treated as plain words or searchable terms.  

Once the index is created, you cannot change these core settings; they lock the library’s layout. If you need different rules, you must create a new index and copy data over—just like rebuilding a library with a new design. This keeps searches fast, predictable, and fault‑tolerant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
