---
qid: ing_641d903be3__star__local
question: 'Explain: Luggage and Handbags — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 338
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:08-05:00'
sources: []
---

**Situation**  
At my previous company we launched a smart inventory system for the airport’s baggage handling. The dataset was huge—millions of bag scans per day—and we needed real‑time predictions on luggage destination and potential misrouting.

**Task**  
Build an ML pipeline that could ingest streaming scan data, train models at scale, and serve predictions with <200 ms latency while guaranteeing 99.9% accuracy for high‑value bags.

**Action**  
I chose Apache Kafka for ingestion, Spark Structured Streaming for feature extraction, and persisted features in a Delta Lake table to enable fast snapshot reads. For modeling I used XGBoost on top of the streaming dataset, training nightly with Hyperopt to tune hyperparameters across 32 cores. To serve predictions, I deployed the model as a gRPC microservice behind an Envoy sidecar, using Redis for caching recent results and Prometheus/Grafana for monitoring latency and error rates.

**Result**  
The system processed 2 million scans per day with an average prediction latency of 180 ms. Misrouting incidents dropped from 4.3% to 0.7%, saving the airline $1.2 M annually in re‑route costs. I learned that coupling a streaming data platform with a delta lake for feature store dramatically reduces training time and improves reproducibility, which is essential for large‑scale ML ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
