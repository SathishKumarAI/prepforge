---
qid: ing_82570197df__star__local
question: 'Explain: So they could only get new hardware — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 320
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:56-05:00'
sources: []
---

**Situation**  
During my time as a Senior ML Engineer at a streaming startup, we were preparing for the Seattle Conference on Scalability. The client’s YouTube channel was experiencing a 35% drop in playback quality during peak traffic, and our existing GPU fleet had reached its utilization limit.

**Task**  
I needed to design an upgrade plan that would increase inference throughput by at least 50% without exceeding the budget or disrupting live streams.

**Action**  
First I benchmarked our current model on the existing NVIDIA V100s, noting a latency of 280 ms per frame. I then prototyped a mixed‑precision version using TensorRT and quantized weights to INT8, which cut inference time to 120 ms. Next, I negotiated with hardware vendors for a limited batch of A30 GPUs, leveraging our partnership program for discounted pricing. I redeployed the model on the new GPUs in a Kubernetes cluster, implemented autoscaling based on request latency, and set up Prometheus alerts to monitor GPU utilization.

**Result**  
The upgrade delivered a 55% reduction in latency, boosting peak throughput from 1,200 to 1,860 concurrent streams—exceeding our target. The client reported a 15% increase in user engagement post‑conference. I learned the value of combining precision tuning with strategic hardware procurement to meet strict scalability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
