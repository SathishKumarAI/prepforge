---
qid: ing_cad0e3a10f__fp__local
question: 'Explain: 14 System Design - Load Balancing Algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 511
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:11:37-05:00'
sources: []
---

**Load‑balancing is the act of routing incoming requests so that no single server becomes a bottleneck while all capacity is used efficiently.**  
At its core, it solves an *online resource allocation* problem: we receive a stream of tasks \(t_1,t_2,\dots\) each with unknown future demand and must assign them to servers \(S=\{s_1,\dots,s_k\}\). The goal is to minimize the worst‑case or average load (e.g., maximum queue length, latency).  

**Why simple round‑robin fails:**  
If tasks differ in size or service time, round‑robin can leave some servers idle while others are overloaded. Hence we need *feedback* about current load.

### Key algorithms

| Algorithm | Principle | Complexity | When to use |
|-----------|-----------|------------|-------------|
| **Weighted Round‑Robin (WRR)** | Each server gets a token proportionate to its capacity; tokens cycle deterministically. | \(O(1)\) per request | Homogeneous workloads, no state changes. |
| **Least‑Connections** | Assign to the server with fewest active connections. | \(O(\log k)\) (heap) | Short‑lived connections, dynamic traffic spikes. |
| **Consistent Hashing** | Map requests to points on a hash ring; servers own intervals. | \(O(\log k)\) per lookup | Distributed caches or key‑value stores where data locality matters. |
| **Weighted Least‑Connections (WLC)** | Combines WRR weights with least‑connections metric. | \(O(\log k)\) | Heterogeneous server pools. |

### Deeper insight

Load balancers are essentially *online convex optimizers*: each request is a decision point, and the objective function (e.g., max load) is convex in server assignments. Algorithms like Least‑Connections implement a greedy descent on this function without knowing future arrivals.  

**Non‑obvious takeaway:** In highly bursty traffic, **dynamic reweighting**—periodically adjusting WRR weights based on recent latency statistics—outperforms static policies because it implicitly anticipates the *law of large numbers* smoothing that will occur as bursts dissipate. This subtle feedback loop is often overlooked but yields measurable gains in real‑world CDN and microservice deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
