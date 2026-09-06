---
qid: ing_c8058a7c01__fp__local
question: 'Explain: Implementing hold-out cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 623
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:37-05:00'
sources: []
---

**Why a plain hold‑out split can mislead**

The goal of *hold‑out* (or *train/validation*) cross‑validation is to estimate the generalisation error of a model trained on data \(D\).  
We partition \(D\) into a training set \(T\) and a validation set \(V\), fit the model \(\hat f_T\) on \(T\) and evaluate its loss
\(L(\hat f_T,V)\).

If the target variable is categorical with imbalanced classes, the empirical distribution of each class in \(T\) may deviate from that in \(D\).  
Because many supervised algorithms (e.g., logistic regression, tree‑based learners) are *biased* toward the majority class, a biased training set produces a model that overfits the dominant class and under‑represents minority signals.  
Consequently, the validation loss will be optimistically low on the majority class but pessimistic for minorities, yielding an overall error estimate that is **not** representative of the true performance.

**Deriving the necessity of stratification**

Let \(p_k = \Pr(Y=k)\) denote the true class proportions and let \(\hat p_{k,T}\) be their empirical frequencies in \(T\).  
The expected validation loss can be written as

\[
\mathbb{E}[L] = \sum_k p_k\, \ell_k(\hat f_T),
\]

where \(\ell_k\) is the loss contribution from class \(k\).
If \(\hat p_{k,T} \neq p_k\), then \(\hat f_T\) will converge to a different minimiser of the *empirical* risk
\[
R_{\text{emp}}(f)=\sum_k \hat p_{k,T}\,\ell_k(f),
\]
which is a biased approximation of \(R(f)\).  
The bias in \(p_k\) propagates multiplicatively to the loss, especially when \(\ell_k\) is highly nonlinear (e.g., cross‑entropy).

**Non‑obvious insight**

Even if the overall class imbalance is modest, **variance inflation** occurs because the minority class has fewer samples to estimate its parameters.  
A plain hold‑out split can accidentally place all minority instances in \(V\), leaving \(T\) devoid of them.  
In that case, \(\hat f_T\) never learns a decision boundary for the minority class, and the validation loss becomes undefined or artificially high—an artefact of data partitioning rather than model deficiency.

**Bottom line**

To obtain an unbiased estimate of generalisation error on imbalanced problems, one must enforce *stratified* sampling so that each split preserves the true class proportions. Otherwise, the hold‑out CV will systematically misrepresent performance, especially for rare classes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
