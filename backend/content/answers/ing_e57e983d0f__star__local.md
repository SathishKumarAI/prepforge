---
qid: ing_e57e983d0f__star__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 359
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:45-05:00'
sources: []
---

**Situation** – At my last startup we were building a sentiment‑analysis model for customer support tickets. The initial dataset had 12 k labeled examples, but our quarterly release deadline was tight and any overfitting would delay the launch.

**Task** – I needed to design a robust train/dev/test split that respected class balance, avoided data leakage from time‑based trends, and provided enough signal for hyperparameter tuning without compromising final evaluation integrity.

**Action** – First, I performed stratified sampling on the label distribution so each set reflected the 70/15/15 ratio while keeping rare classes represented. Next, to guard against temporal leakage, I sorted tickets by submission date and then split sequentially: the earliest 70 % for training, the middle 15 % as a development set for validation, and the newest 15 % reserved strictly for final testing. I scripted this in Python using `scikit‑learn`’s `StratifiedShuffleSplit` and stored each partition in Parquet files on S3 with clear metadata tags. Finally, I documented the process in our data‑engineering wiki so other teams could reproduce it.

**Result** – The model trained on 8 400 examples achieved a dev F1 of 0.84; after tuning, final test performance hit 0.86—an improvement over the baseline 0.80. The split strategy also reduced runtime by 20% because we avoided re‑training on overlapping data. I learned that meticulous, reproducible splitting is as critical to model quality as architecture choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
