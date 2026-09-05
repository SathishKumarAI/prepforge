---
qid: ing_71f698a92e__eli5__local
question: 'Explain: Heads: MHA → MQA → GQA — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 296
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:36:51-05:00'
sources: []
---

Imagine a classroom where the teacher (the model) wants to answer many questions quickly.

**MHA – Multi‑Head Attention**  
Think of several students (heads) each looking at a different part of the board at once. Every head can focus on its own piece of information, and then all their insights are combined so the teacher gets a richer view. This lets the model capture many relationships in parallel.

**MQA – Multi‑Query Attention**  
Now the teacher decides to ask one question but wants answers from many different topics simultaneously. Instead of sending separate queries for each head, MQA sends one query that is shared across all heads, while still keeping each head’s own “key” (focus). It saves time and keeps the model efficient.

**GQA – Global Query Attention**  
Finally, the teacher has a single global question that should consider *all* parts of the board together. GQA uses one overarching query that every head reads from the entire input, ensuring every piece of information is taken into account in a unified way.

So: MHA = many focused heads; MQA = one shared question across heads; GQA = one global question covering everything. Each step refines how the model “looks” at data to answer better.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
