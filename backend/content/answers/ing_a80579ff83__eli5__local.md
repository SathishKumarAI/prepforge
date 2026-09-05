---
qid: ing_a80579ff83__eli5__local
question: 'Explain: get the death and then apply to — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 262
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:19-05:00'
sources: []
---

Imagine a group of friends building a giant LEGO model together while standing on opposite sides of a long table. Each friend can add or remove bricks whenever they want, but the final model must stay consistent no matter who works first.

**Operational Transformation (OT)** is like a “brick‑synchronizer.” When one friend places a brick (an edit), OT records that action and then tells every other friend how to adjust their own view so the model stays the same. If two friends add bricks at the same spot, OT decides which comes first and rewrites the second move so both sides still see a coherent structure.

**Differential Synchronization** is another way to keep the models in sync: each friend sends only the *differences* (the new or removed bricks) to the others. The receiver applies those changes on top of its current model, just as if it had seen the original edit happen locally.

Both methods let many people edit a shared document—like Google Docs—simultaneously without stepping on each other’s edits, keeping everyone’s view identical in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
