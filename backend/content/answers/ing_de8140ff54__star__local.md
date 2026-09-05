---
qid: ing_de8140ff54__star__local
question: 'Explain: So, we wanted to also then look — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 350
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:42-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our fraud team was struggling to flag suspicious credit‑card transactions in real time. The existing rule‑based system had a false‑positive rate of 12 % and missed about 25 % of actual fraud cases.

**Task** – I was tasked with designing an anomaly detection pipeline that could reduce false positives to below 5 % while catching at least 90 % of fraudulent activities, all within the latency constraints of our streaming platform (≤50 ms per event).

**Action** – I evaluated several unsupervised methods: Isolation Forest, One‑Class SVM, and autoencoder‑based reconstruction error. After prototyping on a 1 M transaction dataset, I chose an ensemble of Isolation Forest + PCA‑reduced autoencoder to capture both sparse outliers and subtle distribution shifts. I implemented the model in PySpark for batch training, then wrapped it as a REST microservice using FastAPI and deployed behind a Kafka consumer. To explain detections, I integrated SHAP values at the transaction level so analysts could see which features (e.g., geolocation mismatch, device ID churn) triggered alerts.

**Result** – The new system cut false positives from 12 % to 4.3 % and increased fraud detection from 25 % to 92 %. Latency stayed under 30 ms per event. I learned how blending statistical and deep‑learning approaches, coupled with explainability tooling, can turn a noisy anomaly detector into a production‑ready fraud guardrail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
