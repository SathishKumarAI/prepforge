---
qid: ing_ed5da0126c__fp__local
question: 'Explain: Timeouts — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 396
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:24:05-05:00'
sources: []
---

**Timeouts in HTTP/HTTPS for Machine‑Learning APIs**

The *fundamental problem* is that a model inference request is an *I/O‑bound* operation whose latency depends on compute, data movement, and network conditions—none of which are deterministic. If the service never returns, clients stall, queues back‑pressure, and downstream pipelines freeze. A timeout turns this unbounded uncertainty into a bounded risk: it guarantees that every request consumes at most *T* seconds of client resources.

**Why it must work this way**

1. **Queue stability (Little’s Law).**  
   Let λ be the arrival rate and μ = 1/T the effective service rate imposed by the timeout. Stability requires λ < μ; otherwise the backlog grows without bound. Setting T to respect the 95th‑percentile inference time keeps queues finite.

2. **Probabilistic tail control (Chernoff bounds).**  
   If inference times follow a heavy‑tailed distribution, a hard cutoff at *T* ensures that the probability of exceeding the deadline is ≤ e^(−c·T), giving a quantifiable SLA.

3. **Resource isolation (geometric contention).**  
   A timeout frees GPU/CPU slots early, preventing one slow job from blocking others—essential for multi‑tenant inference engines.

**Non‑obvious insight**

Timeouts are *not* merely “kill‑the‑request” policies; they can be *adaptive*. By monitoring the real‑time latency distribution and adjusting *T* (e.g., longer during off‑peak, shorter under load), a system achieves both high throughput and low tail latency without hardcoding arbitrary limits. Adaptive timeouts thus embody an online stochastic optimization that balances SLA guarantees against resource utilization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
