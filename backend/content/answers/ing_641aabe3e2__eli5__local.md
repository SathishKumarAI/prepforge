---
qid: ing_641aabe3e2__eli5__local
question: 'Explain: The Observability Pyramid — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 247
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:14:47-05:00'
sources: []
---

Imagine you’re a chef in a busy kitchen, and every dish you serve must taste perfect. You can’t just trust your memory; you need a clear way to check what’s happening at each step: the ingredients (raw data), how they’re mixed (processes), the final plate (output), and how customers react (feedback). That layered checklist is the **Observability Pyramid** for AI, and Langsmith builds it.

1. **Data Layer (Base)** – The raw inputs you feed into a model, like the vegetables in our kitchen.  
2. **Execution Layer** – How the model runs: the code paths, time taken, and resources used—think of the cooking techniques.  
3. **Result Layer** – The predictions or outputs, just as the plated dish.  
4. **Feedback Layer (Top)** – Real‑world results: user ratings, downstream effects—like diners’ smiles.

Langsmith stitches these layers together with a single dashboard, letting you trace an AI “recipe” from ingredient to applause, spotting issues before they spoil the meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
