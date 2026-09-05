---
qid: vq_64de8d0edb__eli5__local
question: How will you balance/correct data that is unbalanced?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 217
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:46-05:00'
sources: []
---

Imagine a classroom where most students sit in the front row and only a few sit in the back. If you try to teach everyone equally, the teacher will spend too much time on the front‑row kids because they dominate the discussion. To balance this, the teacher can shuffle seats or give extra attention to the back‑row students so each group gets fair participation.

In AI, “unbalanced data” is like that classroom: one class (e.g., “cat”) appears far more often than another (“dog”). Models learn to favor the frequent class because it’s easier to predict. To correct this, we can **resample** the data—duplicate minority examples or remove some majority ones—or use **cost‑sensitive learning**, which tells the model that misclassifying a rare item is worse. These tricks give every class an equal chance, just as the teacher reshuffles seats for a fair lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
