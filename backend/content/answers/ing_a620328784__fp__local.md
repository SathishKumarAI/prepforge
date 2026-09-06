---
qid: ing_a620328784__fp__local
question: 'Explain: 4.1 Requirement 1: Traffic Distribution — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 407
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:59:00-05:00'
sources: []
---

**Why a load‑balancing traffic distribution is mandatory**

When a service receives requests from many clients, the *arrival process* is stochastic (often Poisson). A single backend cannot keep up once the instantaneous arrival rate exceeds its processing capacity; latency spikes and requests fail.  
The core problem is to **maximise throughput while keeping each server’s utilisation below a safe threshold**. This is an instance of *queueing theory*: for an M/M/1 queue, stability requires ρ = λ/µ < 1. If traffic is unevenly split, some nodes become overloaded (high ρ), others idle (low ρ).  

**How the design must behave**

1. **Uniformity** – each backend should receive ~λ/N requests per second.  
2. **Responsiveness** – the assignment policy must adapt quickly to sudden load spikes or failures.  
3. **Simplicity & locality** – routing decisions should be cheap (constant‑time hash, round‑robin) and preserve session affinity when required.

These constraints lead to a *probabilistic* dispatcher: choose a random subset of servers (“shard”), probe their current queue lengths, then forward the request to the least loaded. The probing cost is amortised by reducing tail latency; mathematically, it solves a load‑balancing optimisation problem that minimises the maximum ρ across nodes.

**Non‑obvious insight**

Many designs over‑focus on *per‑request* decisions (e.g., consistent hashing). However, the *global* objective—minimising **maximum utilisation**—often outweighs local fairness. A slightly biased hash that favours underutilised servers can yield lower overall latency than a perfectly uniform scheme that ignores real-time load fluctuations. This bias is small but crucial in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
