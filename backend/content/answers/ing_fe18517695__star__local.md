---
qid: ing_fe18517695__star__local
question: 'Explain: From your test set evaluation (Step 6 from Chapter 4)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 340
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:52-05:00'
sources: []
---

**Situation** – While building a churn prediction model for a telecom client, our training accuracy was 94 %, but the internal audit flagged that we might be overfitting because the validation curve plateaued early. I needed to confirm that the model generalized well before deployment.

**Task** – Conduct a rigorous test‑set evaluation (Step 6 from Chapter 4) to quantify real‑world performance, identify bias across customer segments, and set an acceptance threshold for false positives.

**Action** – I pulled a held‑out 15 % of the original data, stratified by region and tenure. Using scikit‑learn’s `cross_val_score` with a custom scorer that combined AUC‑ROC and precision at 10 %, I ran 5‑fold cross‑validation to estimate variance. Then I plotted calibration curves, performed a Kolmogorov–Smirnov test against the training distribution, and computed the Brier score. Finally, I ran a cost‑benefit analysis in R, mapping each false positive to an estimated retention cost.

**Result** – The model achieved an AUC of 0.89 on the test set, with a Brier score drop from 0.12 (training) to 0.11, confirming good calibration. False positives were reduced by 18 % compared to the baseline logistic regression. I learned that early, quantitative testing prevents costly post‑deployment fixes and that balancing statistical metrics with business impact is essential for stakeholder buy‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
