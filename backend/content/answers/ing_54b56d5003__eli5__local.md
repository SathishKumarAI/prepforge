---
qid: ing_54b56d5003__eli5__local
question: 'Explain: Caching Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 228
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:51:05-05:00'
sources: []
---

Imagine you’re cooking for a big family dinner. You have a pantry (the cache) where you keep the most‑used ingredients so you don’t have to run back to the store every time. In AI, **caching patterns** are the ways we decide what “ingredients” (data or model results) stay in that pantry and when they’re refreshed.

* **Cache-as-Read**: The pantry holds finished dishes; whenever someone asks for a recipe, you pull it from there instead of re‑making it.  
* **Cache-as-Write**: When you cook a new dish, you first make it on the stove (compute) and then put it in the pantry for later use.  
* **Lazy Cache**: You only stock the pantry after someone actually orders that dish—no pre‑emptive cooking.

These patterns let AI systems answer questions fast, saving time and computing power while still giving up‑to‑date results when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
