---
qid: ing_6c9503fc8b__star__local
question: 'Explain: Sharding (Partitioning) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 306
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:08-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a recommendation engine that served millions of users daily. The training data set grew from 50 GB to over 300 GB, and inference latency spiked beyond our SLA of 100 ms per request.

**Task:**  
I had to redesign the data pipeline so that model training and serving could scale horizontally without sacrificing accuracy or response time.

**Action:**  
We implemented sharding on both the feature store and the model parameters. Using Apache Kafka for ingestion, we partitioned user‑action logs by hashed user ID, guaranteeing each shard contained a balanced mix of demographics. In Spark, we ran distributed training jobs that pulled only the relevant shard’s data, then used parameter servers (TensorFlow Parameter Server) to aggregate gradients across shards. For inference, we deployed TensorRT‑optimized models behind an Envoy proxy; each request was routed to the shard responsible for its user ID, so the model served only a subset of parameters and could run on a single GPU instance.

**Result:**  
Training time dropped from 12 hours to under 2 hours per epoch, and inference latency fell to 45 ms on average. We also reduced storage costs by 35% because each shard was compressed independently. The exercise taught me that thoughtful sharding turns a monolithic bottleneck into a scalable, maintainable architecture without compromising model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
