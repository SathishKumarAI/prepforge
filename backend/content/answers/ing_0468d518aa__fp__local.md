---
qid: ing_0468d518aa__fp__local
question: 'Explain: Capacity Planning — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 420
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:03-05:00'
sources: []
---

**Capacity Planning for a Live‑Comment System – From First Principles**

A live‑comment system must ingest, store and serve thousands of messages per second while guaranteeing sub‑100 ms latency for readers. The *capacity* problem is: **how many resources (compute, memory, I/O) are needed to keep the system “smooth” under a stochastic load?**  
1. **Load as a Poisson process** – Each user’s comment arrival time is independent; over a large population the aggregate rate λ (comments/second) follows a Poisson distribution.  
2. **Queueing theory gives head‑of‑line delay** – Treat each worker node as an M/M/k queue: mean service rate μ, k workers. The expected latency L ≈ 1/(k μ–λ). To keep L below a target τ we solve k ≥ (λ + 1/τ)/μ.  
3. **Memory & network bandwidth** – A comment of size S bytes must be written to disk and replicated across N replicas, so I/O throughput T = λ S N. The disk subsystem must sustain T plus a safety margin.  
4. **Burst tolerance via over‑provisioning** – Real traffic is bursty; use the *95th percentile* of λ instead of its mean, or apply a safety factor α ≈ 1.5–2 to guard against diurnal peaks.  

A non‑obvious insight: **replication cost scales linearly with λ**, so for high‑volume streams even modest replication (e.g., N=3) can dominate capacity budgets. Planning must therefore treat *write amplification* as a first‑class metric, not just latency. This leads to sharding or write‑caching strategies that keep the effective μ high while keeping I/O bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
