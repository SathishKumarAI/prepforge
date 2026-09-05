---
qid: ing_70d8772e5a__eli5__local
question: How do you monitor a deployed LLM system for drift? What kinds of drift
  matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 276
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:23-05:00'
sources: []
---

Imagine your LLM is a well‑trained chef who follows a recipe book (the training data). After the kitchen opens for business (deployment), customers start telling you that some dishes taste off or that the menu seems out of sync with their expectations. That “off” feeling is **drift** – the model’s predictions slowly moving away from what they were designed to do.

Two main kinds matter:

1. **Data drift** – the words, topics, or user styles your model sees now are different from those it learned on. Think of a chef suddenly getting ingredients that aren’t in the recipe book.
2. **Concept drift** – the meaning of a word or the task itself changes over time (e.g., slang or new regulations). It’s like the menu items themselves changing while the chef still follows the old recipes.

To spot these, set up simple “taste tests” (monitoring metrics) that compare current predictions to recent labeled examples or expected distributions. If you notice a sudden drop in accuracy or a shift in word usage patterns, it’s time to retrain or tweak your model—just as a chef would adjust the recipe when ingredients change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
