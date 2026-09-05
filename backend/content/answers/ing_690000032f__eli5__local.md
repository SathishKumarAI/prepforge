---
qid: ing_690000032f__eli5__local
question: How can you prevent overfitting? — What is Overfitting? - Overfitting in
  Machine Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 313
total_tokens: 485
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:22:15-05:00'
sources: []
---

**What’s “overfitting”?**  
Imagine a student who memorises every single answer on a practice test but never learns the underlying concepts. When the real exam comes, they get stuck because the questions are slightly different. In machine learning, overfitting is when a model learns the training data too well—including its noise and quirks—so it can’t generalise to new, unseen data.

**Preventing it – like teaching good study habits**

| Prevention | Analogy |
|------------|---------|
| **Use more varied practice tests** (more data) | The student studies from many books, not just one textbook. |
| **Take breaks and review only key ideas** (regularisation) | Instead of cramming every detail, the student focuses on core concepts that apply everywhere. |
| **Test yourself early and often** (cross‑validation) | The student checks their understanding with quizzes during study, spotting weak spots before the final exam. |
| **Don’t keep every flashcard forever** (dropout / data augmentation) | Randomly forgetting some details forces the brain to find alternative paths to the answer. |

By mixing up training data, penalising overly complex models, validating on fresh examples, and occasionally “forgetting” parts of the data, we help the model learn patterns that truly matter—just like a student who can ace any exam, not just the one they memorised.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
