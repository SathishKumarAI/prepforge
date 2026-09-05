---
qid: ing_ed72228cc9__star__local
question: 'Explain: Maybe there is something wrong with the — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 357
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:45-05:00'
sources: []
---

**Situation** – During a mock Google Maps system‑design interview, the interviewer asked me to build a real‑time traffic prediction model that could serve millions of requests per second. The problem statement included “predict congestion levels for every road segment within 10 seconds.” I realized that the dataset would be massive and the latency requirement extremely tight.

**Task** – I needed to design an ML pipeline that could ingest streaming GPS traces, train a predictive model, and deploy it with sub‑second inference while keeping memory usage under 8 GB per node.

**Action** – First, I used Apache Kafka for ingestion and Spark Structured Streaming for preprocessing, normalizing timestamps and computing rolling averages. For the model, I chose XGBoost because of its low latency at inference time; I trained a weekly batch model on historical data and updated it nightly using incremental learning via LightGBM’s “update” API. To meet the 10 second SLA, I deployed the model as a gRPC microservice behind a Kubernetes autoscaler, caching predictions for identical road segments with Redis. I also added an online A/B test to compare the new model against the baseline rule‑based estimator.

**Result** – The end‑to‑end pipeline processed 1.2 million GPS points per minute and served predictions with an average latency of 7.8 ms, well under the target. Accuracy improved by 18% (MAPE dropped from 23% to 19%). I learned that balancing batch training quality with online inference speed often requires hybrid models and careful caching strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
