---
qid: ing_12f8d0f753__star__local
question: 'Explain: Draw Data Flow — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:39-05:00'
sources: []
---

**Situation:**  
During my final year project I had to pitch a real‑time recommendation engine to our faculty committee. They asked me to sketch the entire data pipeline before we started coding, so I could prove that my architecture would meet latency and accuracy targets.

**Task:**  
I needed to create a clear, end‑to‑end data flow diagram that captured ingestion, preprocessing, model training, inference, and monitoring, while also showing how each component scaled horizontally.

**Action:**  
I began by listing all data sources: clickstream logs (Kafka), user profiles (MongoDB), and content metadata (PostgreSQL). I mapped a 1‑second ingestion window into an Apache Flink job that performed tokenization, feature hashing, and windowed aggregations. The transformed stream fed a TensorFlow Serving cluster behind an NGINX load balancer for inference. For training, I set up an Airflow DAG that pulled nightly batches from S3, ran a distributed XGBoost pipeline on EMR, and pushed the new model to a Model Registry. Finally, I added Prometheus metrics at each stage—latency, error rate, queue depth—to feed into Grafana dashboards.

**Result:**  
The committee approved my design, citing its clear separation of concerns and built‑in observability. The prototype later achieved <200 ms inference latency with 99th‑percentile accuracy of 87%. I learned that a well‑structured data flow diagram not only convinces stakeholders but also surfaces bottlenecks before code is written.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
