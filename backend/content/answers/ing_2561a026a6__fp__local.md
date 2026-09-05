---
qid: ing_2561a026a6__fp__local
question: 'Explain: Pattern 1: Active-Passive (Failover) — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 424
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:24:29-05:00'
sources: []
---

**Why an Active‑Passive (Failover) LB is inevitable**

At the core, a load balancer is a *decision engine* that routes requests to a set of back‑ends while keeping latency low and availability high.  
The decision problem can be formalised as:

\[
\min_{x_i}\; \sum_i x_i\,L_i \quad\text{s.t.}\;\sum_i x_i=1,\; x_i\in\{0,1\}
\]

where \(x_i\) indicates whether instance \(i\) is chosen and \(L_i\) its current load‑plus‑propagation‑delay.  
The optimal solution is *single‑point* (pick one best node). If that node crashes, the objective function becomes undefined; we must immediately re‑solve the optimisation.

**Passive redundancy solves this “undefined state” problem.**  
By keeping a second identical LB in a *standby* state, the system can instantly switch to it with zero decision latency—no recomputation, no race conditions. The passive node also learns traffic patterns offline (for predictive scaling) without affecting live traffic.

**Deeper principle: graceful degradation vs. perfect optimisation.**  
Optimisation assumes all components are healthy; failover acknowledges that reality is stochastic. Passive nodes embody *robustness* as an explicit constraint in the optimisation problem, turning a fragile optimum into a resilient policy.

**Non‑obvious insight:**  
The passive LB does not merely mirror traffic; it can maintain *exactly the same state* (e.g., TLS sessions, cache) through *state replication*. This reduces the cost of failover from O(N) re‑establishment to O(1), making the system *stateless* at the decision layer while still offering stateful performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
