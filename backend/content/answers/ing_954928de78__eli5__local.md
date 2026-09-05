---
qid: ing_954928de78__eli5__local
question: Derive cross-entropy loss from first principles. Why is it "the right" loss
  for classification and language modeling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 289
total_tokens: 460
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:34:27-05:00'
sources: []
---

Imagine you’re a teacher grading a multiple‑choice test.  
For each question the student gives a *probability* that each answer is correct (e.g., 0.8 for A, 0.1 for B, …).  
The real answer is one particular choice—call it the *true class*.  

Cross‑entropy loss says: “How surprised would you be if the true answer were chosen with the probabilities I gave?”  
If your probability for the correct answer is high (close to 1), surprise is low → small loss.  
If you put a tiny chance on the right answer, surprise is huge → big loss.

Mathematically we sum over all questions: **−log(probability of the true class)**.  
This formula comes directly from measuring *information* or “surprise” (the negative log‑likelihood) and matches how likely your model’s predictions are given the data.

Why it works for classification and language modeling?  
Both tasks ask a model to pick one item out of many possibilities (a word in a sentence, a class label).  
Cross‑entropy rewards putting probability mass on the true choice and penalizes misallocating it, exactly what we want. It’s simple, convex, and gives gradients that guide learning effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
