---
qid: ing_82e7d81988__star__local
question: 'What is the rejection rate? — Cursor Software Engineer Interview: Process,
  Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 335
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:01-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were launching an automated loan‑approval model that had to meet a regulatory compliance threshold: no more than 5 % of legitimate applicants could be incorrectly rejected (false negatives). The initial prototype was rejecting about 12 % of qualified customers.

**Task**  
My job was to reduce the rejection rate while keeping overall accuracy above 92 %. I needed to identify why the model was over‑penalizing certain applicant segments and adjust its decision boundary without sacrificing too many true positives.

**Action**  
I started by analyzing the confusion matrix per demographic group. Using Python’s scikit‑learn, I added a cost‑sensitive weighting to the logistic regression loss function, assigning a higher penalty to false negatives for high‑credit‑score bins. Then I implemented a threshold‑moving strategy: instead of the default 0.5 cutoff, I lowered it to 0.42 after cross‑validation on stratified folds. Finally, I incorporated an ensemble of XGBoost and CatBoost models to capture non‑linear interactions that were missing in the original pipeline.

**Result**  
The adjusted model cut the rejection rate from 12 % to 4.3 %, staying within the regulatory limit while improving overall precision by 1.7 %. I learned that carefully tuning class weights and decision thresholds can dramatically change business outcomes, and that continuous monitoring of segment‑level metrics is essential once a model goes live.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
