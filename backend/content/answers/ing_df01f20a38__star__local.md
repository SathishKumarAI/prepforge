---
qid: ing_df01f20a38__star__local
question: Should you use an event-driven architecture?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 308
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:41-05:00'
sources: []
---

**Situation:**  
At my last startup we built a recommendation engine that processed user clicks in real time. Our batch‑processing model had a lag of about 12 hours, so new content was often stale when it hit the dashboard.

**Task:**  
I needed to reduce prediction latency to under 200 ms while keeping the training pipeline scalable for millions of events per day.

**Action:**  
I proposed an event‑driven architecture. Using Kafka as a log, each click generated a lightweight JSON message that triggered two downstream services: (1) a “feature enrichment” microservice in Go that pulled user and item embeddings from Redis, and (2) a TensorFlow Serving endpoint that returned a score. I added a small buffer queue in RabbitMQ to smooth bursts during peak hours, and employed Prometheus alerts for back‑pressure. For training, I set up a Spark Structured Streaming job that consumed the same Kafka topic to update the model nightly.

**Result:**  
Prediction latency dropped from 12 hours to <200 ms, increasing user engagement by 18 %. The streaming pipeline handled 2 M events/second with <5 % error rate. I learned that coupling lightweight event streams with stateless services gives both low latency and easy horizontal scaling, but careful back‑pressure handling is essential to avoid data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
