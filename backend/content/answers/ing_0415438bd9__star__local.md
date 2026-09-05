---
qid: ing_0415438bd9__star__local
question: 'Explain: Load Balancing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:52-05:00'
sources: []
---

**Situation** – While leading the deployment of a real‑time recommendation engine for an e‑commerce platform, we noticed that during flash sales our inference latency spiked to 800 ms and the error rate climbed above 2%, hurting conversion rates.

**Task** – I had to design a scalable load‑balancing layer that would keep inference latency under 200 ms even when traffic surged 10×, while preserving model accuracy and minimizing cost.

**Action** – First, I profiled the existing single‑node TensorFlow Serving instance and identified GPU saturation as the bottleneck. I introduced a Kubernetes‑based horizontal pod autoscaler combined with an Envoy proxy that used weighted round‑robin routing to distribute requests across multiple inference pods. To reduce cold starts, I pre‑warmed each pod by loading the model into memory at startup and kept a pool of “warm” containers using Istio’s sidecar injection. I also implemented request batching (batch size 32) in Envoy, which lowered GPU utilization from 95% to 70%. Finally, I set up Prometheus alerts for latency thresholds and added a circuit breaker that routed traffic to a fallback model if any pod exceeded a 500 ms threshold.

**Result** – After deployment, average inference latency dropped to 140 ms under peak load, the error rate fell below 0.2%, and we handled a 12× traffic spike without scaling costs more than 15% above baseline. I learned that combining container orchestration with intelligent request routing and batching can turn an unstable ML service into a robust, cost‑effective system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
