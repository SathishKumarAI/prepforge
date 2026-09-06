---
qid: ing_6792d11847__fp__local
question: Is accuracy always a good metric for classification performance?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 307
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:23-05:00'
sources: []
---

Accuracy is **not** universally the right yard‑stick for classification, and the reason lies in the geometry of error space rather than a superficial definition.

At its core, a classifier partitions feature space into decision regions. Accuracy measures how often these regions hit the correct label *on average*, but it ignores where mistakes occur. If the class distribution is skewed—say 95 % “negative” and 5 % “positive”—a trivial rule that always predicts negative achieves 95 % accuracy yet fails utterly on the minority class. The error surface here is asymmetric: a single false negative may be far more costly than a false positive, or vice versa.

From an information‑theoretic view, accuracy treats all misclassifications as equally distant points in label space; it ignores the *confusion matrix*’s structure. Metrics like precision, recall, F1, or area under the ROC curve weight errors according to their position on this surface, aligning with the underlying loss function (e.g., cross‑entropy) that drives learning.

**Non‑obvious insight:** In many practical problems, accuracy can *mask* systematic bias: a model may learn to exploit a spurious correlation present in training data (e.g., watermarks indicating class), yielding high accuracy but poor generalisation. Thus, accuracy is only reliable when the error distribution is homogeneous and the cost of all mistakes is identical—conditions rarely met outside toy datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
