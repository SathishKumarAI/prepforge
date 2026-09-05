---
qid: ing_a7a7b7bb00__eli5__local
question: 'Explain: thing that we are thinking of differently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 226
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:03:31-05:00'
sources: []
---

**What is “over‑learning” (overfitting) in machine learning?**

Imagine you’re a student who has memorized the exact answers to every practice test question, but never learned how to solve new ones. When your teacher gives a fresh exam, you stumble because you only know those specific questions.

In the same way, an over‑trained model learns the *noise*—the random quirks—in its training data instead of the underlying pattern that applies to all data. It performs wonderfully on the data it saw but poorly on anything new.  

To avoid this, we give the model a bit of “room” by testing it on unseen examples (validation data) and stopping when its performance stops improving. This keeps the model focused on the real signal rather than the accidental details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
