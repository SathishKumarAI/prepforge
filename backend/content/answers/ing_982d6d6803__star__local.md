---
qid: ing_982d6d6803__star__local
question: 'Explain: It''s like, oh, let''s add another 10 — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 369
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:59-05:00'
sources: []
---

**Situation** – At my previous role I was part of the YouTube recommendation team during a peak traffic season when our real‑time inference load spiked by 60 % over forecasted numbers. The existing GPU cluster could only serve ~4,000 concurrent requests per second and started queuing latency.

**Task** – My goal was to double throughput without exceeding budget or compromising model accuracy, so we needed a scalable, cost‑efficient solution that kept inference latency under 120 ms.

**Action** – I designed an autoscaling pipeline using Kubernetes with GPU node pools. First, I containerized the PyTorch recommendation model and added a lightweight TorchServe wrapper to expose a REST endpoint. Next, I implemented a custom HPA (Horizontal Pod Autoscaler) that scaled based on CPU+GPU utilization and queue depth, backed by GCP’s preemptible GPUs for cost savings. To avoid cold starts, I kept a small pool of “warm” pods running 24/7. Finally, I added an edge cache in Cloud CDN to offload static content and reduce load on the inference nodes.

**Result** – The cluster scaled from 4k to 9k requests/sec within 48 hours, keeping latency below 110 ms. Cost increased by only 18 % due to preemptibles, and we saw a 12 % lift in recommendation click‑through rate because users received fresher results faster. I learned how to balance scaling elasticity with operational cost while preserving model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
