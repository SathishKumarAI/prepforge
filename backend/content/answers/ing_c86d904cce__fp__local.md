---
qid: ing_c86d904cce__fp__local
question: 'Explain: 4.3 Requirement 3: High Availability — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 484
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:13-05:00'
sources: []
---

**Why a load‑balancer is essential**

A system that must stay online while traffic fluctuates faces two hard constraints:

1. **Latency ≈ 0 ms** – every request should hit a live server immediately.  
2. **Fault tolerance ≈ 100 %** – a single node failure must not expose the whole service.

From queueing theory, if we let \(λ\) be the arrival rate and each worker have service rate \(μ\), the probability that a request is blocked grows as \(ρ=λ/(N μ)\). To keep blocking negligible, we need to maintain \(ρ < 0.8\) for any \(N\). A load‑balancer keeps \(ρ\) in check by distributing traffic across nodes and by **pre‑emptively removing** a node from the pool when its health degrades.

**Design principle: *stateful routing + rapid fail‑over***

1. **Health checks** – every 5 s ping a “heartbeat” endpoint; if a node misses two pings, it is evicted.  
2. **Sticky sessions (optional)** – use consistent hashing on the user ID so that re‑routing after failure does not break state.  
3. **Weighted round‑robin** – each healthy node gets a weight proportional to its spare capacity; when a node’s CPU or memory spikes, reduce its weight gradually.

**Optimization insight**

Most designs treat the load‑balancer as a *black box* that merely forwards traffic. The missing piece is that the balancer itself must **model uncertainty**: we only observe noisy latency samples. By maintaining a Bayesian estimate of each backend’s true response time and updating it online, the balancer can predict the *expected* waiting time for any route and choose the path with minimal expected latency. This turns a reactive system into an anticipatory one, reducing tail latency by 30–40 % in practice.

**Bottom line**

High availability is achieved not just by “more replicas” but by a load‑balancer that *learns* backend health, *weights* traffic accordingly, and *predicts* future performance under uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
