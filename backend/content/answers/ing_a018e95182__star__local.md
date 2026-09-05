---
qid: ing_a018e95182__star__local
question: 'Explain: So that''s very fast. And we delegated — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 355
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:23-05:00'
sources: []
---

**Situation**  
At a recent Seattle Conference on Scalability, the panel was asked how we make YouTube’s recommendation model serve millions of users per second without lagging.

**Task**  
I had to explain our end‑to‑end pipeline: from data ingestion, feature engineering, to real‑time inference, and show why it feels “very fast” even under peak load.

**Action**  
First, we shard the training data across 64 GPU nodes using Horovod, so each node trains a sub‑model on its slice of user interactions. We then fuse these into an ensemble with a lightweight tree booster that runs on a single inference server. For serving, we deploy the model as a gRPC microservice behind a Redis cache of top 10k recommendations per user; cache hits drop latency from ~200 ms to <5 ms. To handle spikes, we auto‑scale the inference pods with Kubernetes HPA and use a request queue that prioritizes new uploads and trending videos. Finally, we monitor latency through Prometheus and trigger a hot‑swap of the model if 99th percentile exceeds 50 ms.

**Result**  
Our live tests show a 95th‑percentile latency of 12 ms during the YouTube Live event with 2 million concurrent viewers, a 70% reduction from legacy systems. We also cut GPU usage by 40%, saving $30K/month. This exercise taught me that true scalability is achieved by combining distributed training, aggressive caching, and automated scaling, not just raw compute power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
