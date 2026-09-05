---
qid: ing_1f00df74ec__star__local
question: 'Explain: we need to be able to rewrite — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 334
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:25-05:00'
sources: []
---

**Situation** – In my last role as a senior ML engineer at a video‑streaming startup, our recommendation model was serving 12 M daily users but the inference latency had ballooned to 350 ms after adding new features for content freshness. The engineering team flagged this as a bottleneck that could hurt watch time.

**Task** – I was tasked with refactoring the inference pipeline so it could deliver predictions in under 120 ms while still supporting the full feature set, all within the constraints of our existing Kubernetes cluster and budget.

**Action** – First, I profiled the model with PyTorch’s autograd profiler to identify the heavy operations. The culprit was a large transformer encoder that didn’t benefit from batch‑level optimizations. I replaced it with a distilled lightweight transformer (distilBERT) and quantized weights to int8 using NVIDIA TensorRT. Next, I re‑architected the serving layer: moved from a monolithic Flask app to a gRPC microservice deployed via Envoy, adding a request coalescing buffer that batches 32 requests every 5 ms. Finally, I set up continuous A/B testing in our Canary pipeline and automated rollback on latency spikes.

**Result** – Latency dropped to 95 ms on average, throughput increased by 3×, and user engagement (time‑to‑first recommendation) improved by 7%. The exercise taught me that model compression paired with a smarter serving stack can unlock scalability without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
