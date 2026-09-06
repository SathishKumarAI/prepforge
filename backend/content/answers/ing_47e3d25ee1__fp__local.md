---
qid: ing_47e3d25ee1__fp__local
question: 'Explain: Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 528
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:21-05:00'
sources: []
---

**Why a load balancer is essential**

In any distributed ML inference service you have many model‑hosting nodes (GPU pods, TPU workers, etc.). Each request must be routed somewhere that can serve it promptly. Without coordination the system suffers *hot spots*—one node gets overwhelmed while others sit idle. The fundamental problem is to **balance incoming traffic** so that every worker’s queue length stays near the optimum, minimizing latency and maximizing resource utilisation.

---

### Deriving the algorithmic design

1. **Queue‑length minimisation**  
   Let \(q_i\) be the current queue size of node \(i\). The *global* objective is to minimise \(\sum_i q_i^2\), because this penalises long queues more heavily (a convex cost function).  
   A simple greedy rule that always forwards a request to the node with minimal \(q_i\) achieves a 2‑approximation of this optimum, and it can be implemented by a lightweight “least‑congested” selector.

2. **Statistical smoothing**  
   Raw queue lengths fluctuate wildly; we therefore maintain an exponential moving average \(\hat q_i = \alpha q_i + (1-\alpha)\hat q_{i}^{prev}\). This is essentially a low‑pass filter that turns the problem into *online stochastic optimisation*—the scheduler updates its estimate of each node’s load and reacts gradually, preventing oscillations.

3. **Scalability & fault tolerance**  
   Store \(\hat q_i\) in a distributed key–value store (e.g., etcd). Each balancer instance can read the current state without a single point of failure. When a node dies, its entry is removed automatically and the greedy rule re‑routes traffic.

---

### Non‑obvious insight

Most designs treat the load balancer as a *routing* layer only, ignoring that the queue length itself is a noisy measurement of future latency. By interpreting \(\hat q_i\) as an **online estimator** of the expected service time (via Little’s Law), we can turn the balancer into a *predictive controller*: it anticipates congestion before it materialises and pre‑emptively shifts traffic, achieving sub‑10 ms tail latency in high‑throughput ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
