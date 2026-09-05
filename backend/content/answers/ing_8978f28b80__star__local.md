---
qid: ing_8978f28b80__star__local
question: How do you evaluate a model before and after fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 320
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:00-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had an NLP classification model that flagged potentially fraudulent transactions. The baseline accuracy was 87%, but our risk analysts were flagging too many false positives, hurting customer experience.

**Task:** I needed to evaluate the model before fine‑tuning, identify weaknesses, and then measure improvement after applying domain‑specific embeddings and a focal loss tweak to reduce misclassifications on minority fraud cases.

**Action:** First, I set up a comprehensive evaluation pipeline: we ran cross‑validation, plotted ROC curves, and computed precision‑recall for each class. We also logged per‑transaction confidence scores into an A/B test dashboard. After fine‑tuning with domain data, I re‑ran the same tests, added confusion matrix heatmaps, and performed a cost‑benefit analysis using our fraud loss model. I used TensorBoard to track metrics in real time and conducted a sanity check by manually reviewing 200 edge cases.

**Result:** Post‑fine‑tune, accuracy jumped to 94%, precision on fraud rose from 68% to 81%, and false positives dropped by 35%. Customer churn decreased by 12% in the pilot region. I learned that consistent, repeatable metrics across pre/post stages are essential for transparent model governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
