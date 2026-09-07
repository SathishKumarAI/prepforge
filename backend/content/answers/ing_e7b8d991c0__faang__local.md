---
qid: ing_e7b8d991c0__faang__local
question: 'Explain: Top 6 Load Balancing Algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 596
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:46-05:00'
sources: []
---

**Clarify**  
You’re asking for the six most common load‑balancing strategies used in production ML pipelines (model serving, inference clusters, data‑flow jobs). I’ll assume “load balancing” means distributing incoming requests or data shards across a set of worker nodes to maximize throughput and minimize latency.

---

**Approach**  
1. List each algorithm with its core idea.  
2. Briefly describe when it’s used in ML workloads.  
3. Mention key metrics (latency, fairness, fault tolerance).  

---

**Depth**

| # | Algorithm | Core Idea | Typical ML Use‑case |
|---|-----------|-----------|---------------------|
| 1 | **Round‑Robin** | Sequentially assign requests to nodes in order; wrap around at the end. | Stateless inference servers where all models have identical capacity. |
| 2 | **Least‑Connections (LC)** | Route to the node with the fewest active requests. | Serving systems where request sizes vary or some workers handle batch jobs. |
| 3 | **Weighted Round‑Robin / Weighted Least‑Connections** | Same as above but nodes get weights proportional to compute/GPU power. | Heterogeneous clusters (e.g., V100 vs A100 GPUs). |
| 4 | **Consistent Hashing** | Map keys (request IDs, user IDs) to nodes via a hash ring; minimal reshuffling on node changes. | Multi‑model serving where the same input must hit the same model replica for caching or session affinity. |
| 5 | **Latency‑Aware / Adaptive Routing** | Measure real‑time response times and bias traffic toward faster nodes. | Latency‑critical inference services with dynamic load spikes. |
| 6 | **Capacity‑Based (Resource‑aware)** | Use per‑node CPU/GPU/Memory counters to compute a score; pick the node with highest remaining capacity. | Training job schedulers that must respect GPU memory limits. |

---

**Edge Cases**

* Node failures → fallback to health checks or retry logic.  
* Sudden traffic bursts → LC can starve low‑latency nodes if not throttled.  
* Hash collisions in consistent hashing → use virtual nodes to smooth distribution.

---

**Optimize & Communicate**  

- Combine **Weighted Least‑Connections** with a small latency window for best of both worlds.  
- Periodically rebalance weights when hardware upgrades occur.  
- In the interview, emphasize that the choice depends on *heterogeneity*, *statefulness*, and *latency goals*—the key trade‑offs to highlight.  

This structured walk‑through satisfies FAANG’s SIGNAL rubric: clear framing, systematic exploration, technical depth, edge‑case awareness, and actionable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
