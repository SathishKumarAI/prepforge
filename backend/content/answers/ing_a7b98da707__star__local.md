---
qid: ing_a7b98da707__star__local
question: 'Explain: Look, we remove the duplication and also'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 305
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:12-05:00'
sources: []
---

**Situation**  
In a credit‑risk model for a fintech startup, our training set had over 10,000 records but 1,200 duplicated rows from an earlier data merge. The duplicates were inflating the class imbalance and skewing feature importance.

**Task**  
I needed to clean the dataset, remove exact row duplicates, then re‑evaluate the model so that performance metrics reflected true predictive power without bias.

**Action**  
Using pandas, I ran `df.drop_duplicates(subset=None, keep='first')`, which removed 1,200 identical rows. Then I recomputed class weights and retrained a LightGBM classifier with 5‑fold cross‑validation. I also plotted SHAP values before and after cleaning to confirm that feature importances had stabilized. Finally, I compared ROC‑AUC scores: pre‑cleaning was 0.78; post‑cleaning it rose to 0.82.

**Result**  
The cleaned model achieved a 4% lift in AUC and reduced false positives by 12%, leading the product team to adopt it for live scoring. I learned that even simple deduplication can dramatically improve model reliability, and that validating feature importance post‑cleaning ensures we’re not chasing artifacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
