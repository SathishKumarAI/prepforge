---
qid: ing_8e98d669d9__star__local
question: 'Explain: Sample questions — Anthropic Forward Deployed Engineer (FDE) Interview
  Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 374
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:57-05:00'
sources: []
---

**Situation:** In my last role at FinTechCo, the fraud‑alert rate for credit card transactions had spiked to 12 % over the past quarter, causing us to flag too many legitimate purchases and driving customer churn.

**Task:** I was tasked with reducing false positives by 30 % while keeping true‑positive detection above 95 %, all before the next regulatory audit in six weeks.

**Action:** I first performed an exploratory data analysis on our 5 M transaction logs, discovering a strong class imbalance (1:200 fraud to non‑fraud). I engineered new features—merchant category entropy and time‑to‑purchase variance—and built a LightGBM model with a custom focal loss to focus learning on the minority class. To avoid overfitting, I used 5‑fold cross‑validation and early stopping, then deployed the model via an Airflow DAG that refreshed predictions nightly. Finally, I set up a monitoring dashboard in Grafana showing precision/recall trends.

**Result:** Within four weeks, false positives dropped from 12 % to 7.8 %, meeting the 30 % target, while true‑positive rate improved to 96.5 %. The model’s impact was reflected in a 15 % lift in customer satisfaction scores and saved the company roughly $2 M annually in processing costs. I learned that balancing statistical rigor with operational pipelines is key to sustainable ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
