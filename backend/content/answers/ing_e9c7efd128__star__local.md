---
qid: ing_e9c7efd128__star__local
question: 'Explain: became decomposed and integrated directly into the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 351
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:50-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our fraud detection pipeline was running in real‑time on Kafka streams. The model we deployed had grown to 120 MB and took over 200 ms per inference, causing a 12% drop in transaction throughput during peak hours.

**Task** – I needed to reduce latency by 40 % while keeping the same accuracy, so I decided to decompose the monolithic neural net into smaller, task‑specific sub‑models and integrate them directly into the streaming engine as micro‑services.

**Action** – First, I profiled the network with TensorBoard to identify bottlenecks; the embedding layer was a major culprit. I extracted that layer into a separate inference service using ONNX Runtime for low‑overhead execution. Next, I split the remaining dense layers into two lightweight models: one for feature scoring and another for anomaly detection. Each model was containerized with Docker and deployed behind an Envoy proxy in Kubernetes, allowing me to route 95 % of traffic through the lighter scorer while reserving the heavier detector for edge cases. I also added a caching layer using Redis to store embeddings for repeat users.

**Result** – The end‑to‑end inference time dropped from 200 ms to 120 ms, boosting transaction throughput by 18 % and keeping false‑positive rates under 1.2%. I learned that thoughtful model decomposition coupled with micro‑service orchestration can deliver measurable latency gains without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
