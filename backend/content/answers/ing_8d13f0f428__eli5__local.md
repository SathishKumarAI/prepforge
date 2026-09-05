---
qid: ing_8d13f0f428__eli5__local
question: 'Explain: When is fine-tuning the wrong call? Describe failure modes you''d
  warn a team about.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 271
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:07-05:00'
sources: []
---

Imagine you’re baking a cake that already tastes pretty good, but you want to add a new flavor—say lemon zest. If the base batter is too thin or already has strong flavors (like a very sweet cake), adding lemon might make it taste off or even ruin the texture. That’s like **fine‑tuning**: taking an AI model that was trained on one big dataset and tweaking it with a small, specific set of new examples.

Fine‑tuning is a bad idea when:

1. **The new data are too few** – the model “overlearns” those few cases and forgets what it already knew (catastrophic forgetting).  
2. **The new data are noisy or biased** – the model learns wrong patterns and becomes unreliable.  
3. **The base model is already very large** – tiny changes can cause huge, unpredictable shifts in behavior.  
4. **The task differs wildly from the original training** – the model has no useful starting point, so it just regresses to guessing.

In short, if your new data are sparse, noisy, or a poor match for what the AI already knows, fine‑tuning can backfire instead of improving performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
