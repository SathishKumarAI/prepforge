---
qid: ing_a06b2ddcd1__fp__local
question: 'Explain: 2.5 Key Insights — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 470
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:46:51-05:00'
sources: []
---

**Why a load‑balancer must exist**

A distributed service receives requests from many clients.  
If every request is routed arbitrarily (e.g., round‑robin) the *expected* load on each instance equals the global arrival rate divided by the number of instances, **but only if arrivals are perfectly uniform and all instances have identical capacity**. Real traffic is bursty, skewed, and nodes differ in performance or health. Without a balancing layer we would quickly hit bottlenecks, violate SLAs, and waste resources.

---

### 1. *Capacity‑aware routing*  
Treat each instance as a **resource with weight = effective throughput**.  
Using the *weighted round‑robin* or *Least‑Connection* algorithm ensures that heavier nodes absorb proportionally more traffic. This follows from the principle of **load minimisation**: to keep all queue lengths equal, assign requests in proportion to capacity.

### 2. *Health‑checking & graceful degradation*  
Maintain a health‑probe stream; remove failing nodes from the pool instantaneously. The probability that a client hits a dead node drops to zero if we maintain an accurate blacklist—an application of **redundancy** in reliability theory.

### 3. *Sticky sessions vs. statelessness*  
If the backend is stateful, we need *session affinity*. Otherwise we can route purely by capacity. The choice hinges on the **stateless‑vs‑stateful trade‑off**: sticky routing reduces cache hits but increases hot‑spot risk; stateless routing maximises parallelism.

---

#### Non‑obvious insight  
> **The “sweet spot” for weighted round‑robin is not the current throughput of a node, but its *predicted* future capacity after accounting for pending requests.**  
By estimating each instance’s queue length (current + in‑flight), we can weight routes to balance *future* load, not just instantaneous load. This anticipatory balancing reduces latency spikes that would otherwise arise from sudden traffic surges—an insight often missed when designers only look at past metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
