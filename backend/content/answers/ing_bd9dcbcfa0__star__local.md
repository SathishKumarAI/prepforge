---
qid: ing_bd9dcbcfa0__star__local
question: 'Explain: Read more — Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 305
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:09-05:00'
sources: []
---

**Situation** – While leading the fraud‑detection pipeline for a fintech startup, our model served ~1 million users daily. The existing batch inference job was hitting 4 hours per run and cost $3k/month on AWS.

**Task** – I needed to scale real‑time predictions to sub‑second latency while cutting infrastructure costs by at least 30%.

**Action** – First, I profiled the model with *TensorFlow Lite* and identified that the dense layers were the bottleneck. I replaced them with a *depthwise separable convolution* architecture, reducing parameters from 2.1M to 0.6M. Next, I containerized the model in Docker and deployed it on Kubernetes using *KServe*. For scaling, I set up horizontal pod autoscaling based on CPU/memory thresholds and added an ingress gateway with rate limiting. To cut costs, I switched from on‑demand EC2 instances to spot instances with a fallback strategy.

**Result** – Inference latency dropped from 350 ms to 35 ms, throughput increased to 10k requests/sec, and monthly cloud spend fell by 45 % to $1.6k. The exercise taught me that model compression combined with managed serving infrastructure can deliver both performance and cost‑efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
