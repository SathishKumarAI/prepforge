---
qid: ing_708f1f20ef__faang__local
question: 'Explain: Understanding demand sources of traffic — Viewing the world as
  a computer: Global capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 507
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:05:12-05:00'
sources: []
---

**Clarify**  
We need to explain how to model *demand sources* (e.g., ads, organic search, referrals) that drive traffic to a website as if the web were a computer system with limited global capacity. Assumptions: we have traffic logs, source identifiers, and a fixed bandwidth/compute budget.

**Approach**  
1. Treat each demand source as an *input stream* feeding a shared *resource pool* (bandwidth + server compute).  
2. Quantify the *arrival rate* λₖ for source *k* and its *service requirement* μₖ (bytes per request, CPU cycles).  
3. Use queuing theory (e.g., M/M/1 or M/G/1) to estimate queue lengths, delays, and saturation points.  
4. Implement a *capacity‑allocation policy*: either static quotas per source or dynamic scaling based on real‑time metrics.

**Depth**  
- **Modeling**: λₖ = requests/sec; μₖ = average bytes/request → effective bandwidth usage = λₖ·μₖ.  
- **Queueing**: Utilization ρ = Σ(λₖ/μₖ). If ρ>1, the system is overloaded—latency grows exponentially.  
- **Optimization**: Use a weighted fair queue or token‑bucket per source to smooth bursts; apply autoscaling rules when λₖ spikes.  
- **Metrics**: Track *service level objectives* (SLOs) per source and overall throughput.

**Edge Cases**  
- Sudden traffic “flash crowds” from viral content → bursty arrivals violate Poisson assumption.  
- Zero‑latency sources (e.g., CDN edge cache) may skew μₖ to near zero, requiring separate handling.  
- Non‑uniform request sizes → heavy‑tailed distributions need M/G/1 analysis.

**Optimize & Communicate**  
Explain that by mapping traffic to a computer’s I/O scheduler, we can predict bottlenecks and preemptively allocate capacity—ensuring SLA compliance while maximizing revenue from high‑value sources. Highlight trade‑offs: stricter quotas reduce risk but may underutilize idle capacity; dynamic scaling improves utilization but adds complexity. Conclude with a clear diagram of the system flow to aid stakeholder understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
