---
qid: ing_1848b00583__eli5__local
question: Why does overfitting occur? — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 242
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:14:05-05:00'
sources: []
---

Imagine you’re a student who memorizes the exact answers to a single past exam paper and then gets asked the same questions again. You answer perfectly because you’ve learned those specific answers, but if the next test has any new wording or extra questions, you’ll stumble—because you never learned how to think about the subject, only that one set of answers.

In machine learning, a model is like that student. It “learns” by adjusting its internal settings (weights) to match the training data exactly. When it gets so good at reproducing those particular examples, it starts fitting noise—random quirks or outliers—in the data instead of the true underlying pattern. That’s overfitting: the model performs great on the data it saw but poorly on new, unseen data.

To avoid this, we give the model more varied practice (more data), simplify its structure (fewer parameters), or use techniques like cross‑validation that test it on fresh examples while training. The goal is a model that understands the general rules, not just memorized answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
