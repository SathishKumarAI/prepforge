---
qid: ing_c8d8f862f6__fp__local
question: 'Explain: How it works — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 536
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:02-05:00'
sources: []
---

**Why a load balancer is indispensable**

In any distributed ML inference service the *fundamental problem* is that a single node can’t keep up with the arrival rate of prediction requests. If one model server receives all traffic it will become a bottleneck: latency spikes, SLA violations, and eventually failure. A load balancer turns this **capacity‑matching** problem into an optimization over a set of constraints:

| Constraint | Why it matters |
|------------|----------------|
| *Throughput* | Keep each node’s CPU/GPU utilisation ≈ 80 % |
| *Latency* | Minimise the maximum response time |
| *Fault tolerance* | Detect and reroute from unhealthy nodes |
| *Fairness* | Prevent “hot spots” where a single user dominates traffic |

**Design principle**

Treat each backend as an **independent resource with a measurable service rate μᵢ** (requests per second). The balancer must solve the classic *multi‑server queueing* problem: minimize average waiting time \(W = \frac{1}{\mu_{\text{total}} - λ}\), where \(λ\) is arrival rate. Hence the algorithm should:

1. **Measure** μᵢ via heartbeats or recent request times.
2. **Allocate** each incoming request to a node with the highest *effective* capacity (μᵢ – current load).
3. **Rebalance** gradually when nodes are added/removed or their μᵢ changes.

A simple, provably optimal rule is the **Weighted Least Connections (WLC)**: assign to the server with the fewest active requests weighted by its capacity. This directly implements the queueing theory optimum under Poisson arrivals and exponential service times.

**Non‑obvious insight**

Most designs ignore *request size variability*. In ML inference, a single request can involve a 1 GB feature vector or a tiny scalar. Treating all requests equally skews the effective μᵢ. A lightweight **size‑aware weight** (e.g., \(w_i = \frac{1}{\text{avg\_bytes}_i}\)) ensures that servers handling larger payloads receive proportionally fewer connections, preventing subtle latency inflation that would otherwise be invisible until traffic scales.

By grounding the balancer in queueing theory and adding size awareness, you obtain a robust, provably efficient solution for ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
