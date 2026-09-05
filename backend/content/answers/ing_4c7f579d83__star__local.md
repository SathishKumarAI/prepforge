---
qid: ing_4c7f579d83__star__local
question: 'Explain: Now what that would do is it — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 379
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:20-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new real‑time traffic prediction feature for our navigation app, but the existing rule‑based model was only 60 % accurate during rush hours and lagged behind competitors.

**Task:**  
I had to design an end‑to‑end ML pipeline that could ingest live GPS streams, learn from historical patterns, and output a confidence‑scored ETA in under 200 ms so it wouldn’t disrupt the user experience.

**Action:**  
I first built a data ingestion layer with Kafka and Spark Streaming to aggregate millions of trip records per day. For modeling I chose a lightweight LSTM‑based sequence model trained on TensorFlow, then wrapped it in a TensorRT inference engine for GPU acceleration. To handle concept drift I set up a continuous retraining job that pulled the newest week’s data every 12 hours and used Hyperopt to tune hyperparameters automatically. On the production side I deployed the model behind a Kubernetes autoscaler, adding a fallback rule‑based fallback if latency exceeded 200 ms.

**Result:**  
The new system improved ETA accuracy from 60 % to 85 % during peak periods, cutting average detour time by 12 %. Latency stayed below 190 ms for 99.5 % of requests. I learned that balancing model complexity with inference speed is crucial in a user‑facing navigation service, and that automated retraining pipelines keep the model relevant without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
