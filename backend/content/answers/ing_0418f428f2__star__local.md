---
qid: ing_0418f428f2__star__local
question: 'Explain: Overview — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 355
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:58-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling the recommendation engine for a fast‑fashion e‑commerce platform that served millions of users daily. The existing batch pipeline could only update models once per day, causing stale recommendations during peak traffic.

**Task** – I needed to redesign the data ingestion and model training flow so that new user interactions (clicks, purchases, cart additions) would trigger near‑real‑time retraining and inference without disrupting the live service.

**Action** – I introduced an event‑driven architecture using Kafka as the central message bus. Each user action published a lightweight JSON event to a dedicated topic. A Spark Structured Streaming job consumed these events, aggregated them into micro‑batches every 30 seconds, and updated a feature store in Delta Lake. For model training, I leveraged Kubeflow Pipelines where a “training” pod was triggered by a Kafka consumer that watched a separate “train‑request” topic; this pod pulled the latest features, retrained a LightGBM model, and pushed it to an S3 bucket. The inference service, built on Flask and deployed in Kubernetes, subscribed to a “prediction” topic and fetched the newest model checkpoint via AWS Lambda whenever it changed.

**Result** – The new pipeline cut recommendation latency from 24 hours down to under 5 minutes, increasing click‑through rate by 18% and boosting revenue per session by $0.04. I learned that decoupling data flow with event streams not only improves freshness but also isolates failure domains, making the system far more resilient under traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
