---
qid: ing_2c6c9c3b9c__fp__local
question: What are some of the common load balancing solutions?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 531
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:02-05:00'
sources: []
---

**Why we need load‑balancing at all**

When a model is trained or served, each request or minibatch is an *optimization step* that consumes compute time \(t_i\) and memory \(m_i\). The total wall‑clock latency is governed by the slowest worker (the “bottleneck”). Formally we want to minimize  
\[
L = \max_{w}\Bigl(\sum_{i\in w} t_i,\, \sum_{i\in w} m_i\Bigr)
\]
subject to capacity constraints. This is a classic *min‑max* scheduling problem: the optimum distributes work so that no worker exceeds the others’ load.

**Common solutions and why they fit**

| Strategy | How it works | Why it satisfies the min‑max goal |
|----------|--------------|-----------------------------------|
| **Round‑robin** | Assign requests in fixed order to workers. | Guarantees equal *count* of tasks; good when \(t_i\) is uniform. |
| **Least‑connection / Least‑load** | Direct next request to worker with fewest active jobs or lowest running time. | Dynamically tracks current load, approximating the min‑max optimum for heterogeneous workers. |
| **Weighted round‑robin** | Rotate requests but give more weight to faster nodes (e.g., GPU vs CPU). | Scales with relative performance; mathematically equivalent to solving a weighted version of the scheduling problem. |
| **Hash‑based sticky sessions** | Hash request key → worker, ensuring same user always hits same node. | Reduces cache misses and data transfer costs, effectively lowering \(t_i\) for repeated requests. |
| **Dynamic task stealing** | Idle workers “steal” tasks from busy queues. | Eliminates idle time; asymptotically approaches optimal load distribution as the system size grows. |

**Non‑obvious insight**

Most practitioners treat load balancing purely as a throughput problem, but in ML it’s also an *information* problem: if a worker receives highly correlated minibatches (e.g., from the same data shard), its stochastic gradients become less diverse, hurting convergence speed. Thus, a truly optimal balancer should randomize task assignment not only for fairness but to maximize gradient diversity—effectively turning load balancing into a mini‑batch *entropy maximizer*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
