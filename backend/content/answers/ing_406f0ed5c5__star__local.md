---
qid: ing_406f0ed5c5__star__local
question: 'Explain: And so that was um an easy — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 367
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:08-05:00'
sources: []
---

**Situation** – While leading the recommendation team at YouTube during the Seattle Conference on Scalability, we noticed our model served millions of videos per second and was hitting a latency wall: 500 ms average inference time meant subscribers were waiting too long for personalized thumbnails.

**Task** – My goal was to cut inference latency by 30% without sacrificing accuracy, so that the recommendation pipeline could handle peak traffic during live events and still deliver fresh content in real time.

**Action** – I re‑architected the serving stack: switched from a monolithic TensorFlow model to a modular ensemble of lightweight models deployed on Kubernetes with TF Serving. I introduced a feature‑level caching layer using Redis, keyed by user segment and video hash, reducing redundant predictions. We also used ONNX Runtime for GPU acceleration and implemented a dynamic batching scheduler that aggregated 512 requests per batch during high‑load windows. Finally, I set up a continuous monitoring pipeline in Grafana to track latency, error rates, and A/B test the new system against the old baseline.

**Result** – Latency dropped from 500 ms to 350 ms—a 30% improvement—while click‑through rate increased by 4%. The team learned that decoupling model inference into microservices and adding smart caching can dramatically scale ML workloads at YouTube’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
