---
qid: ing_07a4939542__star__local
question: 'Explain: Implementing k-fold cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 314
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:01-05:00'
sources: []
---

**Situation:**  
In a recent fraud‑detection project I was asked to evaluate a new gradient‑boosted model on a highly imbalanced dataset (only 3 % fraudulent transactions). The team wanted a robust estimate of performance before deploying it in production.

**Task:**  
I needed to implement k‑fold cross‑validation that would give us unbiased error metrics while keeping the class distribution roughly consistent across folds—without using the built‑in stratified split because our data were time‑stamped and we had to preserve chronological order within each fold.

**Action:**  
I wrote a custom splitter: first sorted the dataset by transaction timestamp, then partitioned it into k equal blocks. Within each block I performed a simple 80/20 shuffle to create training and validation subsets, ensuring that every fold received a proportional mix of fraud cases. I used scikit‑learn’s `KFold` for index generation and wrapped my logic in a reusable function so we could adjust k or the temporal window easily. During training I logged ROC‑AUC and PR‑AUC for each fold, then aggregated the results with standard deviation to assess variance.

**Result:**  
The cross‑validated AUC averaged 0.87 ± 0.02, an improvement over the baseline 0.83. The approach maintained temporal integrity while still providing a realistic performance estimate, and it taught me how to balance strict domain constraints with statistical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
