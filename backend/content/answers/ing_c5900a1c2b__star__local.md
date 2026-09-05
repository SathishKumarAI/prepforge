---
qid: ing_c5900a1c2b__star__local
question: 'Explain: Now let''s say if you want to — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 325
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:09-05:00'
sources: []
---

**Situation** – In my last role, a client’s logistics division needed real‑time route optimization for thousands of delivery vans across an entire city. Their existing rule‑based engine lagged behind traffic updates and produced suboptimal routes during peak hours.

**Task** – I was tasked with designing a scalable ML system that could ingest live GPS, traffic, weather, and historical data to predict the fastest path in real time, while keeping latency under 200 ms per request and handling millions of concurrent users.

**Action** – First, I set up an Apache Kafka pipeline to stream sensor data into a Spark Structured Streaming job. The job trained an XGBoost model on features like congestion level, road closures, and driver behavior, then pushed predictions to Redis for low‑latency lookups. For map rendering, I leveraged Mapbox GL with vector tiles that were updated every 30 seconds from our stream. To ensure fault tolerance, I containerized the service with Docker and orchestrated it via Kubernetes, using horizontal pod autoscaling based on CPU usage.

**Result** – The new system cut average delivery time by 18% and reduced fuel consumption by 12%. Latency stayed below 180 ms even during traffic spikes. I learned that marrying real‑time streaming with a lightweight inference layer is key for high‑scale map services, and that careful feature engineering can dramatically improve prediction quality without over‑engineering the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
