---
qid: ing_75c6faaf6c__star__local
question: 'Explain: So, in this example, we didn''t have — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 296
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:57-05:00'
sources: []
---

**Situation** – In my last role I was part of the data‑science team building an anomaly‑detection model for our IoT fleet. The metrics dashboard showed a 25 % false‑positive rate, which made the alerts useless to field engineers.  

**Task** – My job was to reduce that false‑positive rate below 10 % while keeping latency under 200 ms per prediction so we could still push real‑time alerts to our mobile app.

**Action** – I started by profiling the feature set with SHAP to identify which variables were contributing most to noisy predictions. I removed two highly correlated sensor columns and engineered a rolling‑average feature over the last ten minutes, then switched from a standard Random Forest to an XGBoost model with tuned tree depth (3) and learning rate (0.05). I also implemented a post‑processing threshold that varied by device type, learned via cross‑validation on a stratified split.

**Result** – The updated pipeline cut the false‑positive rate to 8 %, improving engineer productivity by roughly 30 % as measured in fewer alert review cycles per week. I also learned how careful feature selection and model hyper‑parameter tuning can deliver measurable impact faster than adding more data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
