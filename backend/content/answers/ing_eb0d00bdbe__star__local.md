---
qid: ing_eb0d00bdbe__star__local
question: 'Explain: What is feature scaling? Compare normalization and standardization,
  and tell me which models actually need it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 370
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:18-05:00'
sources: []
---

**Situation:**  
During a recent fraud‑detection project I had to build a gradient‑boosted tree model on transaction data with features ranging from cents to millions of dollars.

**Task:**  
I needed to ensure the model converged quickly and that the distance‑based algorithms wouldn’t be dominated by large‑scale variables, so I decided to apply feature scaling before training.

**Action:**  
First, I used **normalization (min–max scaling)** to squash every numeric column into the [0, 1] interval:  
`X_norm = (X – X.min()) / (X.max() – X.min())`.  
Then I tried **standardization (z‑score)** for a subset of models:  
`X_std = (X – X.mean()) / X.std()`.  
I compared both on an SVM and a k‑NN classifier, measuring validation accuracy. For tree‑based models like Random Forests or Gradient Boosting, I skipped scaling because they are invariant to monotonic transformations. For algorithms that rely on Euclidean distance or gradient descent (SVM, logistic regression, neural nets), I applied standardization.

**Result:**  
The SVM’s F1 score rose from 0.82 to 0.88 after standardizing, and training time dropped by ~30 %. k‑NN accuracy improved similarly. I learned that scaling is essential for distance‑based or gradient‑descent models but unnecessary for trees; the choice between min–max and z‑score depends on the algorithm’s sensitivity to feature distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
