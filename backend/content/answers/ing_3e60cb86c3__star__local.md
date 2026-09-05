---
qid: ing_3e60cb86c3__star__local
question: What kind of technical challenges does Cursor ask?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 395
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:13-05:00'
sources: []
---

**Situation** – At Cursor I was part of the core ML platform team building a recommendation engine for an e‑commerce client with 50 M daily active users. The existing pipeline could only handle a few hundred thousand inference requests per second, but the business required sub‑200 ms latency at peak traffic.

**Task** – My goal was to design and deploy a distributed inference system that would scale to millions of predictions per second while keeping cost under $20k/month and maintaining model accuracy within 0.5 % of our baseline.

**Action** – I rewrote the model serving layer in TensorFlow Serving, wrapped it with Envoy for traffic routing, and orchestrated containers on Kubernetes using custom HPA rules that spun up GPU nodes only during traffic spikes. To reduce model size I applied ONNX conversion + quantization, cutting memory usage by 40 %. I also set up a CI/CD pipeline with ArgoCD to roll out new models automatically after A/B testing against live traffic.

**Result** – The system handled 3 M requests per second with an average latency of 170 ms and reduced serving cost to $12k/month. The project taught me how to balance scaling, cost, and model fidelity in a real‑world ML environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
