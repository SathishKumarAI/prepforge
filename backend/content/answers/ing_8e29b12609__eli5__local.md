---
qid: ing_8e29b12609__eli5__local
question: What is catastrophic forgetting in fine-tuning, and how do you mitigate
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 207
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:07-05:00'
sources: []
---

Imagine teaching a robot to play three different piano pieces. If the robot practices only one piece after learning the others, its fingers will forget the notes of the earlier songs; the new practice overwrites the old memory. In machine‑learning terms, that forgetting is called **catastrophic forgetting**: when we fine‑tune a pre‑trained model on a new task, it can lose what it already knew about previous tasks.

To keep the robot’s fingers sharp for all pieces, we use two tricks:

1. **Replay old data** – occasionally play snippets from earlier songs while training on the new one, so the model keeps those patterns fresh.
2. **Regularize change** – add a gentle “penalty” that discourages big shifts in the model’s weights, keeping it close to its original state.

These methods let the model learn new skills without wiping out what it already knows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
