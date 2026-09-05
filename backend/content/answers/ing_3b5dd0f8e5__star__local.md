---
qid: ing_3b5dd0f8e5__star__local
question: 'Explain: It thinks that it thinks that its — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 319
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:15-05:00'
sources: []
---

**Situation** – At the Seattle Conference on Scalability, I was asked to explain how our recommendation engine scales when video traffic spikes during live events. We had seen latency jump from 120 ms to over 1 s during a major concert broadcast.

**Task** – My job was to describe the architecture that keeps the model inference fast while handling millions of concurrent requests and to show how we measured its performance in real time.

**Action** – I outlined our two‑tier approach: first, a lightweight “warm” model running on a single GPU per edge node, using TensorRT to shave 30 % off inference time; second, a larger “cold” ensemble that only kicks in when the warm model’s confidence falls below 0.7. We deployed these with Kubernetes autoscaling and used Prometheus metrics (request latency, GPU utilization) to trigger roll‑outs. During the demo I ran a synthetic load test, showing how the system auto‑scales from 2 to 12 pods within 15 seconds while keeping average latency under 150 ms.

**Result** – After implementing this, our live event latency dropped from 1 s to 180 ms, and we handled a 3× traffic increase without additional hardware. I learned that balancing model complexity with real‑time constraints is key, and that continuous monitoring can turn a bottleneck into a scalable feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
