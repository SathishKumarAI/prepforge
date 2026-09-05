---
qid: ing_13916d496d__eli5__local
question: 'Explain: Derive the gradient of cross-entropy loss with softmax inputs,
  and explain why we fuse them numerically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 308
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:31-05:00'
sources: []
---

Think of a classroom where each student (a class) gets a “vote” from the model—softmax turns raw scores into probabilities that sum to one. The cross‑entropy loss is like a teacher grading how well the predicted votes match the real answer: it punishes large differences between the true class’s probability and what the model gave.

To update the model, we need the gradient (the direction to move each weight). Deriving it is just applying two simple rules:

1. **Softmax derivative** – changing a score slightly shifts the probabilities of *all* classes proportionally; that shift is proportional to the current probability times one minus itself.
2. **Cross‑entropy derivative** – tells us how much we want the true class’s probability to change.

When you combine them, the algebra collapses beautifully: the gradient for each class becomes  
`predicted_probability – indicator_of_true_class`.  
So if a class is over‑trusted (probability too high) its weight is nudged down; if it’s under‑trusted, it goes up.

We fuse softmax and cross‑entropy numerically because doing them together in one formula avoids two separate expensive calculations and keeps the expression stable: tiny probabilities don’t explode into huge numbers. This “fused” version is faster and less prone to numerical errors, just like combining a calculator’s addition and subtraction steps into one smooth motion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
