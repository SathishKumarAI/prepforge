---
qid: ing_5b25302ac9__fp__local
question: 'Explain: What is data leakage? Give me three subtle examples you''ve seen
  or could imagine, and how you''d detect them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 567
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:17:54-05:00'
sources: []
---

### From first principles

In supervised learning the *model* must learn a mapping \(y=f(x)\) that generalises beyond the data it was trained on.  
**Data leakage** occurs when information from the target or future test instances sneaks into the training process, effectively giving the model an unfair advantage.  
It is not a flaw of the algorithm but a violation of the *independence* assumption between train and test sets.

### Why it must be prevented

If the model has seen even a noisy hint about \(y\) during training, its performance on new data will be optimistically inflated.  
This misleads evaluation metrics and can cause catastrophic failures when deployed.  

---

## Three subtle leakage scenarios

| # | Scenario | Why it leaks | How to detect |
|---|----------|--------------|---------------|
| 1 | **Feature derived from future timestamps** – e.g., a “time‑to‑event” column calculated as `t_event - t_current` during preprocessing. | The model learns the exact interval to the event, which is impossible at prediction time. | Run a *train‑test split* that preserves chronology; check that the feature distribution in test matches training but contains no future dates. |
| 2 | **Target‑informed imputation** – imputing missing values using `np.mean(y)` or median of all target values. | The imputed value carries information about the label, so the model indirectly sees \(y\). | Re‑impute after splitting: compute mean/median only on training set; compare distribution of imputed values in train vs test. |
| 3 | **Cross‑fold feature selection** – selecting top‑k features using a permutation importance computed on the full dataset before cross‑validation. | The importance scores are influenced by the entire data, including the validation folds. | Perform feature selection *inside* each CV fold; or use nested CV and verify that selected features differ across folds. |

---

### Detecting leakage in practice

1. **Temporal sanity checks** – ensure no future information is used when predicting past events.  
2. **Feature‑target correlation scan** – compute point‑biserial (or mutual information) between each feature and the target; unusually high values may hint at leakage.  
3. **Train‑test consistency tests** – apply a statistical test (e.g., Kolmogorov–Smirnov) to compare distributions of engineered features across splits.

By grounding your pipeline in these principles, you guard against the *hidden shortcut* that data leakage offers and preserve genuine generalisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
