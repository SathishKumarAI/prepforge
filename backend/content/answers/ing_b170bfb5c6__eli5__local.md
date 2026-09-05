---
qid: ing_b170bfb5c6__eli5__local
question: 'Explain: The other thing that''s pretty important is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 215
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:10-05:00'
sources: []
---

In machine learning, one more thing that’s really crucial is **over‑fitting**.  
Think of a student who memorizes every answer to a past exam instead of learning the concepts. When a new test comes, they’re stuck with those exact answers and can’t solve any different questions.  
A model behaves the same way when it sees data it has already “studied” during training; it performs brilliantly on that set but fails on fresh, real‑world inputs.  

To avoid this, we give the model a small “practice exam” (validation data) while training and stop learning once its performance on that practice stops improving. That way the model keeps only the useful patterns—just like a student who understands the underlying math rather than the specific answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
