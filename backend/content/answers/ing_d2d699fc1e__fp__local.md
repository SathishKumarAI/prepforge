---
qid: ing_d2d699fc1e__fp__local
question: What is Cross-Validation? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 401
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:18-05:00'
sources: []
---

**Cross‑validation: a principled estimate of generalisation**

The core problem ML solves is *prediction on unseen data*.  
If we simply fit a model \(f_\theta\) on the whole training set and report its error there, we get an optimistically biased estimate—our model has memorised idiosyncrasies rather than learned structure.  

Cross‑validation addresses this by **partitioning** the data into \(K\) disjoint folds \(\{S_1,\dots,S_K\}\).  
For each fold \(k\), we train on \(\bigcup_{j\neq k} S_j\) and evaluate on \(S_k\). The performance metric (e.g., MSE, accuracy) is averaged over all \(K\) trials:

\[
\hat{E}_{CV}= \frac1K \sum_{k=1}^{K}\text{metric}(f_{\theta^{-k}}, S_k).
\]

This procedure mimics the *train‑test* split that will happen in deployment, but uses every sample once as test data.  

From an optimisation viewpoint, CV approximates the **expected loss** \( \mathbb{E}_{(x,y)\sim D}[L(f_\theta(x),y)] \) by sampling from the empirical distribution; it reduces variance relative to a single split and yields a nearly unbiased estimator of true error.  

A subtle insight: *CV is not just a diagnostic tool—it can be embedded in the optimisation loop itself*. Techniques like **nested CV** or **Bayesian optimisation with cross‑validated scores** use the CV estimate as part of the objective, ensuring that hyperparameter tuning is directly guided by generalisation performance rather than overfitting on a single holdout set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
