---
qid: ing_b60bbe5995__eli5__local
question: 'Explain: Learning Rate (LR) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 273
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:05-05:00'
sources: []
---

Think of training an AI like teaching a child to play a new game. The **learning rate (LR)** is how big each practice move the child takes: a *big* step means they learn fast but can overshoot the right answer, while a *tiny* step keeps them safe but slows progress.

When you “fine‑tune” a pre‑trained model—like giving that child a new rule set—you usually start with a **small LR**. This lets the child adjust gently to the new rules without forgetting what they already know (the original game). If you need quick changes, you can temporarily bump the LR for a few epochs, then drop it again.

Two common tricks:

1. **LR decay** – slow down the step size gradually, like letting the child practice more slowly as they get closer to mastery.
2. **Layer‑wise LR** – give larger steps to newer layers (the new rules) and keep smaller steps for older layers (the old knowledge).

In short, fine‑tuning is about walking carefully with a small learning step, occasionally speeding up, then settling back into a gentle pace so the model learns the new task without losing what it already knows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
