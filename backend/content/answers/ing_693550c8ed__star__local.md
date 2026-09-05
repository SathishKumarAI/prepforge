---
qid: ing_693550c8ed__star__local
question: 'Explain: Tips — Systemdesigntips'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 341
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:32-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had to deploy a real‑time fraud detection model that processed ~1 M transactions per day. The existing pipeline was batch‑based and couldn’t meet the 200 ms latency requirement for instant approvals.

**Task**  
Redesign the end‑to‑end ML system so it could ingest streaming data, serve predictions with sub‑100 ms latency, and still support continuous model retraining without downtime.

**Action**  
I first decomposed the problem into three layers: (1) a Kafka ingestion pipeline that partitioned by merchant ID to avoid hot spots; (2) a stateless inference microservice built on TensorFlow Serving behind an Nginx edge that used gRPC for low‑overhead communication; and (3) a scheduled Spark job that retrained the model nightly, pushing the new checkpoint to S3 and triggering a rolling deployment via Kubernetes. I added Prometheus metrics to track queue depth and prediction latency, and implemented feature caching with Redis to reduce redundant lookups. We also introduced A/B testing on 5% of traffic to validate new models before full rollout.

**Result**  
Latency dropped from 650 ms to 45 ms, and the fraud detection accuracy improved by 3.2 %. The system now handles peak loads of 3 M TPS with zero downtime during retraining. I learned that clear separation of concerns—ingestion, inference, training—and rigorous monitoring are essential for scalable ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
