---
qid: ing_cd34fba020__eli5__local
question: How does prompt caching work, and how should it change the way you structure
  prompts?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 239
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:00:19-05:00'
sources: []
---

Imagine your computer is a kitchen that can cook many dishes (answers) at once. A *prompt* is like the recipe you give to the chef. When the same recipe appears again, it’s wasteful for the chef to read it from scratch; instead she can keep a quick‑look sheet in front of her—this is **prompt caching**.

In practice, the AI stores the text of a prompt (the “recipe”) and reuses that stored version whenever the exact same words appear. It only needs to recompute the *response* part, not the whole prompt again. Because of this, you can safely split your prompt into two parts:

1. **Static part** – the long instruction or background that rarely changes. Put it in a cache so the AI reads it once.
2. **Dynamic part** – the small question or data that changes each time. Feed only this to the model.

By caching the static part, you save computation and keep prompts shorter, making your interactions faster and cheaper while still getting fresh answers for every new question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
