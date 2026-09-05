---
qid: ing_b367129760__eli5__local
question: 'Explain: Inference Optimization — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 213
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:21-05:00'
sources: []
---

Imagine your large‑language model (LLM) as a busy kitchen that can whip up any recipe, but sometimes it’s slow because the chef has to walk back and forth across the whole kitchen every time they need an ingredient. **Inference optimization** is like rearranging that kitchen so the chef can grab what they need right where they’re standing, cutting out unnecessary walking.

Key tricks from the papers are:

* **Pruning** – remove unused spices (weights) that never change a dish’s flavor.
* **Quantization** – replace expensive, high‑precision ingredients with simpler ones that still taste good.
* **Knowledge distillation** – train a smaller chef to mimic the big one’s skill, so they can cook faster.
* **Caching** – keep frequently used sauces ready on the counter.

By applying these moves, the model (chef) delivers answers almost instantly while using less memory and power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
