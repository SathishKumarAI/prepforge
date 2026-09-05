---
qid: ing_91d4cc8c89__eli5__local
question: 'Explain: Checkpointing and Resume — State Management Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 200
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:28:45-05:00'
sources: []
---

Think of training a giant Lego tower that’s taller than you can reach.  
A **checkpoint** is like taking a photo of the tower at a certain height, then storing that picture safely. The photo records exactly which bricks are where, so if you lose power or decide to pause, you don’t have to rebuild from scratch—you can start again right where the photo was taken.

When you **resume**, you load that photo back into your workspace and continue adding bricks from that exact spot. In AI terms, a checkpoint saves the model’s weights (the “brick layout”) and other settings; resuming restores them so training continues seamlessly. This pattern protects progress, speeds up experiments, and lets multiple people or machines work on the same model without stepping on each other’s toes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
