---
qid: ing_49a9ae2b7d__eli5__local
question: 'Explain: Why Systems Become Unreliable — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 212
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:46-05:00'
sources: []
---

Imagine a library that automatically shelves books based on the first page it sees. If most readers bring books with blurry covers or missing titles, the system starts misplacing them—some end up in the wrong section, some disappear entirely. In machine‑learning systems, this “misplacement” is called **unreliability**.

*Unreliable* means that the system’s output can’t be trusted to stay consistent over time.  
A *model* learns from past data; a *dataset* is that training material.  
If new inputs differ too much from what it saw before (the library’s blurry books), or if the data changes while the model sits idle, its predictions drift and errors grow.

So, like a librarian who never updates her catalog, an ML system becomes unreliable when it learns once and then stops adapting to new patterns, missing the subtle shifts that keep it accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
