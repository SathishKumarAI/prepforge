---
qid: ing_03174b50da__eli5__local
question: 'Explain: The Residuals — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 170
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:39:57-05:00'
sources: []
---

Imagine you’re baking a cake and your first attempt turns out slightly too sweet. You taste it, note the “sweetness error,” and then adjust by adding a bit of lemon or less sugar next time. In a Transformer model, each layer does something similar: it makes a prediction about the data (like the cake’s flavor) and then looks at the *residual*—the difference between what it predicted and the actual input. That residual is fed forward as a tiny correction to help the next layer learn better. Just as you tweak your recipe after tasting, the Transformer keeps refining its understanding by passing along these small adjustments through all its layers until the final output matches reality as closely as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
