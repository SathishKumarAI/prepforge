---
qid: ing_560ac65998__star__local
question: 'Explain: Key Characteristics: — Batch vs Stream Processing - What''s the
  Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 289
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:56-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection pilot at my previous fintech company, we were asked to transition from our overnight batch scoring pipeline to real‑time alerting for card transactions.  

**Task** – I had to design an architecture that could ingest millions of events per day, score them with our ML model, and trigger alerts within seconds, while keeping latency under 500 ms and maintaining the same prediction accuracy as the batch system.

**Action** – First, I mapped out the data flow: a Kafka topic for raw transactions, a Flink job that performed feature engineering on each event, and a TensorFlow Serving endpoint that delivered predictions. To handle scale, I used windowed aggregations in Flink to compute rolling statistics (e.g., 30‑minute spend) and added a fallback batch job that ran every hour to refresh the model weights from our training cluster. I also implemented back‑pressure handling and circuit breakers so that if the inference service lagged, events would be queued rather than dropped.

**Result** – The stream pipeline cut fraud detection latency from 1 hour to under 200 ms, increasing detected fraudulent transactions by 35% in the first quarter. I learned how to balance throughput, fault tolerance, and model fidelity when moving from batch to stream processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
