---
qid: ing_952003910a__eli5__local
question: 'Explain: Momento — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 218
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:34:09-05:00'
sources: []
---

**Momentum in machine learning is like a skateboarder pushing off the ground.**  
When you first start skating, your speed depends on how hard you push each time. As you keep sliding, you build up a steady motion: the harder you push earlier, the easier it is to keep going later because momentum carries you forward. In training a neural network, “momentum” works the same way for updating weights. Each weight adjustment is like a push; past pushes (previous updates) add to the current one, so the algorithm keeps moving in the same direction even if the present gradient looks small or noisy. This helps it skip over tiny bumps and reach the valley of lowest error faster.

*Unavoidable term:*  
**Gradient** – a vector that tells how much each weight should change to reduce the training error. Momentum simply adds a fraction of the previous gradient to the current one, smoothing the path toward the best solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
