---
qid: ing_592d6c3557__star__local
question: 'Explain: Uber — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 381
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:10-05:00'
sources: []
---

**Situation:** During a remote interview with Uber’s data science team, the interviewer asked me to walk through how I’d approach building an anomaly detection model for real‑time ride‑hailing demand spikes—a question that had appeared in several recent Faang interviews.

**Task:** I needed to explain my end‑to‑end solution—data ingestion, feature engineering, model choice, deployment pipeline—and justify why it fits Uber’s latency and scalability constraints.

**Action:** I started by outlining the data stack: Kafka streams feeding into a Spark Structured Streaming job that aggregates trip counts per 5‑minute window. For features, I used lagged demand, weather embeddings from OpenWeatherMap, and a rolling mean of driver supply. I chose Isolation Forest for its unsupervised nature and low inference cost, then wrapped it in an ONNX model to serve via TensorRT on the edge servers. To validate, I ran a 30‑day backtest, tuning the contamination parameter with a grid search that reduced false positives by 18% while keeping true positive rate above 92%. I also described how we would monitor drift using a sliding window of AUC scores and trigger retraining every week.

**Result:** The prototype achieved a 5 ms inference latency on a single GPU, met Uber’s SLA for real‑time alerts, and cut the number of unnecessary surge price adjustments by 12% in our pilot. I learned that clear communication of trade‑offs—latency vs. accuracy, batch vs. streaming—is as critical as the technical details when pitching solutions to Faang interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
