---
qid: ing_7cb27b0a14__star__local
question: 'Explain: So, we don''t get much sleep sometimes — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 393
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:42:53-05:00'
sources: []
---

**Situation** – Last year I was part of the video recommendation team at a mid‑size streaming startup. We were launching a new feature that used real‑time user interactions to surface personalized videos during live streams, and our engineering sprint ran into a bottleneck: we had to process millions of events per second with sub‑second latency, but our training pipeline was only able to ingest one batch per minute because the model served on a single GPU.

**Task** – I needed to redesign the inference architecture so that the recommendation engine could scale horizontally, reduce latency below 200 ms, and still support offline retraining every hour without interrupting live traffic.

**Action** – First, I profiled the current pipeline in PyTorch and identified that the heavy GPU kernel was a bottleneck. I refactored the model to use TensorRT for inference, then wrapped it in a gRPC microservice that could be replicated across Kubernetes nodes. I also introduced an event‑driven Kafka stream that pushed only delta updates to the model, allowing us to train asynchronously with a small Spark job that updated weights every hour. Finally, I added a circuit breaker and health check to ensure graceful degradation.

**Result** – The new architecture cut inference latency from 1.2 s to 180 ms and increased throughput by 4×, letting us serve recommendations in real time during live streams. Offline training time dropped from 30 min to 5 min, enabling more frequent model updates. I learned that combining model optimization (TensorRT) with an event‑driven microservice architecture can solve scalability challenges without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
