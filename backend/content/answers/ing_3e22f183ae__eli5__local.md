---
qid: ing_3e22f183ae__eli5__local
question: 'Q60: How would you evaluate whether an LLM is hallucinating?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 231
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:32-05:00'
sources: []
---

Imagine a chef who follows a recipe (the training data) to make a dish (the answer). If the chef adds an ingredient that isn’t listed—like sprinkling chocolate on a savory stew—that’s a **hallucination**: the model gives information that never existed in its “ingredients” book.

To spot it, you do two things:

1. **Cross‑check with trusted sources** – ask the model to cite facts and then look up those citations yourself. If the cited page says something different or doesn’t exist, the chef is hallucinating.
2. **Compare against the recipe** – give the same prompt to a second, well‑known “chef” (another LLM or a human) and see if they agree. Consistent differences hint at hallucination.

If both checks flag the same odd ingredient, you’ve found a hallucinated answer. This simple recipe‑check keeps the model’s output grounded in reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
