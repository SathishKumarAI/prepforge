---
qid: ing_953189a38e__star__local
question: 'Explain: illegal with those fixed it''s now passing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 362
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:21-05:00'
sources: []
---

**Situation:**  
During the launch of our credit‑risk scoring model, the audit team flagged that the algorithm was “illegal” because it relied on a fixed set of demographic fields—age, gender, ZIP code—that had been pre‑encoded into the training data and caused disparate impact against protected classes. The regulatory deadline was in 12 days.

**Task:**  
I needed to redesign the feature pipeline so the model met compliance while retaining predictive power, all within the two‑week window before the go‑live.

**Action:**  
First, I performed a bias audit using Fairlearn’s DisparateImpactMetric to quantify the impact of each feature. Then I replaced the static demographic features with proxy variables derived from transactional behavior: average monthly spend, payment frequency, and account tenure. I used Scikit‑Learn’s ColumnTransformer to engineer these new columns on the fly, retrained a LightGBM model, and applied SHAP values to confirm that no single proxy drove bias. Finally, I validated the updated model against the same ROC‑AUC target (0.82) and performed a compliance review with legal.

**Result:**  
The revised model passed the audit with a disparate impact ratio of 1.05, meeting regulatory standards. Performance stayed within 1% of the original metric, and we launched on schedule. I learned that proactive bias auditing and dynamic feature engineering can turn an “illegal” design into a compliant, high‑quality solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
