---
qid: ing_082c633eec__fp__local
question: 'Explain: Metrics, SLOs, and the throughput - latency curve'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 444
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:22:50-05:00'
sources: []
---

## From Problem to Curve

A *service* is a stochastic system that receives requests \(r\) and produces responses in time \(t(r)\).  
The **throughput** \(\lambda\) is the arrival rate (requests per second), while the **latency** \(L(\lambda)\) is the expected response time under that load. The fundamental problem is: *how much work can we deliver quickly before the system becomes congested?*  

### Why SLOs and Metrics?

- **Metrics** are observables (e.g., 95‑th percentile latency, request rate).  
- **SLOs (Service Level Objectives)** are quantitative guarantees on these metrics (e.g., “≤ 200 ms at 99.9 %”).  

They translate the abstract *throughput–latency trade‑off* into enforceable contracts: if \(L(\lambda) > \text{SLO}\), we violate the service level.

### The Throughput–Latency Curve

Mathematically, for a queueing system with service time distribution \(X\):

\[
L(\lambda)=E[X] + \frac{\lambda\,\operatorname{Var}(X)}{2(1-\rho)},\qquad \rho=\lambda E[X].
\]

As \(\lambda \uparrow 1/E[X]\), the denominator shrinks and latency explodes—this is the *critical load*. The curve is convex, reflecting diminishing returns: doubling capacity reduces latency only up to a point.

### Non‑obvious Insight

Most people treat throughput and latency independently. In reality, **latency is a function of both arrival rate and service variability**. Reducing variance (e.g., via batching or better caching) can shift the entire curve leftward, allowing higher \(\lambda\) for the same SLO—often cheaper than scaling resources linearly.

Thus, SLOs anchor performance guarantees, metrics quantify reality, and the throughput–latency curve reveals the underlying queueing dynamics that dictate how a system behaves under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
