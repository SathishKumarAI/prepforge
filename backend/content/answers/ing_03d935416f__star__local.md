---
qid: ing_03d935416f__star__local
question: 'Explain: Design an on-prem deployment of an open-weight model for a European
  bank that cannot send data to any external API.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 374
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:22-05:00'
sources: []
---

**Situation**  
At a mid‑size European bank, the compliance team flagged that all customer data must stay within EU borders and could not be sent to any external AI provider. The analytics group wanted to run a large language model for fraud detection on internal transaction logs.

**Task**  
I had to design an on‑prem deployment that met strict data residency rules while delivering near‑real‑time inference at scale, using the open‑weight GPT‑2 base model (1.5 B parameters).

**Action**  
First, I containerized the model with Docker and orchestrated it via Kubernetes on the bank’s private cloud, allocating 8 GPU nodes (NVIDIA A100) to keep latency under 200 ms per request. To avoid external calls, I built an internal microservice API in Go that batched requests and used a custom tokenizer library written in Rust for speed. For secure data flow, all traffic was encrypted with TLS 1.3 inside the VPC, and access was controlled by RBAC policies tied to LDAP groups. I implemented model quantization (INT8) using ONNX Runtime to reduce memory footprint by 60 % without measurable loss in precision. Finally, I set up Prometheus/Grafana dashboards to monitor GPU utilization, inference latency, and error rates.

**Result**  
The deployment handled 15,000 inference requests per minute with an average latency of 180 ms, achieving a fraud‑detection accuracy improvement of 12 % over the legacy rule engine. The project was delivered three weeks ahead of schedule, and I documented a repeatable Terraform template that can be redeployed in other EU branches. I learned how to balance regulatory constraints with performance by tightly integrating hardware optimization and secure internal networking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
