---
qid: ing_230ff663cb__fp__local
question: 'Explain: Load Balancers — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 366
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:02-05:00'
sources: []
---

**Load Balancers in Machine‑Learning Serving**

When a model is deployed behind many identical inference workers (GPU servers, containers, or edge devices), the *fundamental problem* is to keep every worker busy while keeping latency low and avoiding over‑commitment of resources.  
Formally, let \(L_i(t)\) be the queue length of worker \(i\) at time \(t\). A load balancer selects a target \(j=\arg\min_j L_j(t)+\delta_{ij}\), where \(\delta_{ij}\) captures network cost or model‑specific constraints.  
This greedy policy is optimal under the *principle of least‑work* for Poisson arrivals and exponential service times: minimizing the maximum queue length yields minimal expected waiting time (Little’s Law).  

In practice, we augment this rule with **probabilistic routing** (e.g., weighted round‑robin) to smooth transient spikes and incorporate *feedback loops*: a worker reports its current load via heartbeat; the balancer adapts weights in real time.  
A non‑obvious insight: **cache locality matters more than raw compute speed**. A request that hits a cached embedding on a particular GPU can be routed there even if it is slightly busier, reducing overall inference time because memory bandwidth dominates compute for many models.

Thus, load balancers translate the abstract optimization of queue lengths into concrete routing policies that respect latency budgets, resource constraints, and cache effects—ensuring scalable, reliable ML serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
