---
qid: ing_dca88d0083__fp__local
question: 'Explain: Implementing k-fold cross-validation with stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 481
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:48:25-05:00'
sources: []
---

**Why stratified k‑folds?**  
The core problem of model validation is estimating a predictor’s *generalised* error from a finite data set. If the target distribution is imbalanced (e.g., 95 % negatives, 5 % positives), a random split can produce folds that are unrepresentative: some folds may contain almost no positives, making their loss estimates meaningless and inflating variance across folds.

**Derivation of the algorithm**  
1. **Partition by class** – For each class \(c\) with sample size \(N_c\), create an index list.  
2. **Fold allocation** – Distribute indices into \(k\) folds so that each fold receives roughly \(\frac{N_c}{k}\) samples of class \(c\). This is simply a round‑robin or shuffled block assignment within the class list.  
3. **Training/validation loop** – For fold \(i\), train on all indices except those in fold \(i\); evaluate on fold \(i\).

Mathematically, let \(S_i\) be the set of training samples for fold \(i\). Because each \(S_i\) contains \(\frac{N_c}{k}\pm1\) examples of every class, the empirical distribution \(\hat P_{S_i}(y)\) is within \(O(1/k)\) of the true class proportions. This guarantees that the loss estimator
\[
\hat L = \frac{1}{k}\sum_{i=1}^k L(S_i)
\]
has reduced bias compared to naive k‑folds, especially when the cost function is sensitive to class imbalance (e.g., ROC‑AUC).

**Non‑obvious insight**  
Stratification does more than preserve class ratios; it *aligns* each fold’s posterior predictive distribution with that of the full data. Consequently, any bias introduced by uneven class priors—such as a classifier over‑fitting to majority classes—is mitigated uniformly across folds. This subtle alignment is why stratified k‑folds often yield tighter confidence intervals for performance metrics than their non‑stratified counterparts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
