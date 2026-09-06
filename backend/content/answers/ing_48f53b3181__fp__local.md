---
qid: ing_48f53b3181__fp__local
question: 'Explain: High and Low Database Cardinality Definition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 474
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:40:45-05:00'
sources: []
---

**Why do we care about database cardinality?**  
When a model ingests tabular data, each column is treated as an independent feature. The *entropy* (information content) of that feature governs how much it can help the learner split the training space. A column whose values repeat almost everywhere carries little discriminative power; its entropy is close to zero. Conversely, a column that takes many distinct values distributes information across many “bins,” allowing the learner to carve finer decision boundaries.

**Deriving the high/low definitions**  
Let \(X\) be a categorical attribute with domain size \(|\mathcal{D}_X|\).  
- *Low cardinality* means \(|\mathcal{D}_X| \ll N\), where \(N\) is the number of training instances. Then many rows share the same value, yielding high probability mass for a few symbols and low Shannon entropy:  
  \[
  H(X)= -\sum_{x}p(x)\log p(x) \approx 0.
  \]
- *High cardinality* means \(|\mathcal{D}_X| = O(N)\). The empirical distribution is spread thinly, \(p(x)\approx1/N\), giving  
  \[
  H(X)\approx \log N,
  \]
  close to the maximum entropy for that alphabet size.

**Deep insight**  
High‑cardinality columns often encode *identifiers* (user IDs, timestamps). While they have high entropy, they rarely help generalization because their values are unique per sample; models overfit by memorizing them. Recognizing this, practitioners either hash/embedd such features or drop them—an application of the *bias‑variance trade‑off*: reduce variance by discarding noisy high‑entropy inputs that offer little predictive signal.

> **Non‑obvious takeaway:**  
> A feature’s cardinality is not a proxy for usefulness; it signals *how many independent samples* the learner can effectively use to estimate its conditional distribution. High cardinality without repeated patterns yields low effective sample size, leading to overfitting rather than richer representation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
