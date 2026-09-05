---
qid: ing_f66a1cc67e__star__local
question: 'Explain: Train/dev/test split for the judge — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:32-05:00'
sources: []
---

**Situation:**  
When my team launched the new fraud‑detection model for our payment gateway, we had to prove its robustness before rolling it into production. The product owner insisted on a strict “eval gated CI/CD” pipeline: every pull request must pass an automated evaluation that mimics real‑world traffic.

**Task:**  
I was tasked with designing a reproducible data split—train, dev, and test—that would let the CI system evaluate model quality without leaking future information, while still reflecting operational load.

**Action:**  
I first pulled the last 90 days of transaction logs and sorted them by timestamp. I allocated the earliest 60 % to training, the next 20 % to a development set used for hyper‑parameter tuning, and kept the final 20 % as an untouched test set. To guard against concept drift, I added a stratified sampling step that preserved the fraud ratio across splits (≈1.2 %). In our CI pipeline, every merge triggered a containerized job that trained on the train split, evaluated on dev, and logged metrics to a central Grafana dashboard. The final test set was only run in a protected “release gate” after all checks passed.

**Result:**  
The gated CI process cut model deployment time from two weeks to three days and reduced post‑deployment fraud rates by 18 % within the first month. I learned that a carefully engineered train/dev/test split is not just data hygiene—it becomes the backbone of a trustworthy, automated release pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
