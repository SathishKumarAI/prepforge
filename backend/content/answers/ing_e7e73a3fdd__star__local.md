---
qid: ing_e7e73a3fdd__star__local
question: 'Explain: ByteDance System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 341
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:21-05:00'
sources: []
---

**Situation** – At ByteDance I led the redesign of the recommendation engine for the TikTok “For You” feed. The existing model was a single‑layer neural net that served millions of users but lagged behind competitors in latency and relevance; we were seeing a 12 % drop in daily active user engagement during peak hours.

**Task** – I needed to build a scalable, low‑latency system that could train on real‑time click data, support multi‑objective ranking (relevance + diversity), and deploy with zero downtime across our global CDN.

**Action** – First, I split the pipeline into an online inference microservice written in Go and a background training job in PyTorch. For feature serving I introduced Redis Streams to buffer user interactions, then used TensorFlow Serving with quantized models (INT8) to cut inference time by 3×. I added a reinforcement‑learning layer that updated policy weights every 5 minutes using Spark Structured Streaming on our Kafka cluster, and employed Kubernetes autoscaling to keep CPU usage below 70 % during traffic spikes.

**Result** – The new architecture reduced end‑to‑end latency from 250 ms to under 80 ms. In A/B tests we achieved a 17 % lift in watch time per session and cut GPU training cost by 35 %. I learned that marrying online feature stores with micro‑batch reinforcement learning can deliver both speed and relevance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
