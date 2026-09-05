---
qid: ing_c2f8499afc__star__local
question: 'Explain: Reference — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 339
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:43-05:00'
sources: []
---

**Situation:**  
In my last role, we were building a churn prediction model for a telecom client. The internal data lake had millions of call logs, but our initial training set was heavily skewed toward the most active customers.

**Task:**  
I needed to create a balanced reference cohort that truly represented the overall customer base, so that the model’s performance metrics would be realistic and not over‑optimistic.

**Action:**  
First, I extracted a random 10 % sample of all customers as a *reference* set. Using Spark SQL, I computed key churn indicators for each segment (age, tenure, plan type) and applied stratified sampling to preserve the same distribution in the reference cohort. The remaining 90 % became the *rest*, which we used for training and cross‑validation. During feature engineering, I anchored all time‑series features to the reference dates so that future predictions would be comparable. Finally, I evaluated the model on both subsets, noting that the reference set revealed a 12 % higher false‑positive rate than the rest.

**Result:**  
The adjusted training pipeline reduced churn prediction error from 18 % to 11 %. The exercise taught me that a carefully constructed reference cohort is essential for honest validation and for detecting dataset drift early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
