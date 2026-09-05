---
qid: ing_d8ea328077__eli5__local
question: 'Explain: Failure modes & mitigations — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 265
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:22-05:00'
sources: []
---

Imagine you’re looking for a recipe in a huge cookbook that’s been automatically organized by a smart robot chef.  
**Failure modes** are the ways the robot can mislead you:  

1. **Misreading context** – it might think “apple pie” is about the fruit, not dessert, and pull up a list of orchards instead of a recipe.  
2. **Over‑generalizing** – it could treat “vegan chocolate cake” as any chocolate cake, showing meat‑based cakes too.  
3. **Bias in training data** – if most recipes it learned from are from one cuisine, it may ignore equally good dishes from others.

**Mitigations** keep the search honest:  

- *Fine‑tune* on a diverse set of labeled recipes so context is clearer.  
- Use *explicit filters* (e.g., “only vegan”) to narrow results.  
- Periodically review and update the training data, adding new cuisines and correcting mistakes.

So, like a helpful chef who checks his memory, semantic search works best when it’s trained well, given clear instructions, and kept up‑to‑date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
