---
qid: ing_d3baffb0f2__faang__local
question: 'Explain: Pattern 1: Load Balancer with Multiple Backends'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 536
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:41-05:00'
sources: []
---

**Pattern 1 – Load Balancer + Multiple Back‑End Services**

| Section | Content |
|---------|---------|
| **Clarify** | We’re asked to describe the classic “load balancer with multiple back‑ends” architecture used in cloud‑native AI pipelines (e.g., inference serving).  Assume stateless micro‑services, HTTP/REST or gRPC traffic, and horizontal scaling.  Confirm: is traffic bursty? Do we need session affinity? Are back‑ends identical or heterogeneous? |
| **Approach** | 1️⃣ Deploy a front‑end load balancer (ALB/L7 LB, Envoy, NGINX). <br>2️⃣ Register multiple AI inference containers/instances behind it. <br>3️⃣ Use health checks to remove unhealthy nodes. <br>4️⃣ Optionally add sticky sessions or token‑based routing for stateful workloads. |
| **Depth** | • The LB performs request distribution (round‑robin, least‑conn, weighted). <br>• Health probes (HTTP/HTTPS ping) ensure only healthy pods receive traffic. <br>• In Kubernetes, this maps to a Service with selector + Endpoints; in cloud, to an Instance Group behind an LB. <br>• Scaling is automated: add/remove back‑ends via autoscaling policies based on CPU/memory or custom metrics (e.g., inference latency). <br>• Latency: LB adds ~1–5 ms overhead; acceptable for most inference workloads. <br>• Cost: each additional instance incurs compute cost, but LB is usually free or minimal. |
| **Edge Cases** | • Sudden traffic spikes may overwhelm the pool before scaling kicks in → use pre‑warmed instances or burst capacity. <br>• Back‑ends with different model versions need versioned routing; otherwise you’ll get inconsistent predictions. <br>• If a back‑end is stateful (e.g., GPU cache), sticky sessions are mandatory, else you lose performance gains. |
| **Optimize & Communicate** | • Use weighted LB to route more traffic to faster GPUs or newer model versions. <br>• Cache inference results at the LB (edge caching) for repeated requests. <br>• For high‑throughput, consider a tiered architecture: first a “warm” pool of GPU nodes, then a larger “cold” pool on cheaper CPU instances. <br>Explain trade‑offs clearly to interviewers: latency vs cost vs complexity. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
