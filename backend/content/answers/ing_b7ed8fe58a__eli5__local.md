---
qid: ing_b7ed8fe58a__eli5__local
question: 'Explain: Feature/Hidden State Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:28:53-05:00'
sources: []
---

Imagine you’re learning to bake a cake from a master chef (the big model). The chef shows you the finished cake and tells you how much flour, sugar, eggs, and butter to mix together. You don’t need to see every step of the recipe; you just learn the final taste and texture. That’s *knowledge distillation*—a small “student” model learns from a large “teacher” by copying its outputs.

Now picture that the chef also whispers secret ingredients: the exact balance of each component, how they interact, and subtle hints about baking time. Those hidden cues are like *hidden states* or *features* inside the teacher’s neural network. By letting the student see those internal signals (feature/hidden state distillation), you give it a clearer map of how the cake is made, so it can bake almost as well with fewer ingredients and less flour—i.e., a smaller, faster model that still performs beautifully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
