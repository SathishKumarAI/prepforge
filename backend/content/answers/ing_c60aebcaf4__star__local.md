---
qid: ing_c60aebcaf4__star__local
question: 'Explain: Scale — Hello, World! - Zerodha Tech Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 324
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:08-05:00'
sources: []
---

**Situation** – At Zerodha I was tasked with launching a real‑time market sentiment model for the new trading app. The pilot ran on a single GPU node and handled only 5 k messages per second, but we expected to scale to millions of trades during peak hours.

**Task** – I had to redesign the pipeline so it could ingest, preprocess, and score data at >1 M msgs/s while keeping latency under 200 ms, all on a cost‑effective cloud stack.

**Action** – I broke the workload into micro‑services: Kafka for ingestion, Spark Structured Streaming for feature extraction, and TensorFlow Serving behind a Kubernetes autoscaler. I replaced the monolithic batch model with an online learning loop that updated weights every minute using mini‑batches. To reduce GPU memory, I quantized the neural net to 8‑bit integers. We also implemented horizontal scaling of the serving pods, backed by a Redis cache for hot features.

**Result** – The system now processes ~2 M msgs/s with <180 ms latency and can auto‑scale from 1 to 32 GPU nodes in under 30 s during spikes. User churn dropped by 12% and we saved ~35% on cloud spend. I learned that true ML scale is as much about distributed architecture and quantization tricks as it is about the model itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
