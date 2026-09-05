---
qid: ing_d51ead6770__star__local
question: 'Explain: AI Infrastructure Design — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 348
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:10-05:00'
sources: []
---

**Situation:** At my last company we were building a real‑time fraud detection service that had to process ~5 M events per day and deliver predictions with <50 ms latency. The existing batch pipeline couldn’t meet the SLA, so the product team asked me to design an end‑to‑end ML infrastructure.

**Task:** I needed to architect a system that could ingest streaming data, train models incrementally, serve predictions at scale, and provide observability for drift and error monitoring—all within our $200k annual budget.

**Action:** I started with Kafka for ingestion, partitioned by merchant ID to keep ordering. For training, I built a microservice that pulled recent 24‑hour windows from HDFS, used Spark Structured Streaming to update a LightGBM model nightly, and stored the artifact in S3 with version tags. Prediction served through a stateless gRPC API behind an Envoy load balancer; each request hit a Redis cache keyed by merchant ID to avoid re‑loading models. I added Prometheus metrics for latency and accuracy, and set up Grafana dashboards. To control costs, I spun the training container on spot instances and used autoscaling groups for inference nodes.

**Result:** The new pipeline reduced prediction latency from 350 ms to 38 ms, increased fraud detection accuracy by 12% (precision/recall), and cut operational cost by 30%. I learned that balancing real‑time constraints with incremental training requires careful partitioning, caching, and observability—principles that apply across any ML infra project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
