---
qid: ing_e67117259e__star__local
question: 'Explain: Service discovery for MCPs — modelcontextprotocol/modelcontextprotocol
  \u00b7 Discussions \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 351
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:50-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at a fintech startup, we were rolling out the new Model Context Protocol (MCP) to enable dynamic inference services across micro‑services. The existing service registry was a monolithic Consul cluster that couldn't handle the rapid scaling of on‑prem GPU nodes and cloud instances.

**Task** – I had to design a lightweight, fault‑tolerant service discovery layer that could register MCP endpoints in real time, support versioning, and allow zero‑downtime rollouts without affecting latency.

**Action** – I chose an event‑driven approach using Kubernetes’ built‑in Service Mesh (Istio) combined with a custom sidecar written in Go. The sidecar listened to etcd for configuration changes, published MCP metadata (model version, context hash, health status) via gRPC streams, and updated Envoy proxies on the fly. I introduced a “staged rollout” feature where new model contexts were tagged as “canary” and routed 10% of traffic using Istio’s traffic splitting. We also added automated health checks that pinged the MCP endpoint every 5 s and removed stale entries after three failures.

**Result** – The discovery layer cut service registration time from ~30 s to <2 s, reduced model rollout latency by 35%, and eliminated downtime during version upgrades. It also gave us a 99.9% availability SLA for inference services. I learned the importance of coupling lightweight sidecars with platform‑native meshes for scalable ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
