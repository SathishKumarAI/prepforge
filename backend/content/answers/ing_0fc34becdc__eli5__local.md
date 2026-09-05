---
qid: ing_0fc34becdc__eli5__local
question: What kinds of distribution shift exist, and how would you monitor a deployed
  model - classical or LLM-based - for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 324
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:23-05:00'
sources: []
---

Imagine your AI is a chef who learned to cook only one dish—say, spaghetti—from a single recipe book. If the kitchen suddenly starts receiving different ingredients (new pasta shapes, spices, or sauces), the chef’s dish will taste off. Those ingredient changes are **distribution shifts**: the data the model sees in real life no longer matches what it was trained on.

There are three common types:

1. **Covariate shift** – the mix of input features (the ingredients) changes, but the relationship to the outcome stays the same.
2. **Label shift** – the overall prevalence of outcomes (e.g., how many customers order a vegetarian dish) changes while the recipe remains.
3. **Concept drift** – the underlying rule linking inputs to outputs changes (the chef starts using a new cooking technique).

To keep your model “chef” happy, monitor it like a kitchen log:

- **Track input statistics**: Regularly record feature distributions and compare them to training data (e.g., mean and variance).  
- **Check output balance**: Watch for sudden swings in predicted classes or confidence scores.  
- **Use validation sets that mimic production**: Periodically evaluate on fresh data collected from the field.  
- **Set alerts**: If any monitored metric deviates beyond a threshold, trigger an investigation.

By treating shifts as ingredient changes and keeping a vigilant kitchen log, you’ll catch problems early and keep your model tasting right.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
