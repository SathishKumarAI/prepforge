---
qid: ing_42174a3cda__eli5__local
question: 'Explain: Entropy, Cross-Entropy, and Kullback-Leibler Divergence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 261
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:21:05-05:00'
sources: []
---

Think of a recipe book that tells you how many teaspoons of each spice go into a soup.  
**Entropy** is the “spice‑diversity” of a recipe: if every spice appears in equal amounts, the recipe is maximally uncertain (high entropy). If only one spice dominates, the recipe is very predictable (low entropy).

Now imagine you’re a cook who has a *different* recipe book and you want to know how much it differs from the real one.  
**Cross‑entropy** measures the average surprise when you try to use your recipe to make soup according to the real recipe. A higher cross‑entropy means your recipe is poorer at predicting the true spice mix.

Finally, **Kullback–Leibler (KL) divergence** tells how many extra teaspoons of surprise you’d need if you kept using your recipe instead of the real one. It’s simply the difference between cross‑entropy and entropy—how much worse your guess is compared to the best possible guess.  

So: entropy = inherent spice diversity; cross‑entropy = penalty for guessing with a wrong recipe; KL divergence = extra surprise caused by that mistake.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
