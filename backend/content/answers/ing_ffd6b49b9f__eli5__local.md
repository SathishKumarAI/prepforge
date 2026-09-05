---
qid: ing_ffd6b49b9f__eli5__local
question: How do you generate synthetic training data with an LLM, and what are the
  pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 289
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:01-05:00'
sources: []
---

Imagine a chef who wants to practice making a new dish but has no kitchen yet. Instead of buying ingredients, she asks an experienced sous‑chef (the LLM) to describe every step in vivid detail—what the food should look like, how it tastes, and even the texture. The sous‑chef’s description becomes a *recipe* that can be used by others to try the dish without ever seeing the real kitchen.

That’s what we do with synthetic training data: we prompt a large language model to write examples (texts, dialogues, code snippets) that look like real data. We then feed those examples into another AI so it learns patterns it would otherwise need hours of human‑labelled data for.

**Pitfalls**

1. **Bias and errors:** The LLM may repeat stereotypes or invent facts, so the synthetic set can carry hidden biases.
2. **Overfitting to style:** Models trained on purely generated text may learn the “voice” of the generator rather than real-world diversity.
3. **Lack of ground truth:** Without real labels, it’s hard to verify correctness; mistakes propagate.

Think of the chef’s recipe as a useful shortcut, but you still need a real kitchen and tasting panel to confirm that the dish truly works in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
