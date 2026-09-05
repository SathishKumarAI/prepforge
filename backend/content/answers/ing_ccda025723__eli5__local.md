---
qid: ing_ccda025723__eli5__local
question: 'Q: What is the risk of "Model Collapse" when training on synthetic data?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 204
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:59:37-05:00'
sources: []
---

Imagine you’re teaching a chef how to cook by giving them only recipes that were written by a single, very picky critic who always uses the same bland seasoning. The chef learns quickly—he can make dishes that satisfy that critic’s taste—but when he tries cooking for other diners, everything tastes flat and forgettable. That’s “model collapse” in AI: when a machine learns from synthetic data that is too uniform or biased, it becomes excellent at reproducing those fake patterns but loses the ability to handle real‑world variety.

In practice, training on overly simple or one‑style synthetic data can make the model memorize shortcuts instead of learning genuine relationships. When you later ask it to solve a problem with different inputs, it stumbles because it never saw that diversity during training. So the risk is that the AI looks great inside its narrow sandbox but fails outside it—just like the chef who can only cook for one critic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
