---
qid: ing_72f5f2411c__fp__local
question: 'Explain: Supported hosts ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 377
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:09:07-05:00'
sources: []
---

**Why “Supported Hosts” matters for the Glean MCP Server**

The *Glean Machine‑Learning‑Control Plane (MCP)* is a thin, stateless orchestrator that routes inference requests to model endpoints and aggregates metrics. In distributed systems this routing must be **deterministic, low‑latency, and fault‑tolerant**—otherwise a single host failure can cascade into service outages or stale predictions.

The “Supported Hosts” list encodes the *operational envelope* of MCP: it tells you which operating systems, runtimes, and network stacks the server has been formally verified against. From an optimization viewpoint, each supported platform guarantees that the underlying **kernel scheduler** and **network stack** deliver the predictable throughput needed for batch‑and‑real‑time inference. If a host is unsupported, the MCP cannot rely on these guarantees; latency jitter or memory pressure could invalidate the probabilistic models it serves.

A deeper principle here is *conservative design*: by limiting itself to a small set of vetted hosts, Glean trades flexibility for **predictable performance** and **simplified security hardening**. This mirrors how high‑performance scientific libraries pin themselves to specific compiler versions to avoid ABI drift.

**Non‑obvious insight:** The supported‑host list is not merely an admin checklist—it is a *runtime contract*. Each host’s kernel version, CPU microarchitecture, and network interface determine the **maximum sustainable request rate** that the MCP can guarantee. If you run MCP on an unsupported host, you may still get predictions, but the service level agreements (SLAs) break down because the underlying hardware cannot meet the required *throughput‑to‑latency* curve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
