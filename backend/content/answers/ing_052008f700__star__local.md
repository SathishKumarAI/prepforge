---
qid: ing_052008f700__star__local
question: What goes wrong when you validate a model on time-ordered data, and how
  do you do it properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 320
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:39:06-05:00'
sources: []
---

**Situation:** In a recent project building a churn prediction model for a telecom provider, I noticed that the initial validation curves were unrealistically high—accuracy hovered around 92% compared to only 70% in production.

**Task:** My goal was to create a realistic evaluation pipeline that reflected real‑world performance on future customers while preventing data leakage from the past.

**Action:** First, I switched from random K‑fold cross‑validation to a rolling‑window approach. I sorted all customer records chronologically, then used a 70/15/15 split: the earliest 70% for training, the next 15% as a validation window, and the final 15% as a hold‑out test set. I also ensured that any engineered features (e.g., rolling averages of usage) were computed only from past data within each fold. During feature engineering, I used `scikit-learn`’s `TimeSeriesSplit` to automate this logic and logged the exact timestamps used in each split for reproducibility.

**Result:** The adjusted validation metrics dropped to a realistic 73% accuracy, aligning closely with the live test set (72%). This prevented over‑optimistic model selection, saved us from deploying a misleadingly good model, and taught me that respecting temporal order is critical when evaluating predictive models on time‑ordered data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
