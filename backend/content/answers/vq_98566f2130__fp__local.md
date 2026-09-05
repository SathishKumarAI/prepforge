---
qid: vq_98566f2130__fp__local
question: When to do re-sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 382
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:47:26-05:00'
sources: []
---

**When should you resample data?**

At its core, resampling is a *variance‑bias trade‑off* tool: we perturb the training set so that a model’s empirical risk estimate better reflects the true underlying distribution.  
1. **Class imbalance or rare events** – If the loss function treats misclassifications symmetrically (e.g., cross‑entropy), an underrepresented class will be ignored by the optimiser. Oversampling it (or undersampling the majority) restores the marginal probability mass so that gradients point toward a decision boundary that is *fair* in expectation.  
2. **High‑variance estimators** – When training on a small, noisy sample, bootstrap or bagging reduces variance by averaging over many perturbed datasets; each resample is an independent draw from the empirical distribution, yielding an unbiased estimator of the population risk.  
3. **Cross‑validation and model selection** – Resampling is mandatory to estimate generalisation error without leakage: each fold is a new random partition that mimics drawing fresh data from the same process.

*Non‑obvious insight:*  
Resampling does **not** magically “create” information; it only reshapes *how much* the optimiser cares about different parts of the space. If you oversample too aggressively, you effectively *inflate* the likelihood of those points and can drive the model toward overfitting them—this is why techniques like SMOTE or stratified sampling add a small perturbation rather than exact copies.

In short: resample when the empirical distribution misrepresents the target distribution in a way that harms either bias (class imbalance) or variance (small sample size). Otherwise, let the data speak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
