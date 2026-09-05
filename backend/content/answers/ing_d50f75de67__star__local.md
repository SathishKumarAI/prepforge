---
qid: ing_d50f75de67__star__local
question: 'Explain: But, all I''ll say is that in — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 333
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:01-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, our fraud‑monitoring dashboard was flagging too many false positives—about 35% of alerts were legitimate transactions. This clogged the compliance team’s workflow and delayed genuine fraud investigations.

**Task**  
I had to design an anomaly detection system that reduced false positives by at least 20% while maintaining high recall for real fraud cases, and provide clear explanations so analysts could trust the model’s decisions.

**Action**  
I chose a hybrid approach: a One‑Class SVM for detecting global outliers on transaction features (amount, time, geolocation) and an Isolation Forest to capture local anomalies. I engineered explainability with SHAP values per alert, visualizing feature contributions in Tableau dashboards. To tune the trade‑off between precision and recall, I used a cost‑sensitive loss function that penalized false positives more heavily. The pipeline was built in Python (scikit‑learn, SHAP) and deployed on AWS Lambda for real‑time scoring, feeding results into our existing Kafka stream.

**Result**  
After three weeks of A/B testing, false positives dropped from 35% to 18%, a 48% reduction, while fraud detection recall stayed at 92%. Analysts reported that the SHAP visualizations helped them triage alerts faster, cutting investigation time by 30%. I learned that combining global and local models with transparent explanations is key for operational ML in high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
