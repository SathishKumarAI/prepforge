---
qid: ing_dec2371502__eli5__local
question: 'Explain: Grouped Query Attention (GQA) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 228
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:27:34-05:00'
sources: []
---

Imagine you’re looking for a word in a huge library that’s split into shelves by topic—history, science, art. Instead of opening every book one by one (which would take forever), you first pick the shelf that most likely contains your word, then skim only that shelf.  

In a large language model, “Grouped Query Attention” does exactly that. The model splits its huge memory into groups (like shelves). When it asks a question (“query”), it looks at all groups but gives more weight to the ones that are most relevant to that query, while ignoring or lightly touching the others. This saves time and keeps the answer focused, just as you’d only read the history shelf when searching for “Revolution.”  

*Query*: the model’s current question.  
*Attention*: how much focus the model gives to each part of its memory.  
Grouped Query Attention is a smart shortcut that keeps the model fast and precise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
