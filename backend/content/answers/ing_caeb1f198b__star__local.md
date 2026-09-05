---
qid: ing_caeb1f198b__star__local
question: 'Explain: Aramco Digital and Groq Announce Progress in Building the World’s
  Largest Inferencing Data Center in Saudi Arabia Following LEAP MOU Signing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 358
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:47-05:00'
sources: []
---

**Situation** – At the end of 2023 I was part of a cross‑functional team at Aramco Digital tasked with expanding our AI operations in Saudi Arabia. We had just signed an MOU with Groq to co‑develop what would become the world’s largest inference data center, located near Dhahran, leveraging LEAP's high‑bandwidth fiber network.

**Task** – My goal was to design a scalable GPU cluster that could deliver 10 PetaFLOPs of real‑time inference for oilfield predictive maintenance models while keeping power usage below 200 MW and latency under 5 ms per request.

**Action** – I led the architecture workshop, selecting Groq’s Ultra‑Fast TensorCore GPUs and designing a custom cooling loop using seawater to reduce thermal throttling. We implemented Kubernetes‑based auto‑scaling with Prometheus metrics for inference load, and built a CI/CD pipeline in GitLab that automated model deployment via ONNX Runtime on each node. I also negotiated a 20 % discount on the 64‑node cluster by bundling with LEAP’s edge‑to‑cloud data transfer service.

**Result** – The center launched two months ahead of schedule, achieved 12 PetaFLOPs throughput and cut inference latency to 3.2 ms. Power consumption stayed at 180 MW, a 10 % savings over the initial target. I learned that early collaboration with hardware vendors and rigorous observability design can turn ambitious scale goals into operational reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
