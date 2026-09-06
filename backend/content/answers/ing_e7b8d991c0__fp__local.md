---
qid: ing_e7b8d991c0__fp__local
question: 'Explain: Top 6 Load Balancing Algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 563
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:59-05:00'
sources: []
---

### Six Load‑Balancing Algorithms for Distributed Machine‑Learning Workloads  

1. **Round‑Robin** – *Uniformity Principle*  
   Each worker receives the next job in sequence. The algorithm implicitly assumes that all workers are homogeneous and that the cost of dispatching a request is negligible. It works because, over many iterations, the number of tasks per node converges to the same value (law of large numbers).  

2. **Least‑Connections** – *Dynamic Work‑load Principle*  
   A request is routed to the worker with the fewest active jobs. This adapts to real‑time load and reduces tail latency by ensuring that a busy node is not overburdened. It is optimal under the assumption that processing times are i.i.d., because it minimizes the expected remaining work on each node.  

3. **Weighted Round‑Robin** – *Capacity‑Proportional Principle*  
   Nodes receive tasks in proportion to a weight that reflects their compute capacity or memory. The weights can be derived from profiling or autoscaling metrics, ensuring that more powerful GPUs get more batches.  

4. **Consistent Hashing** – *State‑Locality Principle*  
   Jobs are mapped to nodes via a hash of an identifier (e.g., data shard). When nodes join/leave, only O(1/N) jobs migrate, preserving cached feature vectors and reducing shuffling overhead—a critical advantage for large‑scale embedding systems.  

5. **Least‑Response‑Time** – *Queue‑Length Principle*  
   Uses latency feedback to pick the node that will finish the request fastest. This is equivalent to solving a stochastic optimization problem where the objective is the expected completion time; it naturally balances queue lengths and service rates.  

6. **Source‑IP (or Session) Hashing** – *Affinity Principle*  
   Keeps all requests from the same client on the same node, which reduces cache misses in models that maintain per‑client state (e.g., recommendation systems).  

#### Non‑obvious Insight  
Many practitioners overlook that **load balancing is essentially a control‑theoretic problem**: you are continuously estimating each node’s *state* (queue length, latency) and applying a policy to drive the system toward an equilibrium. Viewing it as such explains why hybrid strategies—e.g., least‑connections combined with weighted round‑robin—often outperform any single algorithm in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
