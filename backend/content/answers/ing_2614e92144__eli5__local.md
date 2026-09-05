---
qid: ing_2614e92144__eli5__local
question: 'Explain: We don''t really care what are... what — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 259
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:36:21-05:00'
sources: []
---

Imagine you’re buying a car. You don’t need to know how the engine’s pistons move or how the gearbox gears shift; all you care about is that it takes you from point A to point B safely and quickly.  
That’s exactly how we think of most machine‑learning models.  

*Model*: the “black box” that receives data (the input) and spits out a decision, prediction, or recommendation (the output).  
*Training data*: the set of examples we give it so it learns what patterns usually lead to which outcomes.  

When you use a trained model, you only need to know: if I feed it this input, will it say “yes” or “no”? You don’t have to trace every weight update or gradient step that happened during training—just the final mapping from inputs to outputs.  
So, like the car’s performance, we care about what the model does, not how its internal gears spin.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
