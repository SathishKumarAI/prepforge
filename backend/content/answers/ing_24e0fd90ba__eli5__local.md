---
qid: ing_24e0fd90ba__eli5__local
question: 'Explain: If you''re used to functional programming languages'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 226
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:34:36-05:00'
sources: []
---

Think of machine learning like a **functional recipe book** that learns new dishes by tasting many samples.

In functional programming you write pure functions: the same inputs always give the same outputs, no hidden state.  
In ML, each “function” is a *model* (a mathematical map from input to output). The model starts with random parameters—like an empty cookbook. It then **learns** by repeatedly looking at many example dishes (data points), comparing its predicted taste (output) to the real one, and adjusting its recipe (parameters) just enough to reduce the error.  

Just as a chef refines a recipe over time, the model updates its parameters via an optimization loop (gradient descent). Once trained, you can call it like any pure function: give it new ingredients (input), and it returns a dish (prediction) without remembering past meals—unless you explicitly let it store state. This keeps the functional spirit while harnessing data to improve predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
