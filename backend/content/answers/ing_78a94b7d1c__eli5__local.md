---
qid: ing_78a94b7d1c__eli5__local
question: 'Explain: DocumentDB lets you pick your read consistency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 213
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:53-05:00'
sources: []
---

Think of DocumentDB like a library that holds many books (your data).  
When someone checks out a book, the library can show you two kinds of “freshness”:

* **Strong consistency** – you see the very latest copy of the book, exactly what was just returned to the shelf. It’s as if every reader goes to the same desk that always hands out the newest edition.

* **Eventual consistency** – you might get a slightly older copy for a moment while the library updates its records in the background. Over time (usually milliseconds) all readers will see the same new edition, but right after a change it can lag a bit.

Choosing read consistency is like picking whether you want to wait a split second for the absolute newest book or accept a tiny delay for faster access. The terms are simple: *strong* means “always current,” and *eventual* means “current soon.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
