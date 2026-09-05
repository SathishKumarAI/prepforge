---
qid: vq_61996427b2__fp__local
question: What is the definition of recall?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 386
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:36-05:00'
sources: []
---

**Recall (sensitivity)** measures how well a model *recovers* every relevant instance in the data.  
Suppose we have a binary decision problem: each example is either **positive** (relevant) or **negative** (irrelevant). Let  

- \(TP\): true positives – correctly identified relevant items,  
- \(FN\): false negatives – missed relevant items.

Recall is defined as  

\[
\text{Recall} = \frac{TP}{TP + FN}.
\]

Why this ratio?  
From an *information‑theoretic* viewpoint, the set of all positives is a ground truth distribution. The model’s task is to sample from it without bias toward negatives. \(TP+FN\) counts **all** true positives in the dataset; \(TP\) counts only those we actually captured. Thus recall quantifies *coverage*—the fraction of the target distribution that our predictions cover.

Geometrically, think of a decision boundary slicing a space of points. Recall is proportional to the volume of the positive class that lies on the “correct side” of this boundary. Maximizing recall forces the boundary to shift toward encompassing more positives, often at the cost of including negatives (lower precision).

**Non‑obvious insight:**  
Recall alone ignores *how many* negatives are misclassified. In highly imbalanced data, a model can achieve high recall by labeling everything positive. Therefore, recall must be paired with precision or a trade‑off metric (e.g., F1) to ensure the boundary is not trivially overinclusive. This coupling reflects the deeper principle that **utility depends on both coverage and specificity**, mirroring resource allocation in optimal decision theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
