---
qid: ing_2328b28fd1__star__local
question: 'Explain: System Design 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 337
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:23-05:00'
sources: []
---

**Situation** – At my previous company we were launching a real‑time recommendation engine for a streaming platform that had 12 million active users. The existing batch pipeline produced recommendations once per day, causing stale suggestions and low engagement.

**Task** – I was tasked with designing an end‑to‑end ML system that could deliver personalized recommendations in under 100 ms while scaling to millions of concurrent requests and supporting A/B testing for new models.

**Action** – First, I defined the data flow: streaming user interactions from Kafka into a feature store (Redis) so features were refreshed every second. I built a lightweight inference service with FastAPI, containerized it, and deployed it behind an Envoy sidecar to enable zero‑downtime model rollouts. For latency, I used ONNX Runtime with TensorRT acceleration on GPU instances, reducing per‑inference time from 300 ms to 70 ms. To monitor drift, I set up a scheduled job that re‑trains the model nightly using an incremental learning approach and pushes new checkpoints to S3, automatically triggering a Canary deployment.

**Result** – The system handled 50 k QPS with 95th‑percentile latency under 100 ms, boosting user engagement by 18% and reducing churn by 4%. I learned that coupling real‑time feature pipelines with GPU‑accelerated inference is key to scalable ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
