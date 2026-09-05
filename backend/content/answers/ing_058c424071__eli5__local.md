---
qid: ing_058c424071__eli5__local
question: How can you detect overfitting? — What is Overfitting? - Overfitting in
  Machine Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 311
total_tokens: 483
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:44:12-05:00'
sources: []
---

**What’s overfitting?**  
Imagine a student who memorizes every single answer from last year’s exam book instead of learning the concepts. When the same questions appear again, they ace it— but if the new test has any different wording or a new question, they flounder. In machine‑learning terms, the model has “overfit” to its training data: it learns noise and quirks that don’t generalize to fresh examples.

**How do we spot it?**  
Use a *validation set*—a separate batch of data the model never sees during learning. After each training round, let the model predict on this validation set and record its error (accuracy or loss). If the training error keeps dropping while the validation error starts rising, that’s the classic over‑fitting sign: the model is getting better at memorizing the training set but worse at handling new data.

**Quick test:**  
1. Split your dataset into training + validation.  
2. Train the model and plot two curves: training error vs. epochs, validation error vs. epochs.  
3. Look for a point where validation error stops improving or climbs while training error keeps falling— that’s overfitting.  

When you see this pattern, it’s time to stop training, simplify the model, add regularization, or gather more data so the learner focuses on real patterns instead of memorizing noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
