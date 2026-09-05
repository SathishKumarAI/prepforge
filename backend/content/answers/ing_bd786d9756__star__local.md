---
qid: ing_bd786d9756__star__local
question: 'Explain: Streaming and latency — Understanding latency | ElevenLabs Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:55-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were rolling out a real‑time fraud detection engine that ingested millions of transaction events per minute from our payment gateway. The existing batch model took 10 minutes to surface findings, which meant merchants could lose money before alerts hit their dashboards.

**Task** – I had to redesign the pipeline to deliver predictions with sub‑second latency while keeping cost and accuracy on par with the batch system. The goal was a 50 % reduction in end‑to‑end latency without dropping F1 score below 0.92.

**Action** – I implemented a Kafka‑based streaming architecture, using Apache Flink for stateful stream processing and TensorFlow Serving for inference. To keep latency low, I pre‑loaded the model into memory on each worker node, used GPU acceleration for dense layers, and applied event time windows of 100 ms to batch predictions in micro‑batches. I also introduced a custom backpressure strategy that throttled producers when downstream queues exceeded 200 kB, preventing overload.

**Result** – The new pipeline achieved an average latency of 180 ms from ingestion to alert, cutting the original 10‑minute delay by 99%. Accuracy remained at 0.93 F1. I learned that careful trade‑offs between micro‑batch size, model warm‑up, and backpressure can unlock real‑time ML without compromising quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
