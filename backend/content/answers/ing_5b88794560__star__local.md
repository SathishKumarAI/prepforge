---
qid: ing_5b88794560__star__local
question: 'Explain: Scalability and Performance — Must Know System Design Building
  Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 311
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:27-05:00'
sources: []
---

**Situation:** At my previous startup we launched a recommendation engine that served 300,000 daily active users. The first week of traffic exceeded our batch‑processing pipeline, causing a 40 % increase in latency and a spike in GPU queue times.

**Task:** I had to redesign the inference architecture so it could scale horizontally, reduce end‑to‑end latency below 200 ms, and keep cost per request under $0.02.

**Action:** First, I split the model into two microservices: a lightweight feature‑engineering layer on Kubernetes using TensorFlow Serving, and a heavy transformer inference service behind an Nginx load balancer. I added autoscaling rules tied to GPU utilization and implemented a Redis cache for frequently requested embeddings. For data flow, I switched from batch ETL to a Kafka stream that pushed real‑time user interactions directly into the feature store. Finally, I containerized the services with Docker Compose and used Prometheus/Grafana to monitor latency and queue depth.

**Result:** After deployment, request latency dropped to 140 ms on average, GPU utilization stabilized at ~65 %, and cost per inference fell from $0.04 to $0.018. The system now supports 1.2 M concurrent users with linear scaling, and I learned that decoupling feature extraction from heavy model inference is key for ML scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
