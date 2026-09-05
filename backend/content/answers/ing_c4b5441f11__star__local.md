---
qid: ing_c4b5441f11__star__local
question: Why Use Message Queues? — Message Queues | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 331
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:19-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time recommendation engine that processed clickstream data from millions of users per day. The raw events were streamed to our ingestion layer and immediately needed feature extraction before being fed into the model for inference.

**Task:**  
I had to decouple the high‑throughput event producer (the web front‑end) from the slower, CPU‑intensive feature extractor so that spikes in traffic wouldn’t overwhelm our ML pipeline or cause latency spikes for end users.

**Action:**  
We introduced Apache Kafka as a lightweight message queue. Producers pushed events into a topic with fine‑grained partitions; consumers—our microservices running on Kubernetes—pulled batches of 1,000 records at a time and ran Spark jobs to compute embeddings. We set up idempotent processing and used offset commits to guarantee at‑least‑once delivery. Kafka’s retention policy allowed us to replay data for model retraining without re‑ingesting from the source.

**Result:**  
Throughput increased by 4×, latency dropped from an average of 650 ms to under 200 ms, and we achieved a 99.9% success rate in feature extraction during traffic surges. The decoupled architecture also reduced infrastructure costs by 30% because we could scale consumers independently of producers. I learned that message queues are essential for building resilient, horizontally scalable ML pipelines where data velocity outpaces processing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
