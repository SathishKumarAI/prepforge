---
qid: ing_e20032339a__star__local
question: 'Explain: Recurring concept drift — What is concept drift in ML, and how
  to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 311
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:46-05:00'
sources: []
---

**Situation:**  
At my last role I was maintaining a churn‑prediction model for a SaaS platform with over 300k monthly users. Six months after launch, the lift dropped from 12% to just 3%, and we were losing revenue.

**Task:**  
I had to identify why the model performance slipped and rebuild it so that it stayed accurate in real time without manual retraining every week.

**Action:**  
First I plotted feature‑distribution histograms and drift metrics (KS‑statistic, Wasserstein distance) between training data and the last 30 days of production. The customer segment aged 18–24 had a sudden spike in usage patterns, indicating concept drift. I set up an online monitoring pipeline using **River** that streamed new samples through a sliding window and computed drift scores every hour. When the score exceeded a threshold, the system triggered an automated retraining job: we collected the latest 10k labeled instances, updated our **LightGBM** model, and deployed it via a blue‑green rollout. I also added a feedback loop where prediction errors were logged back into the data lake for continuous learning.

**Result:**  
Within two weeks of deployment, lift rebounded to 11%, bringing an estimated $450k in monthly revenue back. The monitoring system now alerts us within minutes of drift, reducing manual intervention by 70% and giving me confidence that the model adapts to changing user behavior automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
