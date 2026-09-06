---
qid: ing_ab6420b11b__fp__local
question: 'Explain: Drawbacks : — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 482
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:44-05:00'
sources: []
---

### Why load‑balancing matters in AI

When a model runs on many workers, the **fundamental problem** is to keep every worker busy while keeping latency low.  
Let \(x_i\) be the workload assigned to node \(i\). Minimising the *maximum* completion time is equivalent to solving  

\[
\min_{x}\max_i \frac{x_i}{s_i}
\]

where \(s_i\) is the processing speed of node \(i\).  
This is a classic **optimization** problem: we want to distribute work so that the slowest worker finishes as early as possible.

### Why simple algorithms fail

1. **Round‑Robin (RR)** – assumes all nodes are identical and workloads are uniform. In practice, data shards vary in size and inference cost, so RR can leave some workers idle while others are overloaded.  
2. **Weighted RR** – assigns weights based on *past* performance, but ignores the stochastic nature of incoming requests; a sudden burst of heavy inputs can still overwhelm a node.  
3. **Least‑Connection (LC)** – treats each request equally, ignoring that some inference steps require GPU acceleration and others are CPU‑bound. Thus LC may route many short jobs to a GPU‑heavy node, wasting GPU cycles.

### Deeper insight: *probabilistic capacity planning*

Because workloads are random, the **law of large numbers** guarantees that a well‑designed scheduler will converge to an optimal distribution only if it continuously adapts to *observed* service rates. Static weights cannot capture this dynamic. A non‑obvious point is that **feedback delay**—the time between observing a node’s load and adjusting its weight—is often the bottleneck; even perfect weighting schemes degrade if updates lag by a single batch.

### Bottom line

Load‑balancing algorithms must be *probabilistic* and *adaptive*. They should model each worker’s stochastic service curve, update weights in real time (e.g., via exponential smoothing), and include constraints for heterogeneous resources. Only then can the system approach the theoretical optimum derived from the minimax objective above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
