---
qid: ing_16b4efb959__fp__local
question: How Does Load Balancing Work? — What Is a Load Balancer? | F5
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 374
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:59-05:00'
sources: []
---

**Why we need a load balancer**

A distributed ML system serves many inference requests.  
If every request is routed arbitrarily, some worker nodes become
over‑loaded while others sit idle, producing high latency or even failures.
The fundamental problem is *resource allocation* under uncertain demand.

**What a load balancer does**

It maintains a live view of each node’s capacity (CPU, GPU, memory) and
current utilisation. When a request arrives it selects the “best” target
by solving a lightweight optimisation:

\[
\text{argmin}_{i} \; \frac{\lambda_i + r}{C_i}
\]

where \(r\) is the resource demand of the new request,
\(C_i\) the node’s capacity, and \(\lambda_i\) its present load.
This greedy policy approximates the optimal *minimum‑maximum* utilisation
problem while keeping overhead negligible.

**Deep principle**

The balancing rule is a form of **online convex optimisation**.  
Each decision incurs a cost (latency), and we minimise the cumulative
cost subject to capacity constraints—exactly what load balancers do in real time.

**Non‑obvious insight**

Most people think only about *throughput* or *latency*.  
A subtle, yet critical factor is **cache locality**: routing consecutive
requests that share the same model weights to the same node keeps those
weights resident in GPU memory, reducing data transfer time far more than
pure utilisation metrics would suggest.  

So a load balancer isn’t just a traffic director; it’s an online optimiser
that balances capacity, latency, and cache locality to keep ML inference
smooth under unpredictable workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
