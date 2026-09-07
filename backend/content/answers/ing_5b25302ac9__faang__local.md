---
qid: ing_5b25302ac9__faang__local
question: 'Explain: What is data leakage? Give me three subtle examples you''ve seen
  or could imagine, and how you''d detect them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 491
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:15-05:00'
sources: []
---

**Clarify**  
Data leakage occurs when information from outside the training set inadvertently influences model predictions, leading to overly optimistic performance estimates and poor generalization.

**Approach**  
1. Identify where a target‑related signal might seep into features or preprocessing.  
2. Inspect data pipelines for temporal or cohort mis‑grouping.  
3. Validate with cross‑validation that no leakage persists.

**Depth – Three Subtle Examples**

| # | Scenario | Why it leaks | Detection |
|---|----------|--------------|-----------|
| 1 | **Target‑informed encoding** – Using the target to compute a mean‐encoding of a categorical variable (e.g., “average churn rate by region”) before splitting. | The encoding carries target information, inflating accuracy. | Compute the encoding *after* creating train/test splits; compare correlation of encoded values with the target in both sets. |
| 2 | **Temporal overlap** – In time‑series forecasting, a feature derived from future dates (e.g., “next month’s sales trend”) is included during training. | The model learns future patterns that won’t exist at prediction time. | Plot feature values against timestamps; check for any data points where the feature uses values beyond the target horizon. |
| 3 | **External cohort contamination** – A validation set contains customers who were part of a previous marketing campaign used to build a propensity score, and that same score is fed into the model. | The score encodes campaign exposure, which isn’t available at deployment. | Run an ablation study: remove the suspect feature and observe performance drop; or perform a permutation test to see if the feature’s importance persists after shuffling labels. |

**Edge Cases**  
- Multi‑step pipelines where leakage can appear in later stages (e.g., imputation based on the entire dataset).  
- Hierarchical data where group identifiers leak across folds.

**Optimize & Communicate**  
Use nested cross‑validation and keep a strict “train → preprocess → transform” order. Document each preprocessing step and its scope to prevent accidental leakage, and continuously audit new features with correlation checks against future labels. This disciplined pipeline ensures robust, real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
