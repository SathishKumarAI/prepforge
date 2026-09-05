---
qid: ing_5dc0f45aaa__star__local
question: 'Explain: >> We have not. We did try — Anomaly Detection: Algorithms, Explanations,
  Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 323
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:43-05:00'
sources: []
---

**Situation** – At my previous company we had a real‑time fraud monitoring platform that processed over 1 M transactions per day. The alert rate was creeping up to 12 % and the false positive cost us roughly $2 k per incident, so the product team asked me to cut the noise while keeping true positives.

**Task** – Design an anomaly detection pipeline that could flag suspicious patterns in transaction streams with < 5 % false positives and provide interpretable explanations for each alert.

**Action** – I first cleaned the data (imputed missing values, encoded categorical fields) and engineered features such as time‑of‑day velocity, device fingerprint similarity, and merchant deviation scores. I then compared three models: Isolation Forest, One‑Class SVM, and a lightweight autoencoder. After cross‑validation I chose Isolation Forest for its speed and built an explainability layer using SHAP values to surface the top 3 contributing features per alert. I deployed the model in a Lambda function that processed each transaction within 200 ms and routed alerts through an A/B testing loop.

**Result** – The new system cut false positives by 48 % (down to 6 %) while maintaining a 97 % true‑positive rate, saving the company ~$300k annually. I learned how to balance model complexity with latency constraints and that interpretable signals drive stakeholder trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
