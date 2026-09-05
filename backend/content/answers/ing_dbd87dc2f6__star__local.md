---
qid: ing_dbd87dc2f6__star__local
question: 'Explain: Precious Jewellery — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:35-05:00'
sources: []
---

**Situation** – In my last role I was part of a fintech startup that launched an online marketplace for rare precious jewellery. Our catalog had over 50,000 items and each product required real‑time pricing based on market trends, provenance scores, and customer demand. The existing system was batch‑oriented; price updates lagged by hours, causing lost sales.

**Task** – I needed to build a data‑intensive pipeline that ingested live auction feeds, social media sentiment, and supply chain logs, then produced up‑to‑second price predictions for every listing while keeping latency under 200 ms and throughput above 10k events/s.

**Action** – I chose Kafka for event streaming, Spark Structured Streaming for near‑real‑time feature engineering, and a LightGBM model deployed via TensorFlow Serving behind an NGINX load balancer. We used Redis caching to store the top 5 predictions per product and implemented backpressure handling with Kafka’s consumer lag metrics. The pipeline was containerized with Docker Compose and orchestrated on Kubernetes, ensuring horizontal scaling during peak auction hours.

**Result** – Real‑time pricing reduced price‑lag by 95%, boosting conversion rates from 3.2 % to 6.7 % within two months. We handled a sustained throughput of 12k events/s with <150 ms latency. The project taught me how to balance ML model accuracy, streaming architecture resilience, and operational observability in a high‑stakes retail environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
