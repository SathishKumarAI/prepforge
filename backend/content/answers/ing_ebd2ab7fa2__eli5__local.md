---
qid: ing_ebd2ab7fa2__eli5__local
question: 'Explain: Start building in the console — What is Overfitting? - Overfitting
  in Machine Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 197
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:48-05:00'
sources: []
---

Think of training a model like teaching a student to recognize cats by showing them pictures.  
If you only show the same handful of photos over and over, the student learns every tiny detail—like the exact pattern on one cat’s fur or the angle in which it was taken—but struggles when a new photo arrives. That’s **overfitting**: the model memorizes the training data instead of learning general rules that apply to all cats.

In machine‑learning terms, overfitting happens when a model becomes too complex for the amount of data you give it. It captures noise and quirks rather than underlying patterns, so its performance drops on fresh, unseen data.  
To avoid it, we keep the model simpler, add more varied training examples, or use tricks like “dropout” to force the model to learn robust features instead of memorizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
