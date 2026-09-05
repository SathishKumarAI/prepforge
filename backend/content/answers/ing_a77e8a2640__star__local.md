---
qid: ing_a77e8a2640__star__local
question: 'Explain: Publisher-Subscriber Model (Pub/Sub) — Pubsubmodel'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:37-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had an event‑driven architecture that fed our fraud detection pipeline. Our real‑time data ingestion was lagging; the model scored incoming transactions in batches every 10 seconds, causing a 3‑second delay between transaction and alert.

**Task** – I needed to redesign the workflow so that each new transaction triggered an immediate prediction without waiting for batch windows, while keeping latency under 200 ms and scaling to 50k events per second during peak hours.

**Action** – I introduced a Google Cloud Pub/Sub layer between the ingestion service (Kafka) and the inference microservice. Each transaction was published as a message with metadata; a subscription pulled messages using push delivery to an autoscaling Cloud Run container that ran our TensorFlow model on GPU instances. I added dead‑letter topics for failed predictions, set QoS to 1 to guarantee at least once delivery, and used Pub/Sub’s flow control to throttle back during traffic spikes.

**Result** – Prediction latency dropped from 10 s to under 150 ms on average, reducing false negatives by 18% in our fraud metrics. The system handled a 120% increase in load during a promotional period without any manual intervention. I learned that decoupling with Pub/Sub not only improves scalability but also simplifies monitoring and fault isolation for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
