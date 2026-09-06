---
qid: ing_4a8120de09__fp__local
question: What is stratified sampling? — What is Stratified Cross-Validation in Machine
  Learning? | Towards Data Science
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 431
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:43:43-05:00'
sources: []
---

**Stratified sampling** tackles the *representation bias* that arises when a dataset’s classes are imbalanced.  
At its core, we want each draw of data to preserve the empirical distribution \(p(y)\) of labels so that any downstream model sees the same class proportions as the full population.  

Mathematically, if we split a set \(D\) into training and test subsets \(T\) and \(V\), we require  
\[
\frac{|T \cap C_k|}{|T|}\approx \frac{|C_k|}{|D|}
\quad\text{and}\quad
\frac{|V \cap C_k|}{|V|}\approx \frac{|C_k|}{|D|}
\]
for every class \(k\).  This guarantees that the empirical risk minimizer on \(T\) is statistically comparable to the true risk over \(D\).

**Stratified cross‑validation (CV)** extends this idea to the k‑fold CV protocol.  
Instead of randomly partitioning, we first *stratify* each fold so every fold contains the same class proportions as the whole dataset.  The algorithm:

1. For each class, shuffle its indices and split them into \(k\) roughly equal groups.
2. Assemble each fold by taking one group from every class.
3. Train on \(k-1\) folds, validate on the remaining one; repeat.

This procedure reduces variance in performance estimates because each validation set is a mini‑population mirroring the full data distribution.  

**Non‑obvious insight:** In highly imbalanced problems, a single minority instance can dominate the error metric if it falls into a test fold by chance.  Stratified CV ensures that such instances are *systematically* present in every fold, turning the CV estimate from an *adversarial* sampling problem into a *fair* one—essential for reliable model selection and hyper‑parameter tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
