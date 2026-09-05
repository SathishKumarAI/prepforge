---
qid: ing_a47f00df3b__eli5__local
question: 'Explain: A user reports a bad answer. Walk me through how you debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 251
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:59:04-05:00'
sources: []
---

Imagine the model is like a recipe book that’s been shuffled in a kitchen. When a user says “the answer is wrong,” we first check the recipe (the prompt) to see if it was copied correctly—maybe the ingredients were mixed up or a step was missing. Next, we look at the cook’s notes (the internal state and recent conversation) to spot any mis‑written instructions that could have led to a bad dish.

If the prompt is fine, we ask the kitchen staff (the training data) for their version of the recipe: did they ever see this exact order before? If not, it might be a rare combination that the cook has never practiced. We then try a different route—like swapping out a seasoning or using a simpler cooking method—to see if the dish improves.

Finally, we record what happened in a log book (debug logs) so future cooks can learn from this mistake and avoid repeating it. This way, we trace the problem step by step, correct the source, and make sure the kitchen runs smoothly again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
