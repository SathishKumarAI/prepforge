---
qid: ing_6c246e88c2__star__local
question: 'Explain: Data project checklist — fast.ai\u2014Making neural nets uncool
  again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 350
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:24-05:00'
sources: []
---

**Situation** – In my last role I was handed a brand‑new customer churn dataset that had never been cleaned or explored. The deadline to deliver a predictive model was only two weeks, and the product team wanted a quick win.

**Task** – My goal was to get from raw data to an actionable model in record time while ensuring reproducibility and maintainability. I decided to follow fast.ai’s “Data Project Checklist” so that nothing critical slipped through.

**Action** – First, I sketched a data map: defined target, features, and missing‑value patterns. Then I created a dedicated GitHub repo, added a README, and set up a `data/` folder with raw, processed, and final datasets. Using Jupyter notebooks, I documented every preprocessing step (encoding, scaling, outlier removal) and saved the pipeline in a `preprocess.py`. I ran sanity checks: feature distributions, correlation heatmaps, and class imbalance plots. Finally, I scripted an end‑to‑end training script (`train.py`) that pulled the processed data, trained a baseline XGBoost model, logged metrics to MLflow, and produced a production‑ready artifact.

**Result** – The churn model achieved 78% AUC within the two‑week window, exceeded the target KPI by 5%, and was deployed in production with full audit trails. I learned that a disciplined checklist not only speeds delivery but also builds trust with stakeholders through transparent, reproducible work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
