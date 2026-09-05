---
qid: ing_a348e95254__star__local
question: 'Explain: Cloud, self-hosted, or hybrid. — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 346
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:21-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the rollout of a new autonomous customer‑support agent for a fintech client. The team had to run thousands of end‑to‑end tests each sprint, measuring latency, error rate, and compliance with regulatory checks. Our existing infrastructure was on-premises, but we were also experimenting with a cloud‑based inference service that promised near‑real‑time scaling.

**Task** – I needed to design an evaluation framework that could reliably compare performance across three deployment modes: fully self‑hosted on our servers, purely in the public cloud, and a hybrid mix of both. The goal was to pick the model that minimized cost while meeting a 200 ms latency SLA and keeping data residency compliant.

**Action** – I built an automated test harness using Docker Compose for local runs, Kubernetes on Azure AKS for cloud runs, and a side‑car pattern for the hybrid setup. Each run logged throughput, CPU/GPU utilisation, network hop counts, and cost per inference via Prometheus and Grafana dashboards. I introduced synthetic traffic bursts to simulate peak load and added a compliance checker that scanned logs against GDPR rules.

**Result** – The hybrid model cut average latency from 250 ms (self‑hosted) to 180 ms while keeping data on local servers for sensitive transactions; cost dropped by 18 % compared with full cloud. I learned that a pragmatic, metrics‑driven comparison can surface hidden trade‑offs and guide architecture decisions in AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
