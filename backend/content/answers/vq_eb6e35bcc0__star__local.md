---
qid: vq_eb6e35bcc0__star__local
question: What is Machine Learning Bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 291
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:31-05:00'
sources: []
---

**Situation** – While leading a product‑launch for our recommendation engine at a mid‑size e‑commerce firm, we noticed that the click‑through rate (CTR) for newly added categories was consistently 30% lower than the overall average.

**Task** – I needed to investigate whether our model was unintentionally disadvantaging those categories and devise a fix that wouldn’t hurt performance elsewhere.

**Action** – First, I ran an audit of feature importance and discovered that the training set had 80% fewer historical interactions for the new categories. To correct this, I implemented a re‑weighting scheme using scikit‑learn’s `class_weight` and added synthetic samples via SMOTE to balance the data. I also introduced a domain‑specific feature—“category freshness”—to help the model learn recent trends. After retraining, I deployed A/B tests with 10k users per group.

**Result** – The CTR for the previously underperforming categories rose from 1.8% to 2.6%, a 44% lift, while overall recommendation accuracy only dropped by 0.3%. This exercise taught me that bias often originates from data imbalance and can be mitigated with thoughtful re‑weighting and feature engineering rather than model overhaul.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
