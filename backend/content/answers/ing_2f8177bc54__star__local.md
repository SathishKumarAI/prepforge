---
qid: ing_2f8177bc54__star__local
question: 'Explain: Distributed Computing — Must Know System Design Building Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 316
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:44-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling a recommendation engine that served 5 million daily users. The model training pipeline was bottlenecked by data shuffling and GPU utilization, causing a 30 % increase in latency during peak hours.

**Task** – I had to redesign the system so it could ingest, preprocess, and train on terabytes of clickstream data across multiple nodes while keeping inference latency under 50 ms per request.

**Action** – First, I introduced a distributed key‑value store (Redis Cluster) as the shared state for feature vectors, ensuring low‑latency access. For sharding, I implemented consistent hashing to balance load among Spark workers, and added a message queue (Kafka) to decouple data ingestion from training jobs. To manage task coordination, I used Apache Airflow DAGs with Celery workers, allowing dynamic scaling of GPU nodes via Kubernetes. Finally, I wrapped the model in TensorFlow Serving behind an Envoy proxy, using HTTP/2 multiplexing to reduce head‑of‑line blocking.

**Result** – The new architecture cut training time from 4 hours to 45 minutes and reduced inference latency by 40 %. We also achieved a 25 % cost savings on cloud resources. I learned that the right combination of sharding, consistent hashing, and message queuing is critical for building resilient ML pipelines at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
