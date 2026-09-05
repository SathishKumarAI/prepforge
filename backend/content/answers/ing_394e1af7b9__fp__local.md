---
qid: ing_394e1af7b9__fp__local
question: 'Explain: How it Works: — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 478
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:06:52-05:00'
sources: []
---

**Load‑balancing for AI inference** is the problem of *distributing a stream of requests across multiple compute nodes so that no node becomes a bottleneck while the total latency stays minimal*.  
At its core it’s an **online scheduling** problem: at time *t* we know only the incoming request size (e.g., batch‑size, model complexity) and the current queue lengths; future arrivals are unknown. The goal is to keep the *makespan*—the maximum completion time across all nodes—as low as possible.

The classic **Weighted Round‑Robin (WRR)** solves this by assigning each node a weight *wᵢ* proportional to its computational capacity. Requests arrive in a round‑robin cycle, but the cycle length for node *i* is *1/wᵢ*. In code:

```python
class WRR:
    def __init__(self, weights):
        self.weights = weights            # [2, 1, 3]
        self.idx = 0
        self.counter = 0

    def next_node(self):
        while True:
            w = self.weights[self.idx]
            if self.counter < w:          # still in this node’s turn
                self.counter += 1
                return self.idx
            else:                         # move to next node
                self.idx = (self.idx + 1) % len(self.weights)
                self.counter = 0
```

A **probabilistic approach**—*Stratified Sampling*—draws nodes with probability *pᵢ = wᵢ / Σw*; this is equivalent to WRR in expectation but introduces random jitter that can break synchronization patterns on GPU clusters.

**Non‑obvious insight:**  
WRR implicitly *maximizes the entropy* of the request distribution. By allocating “turns” proportional to capacity, it ensures that each node’s queue length fluctuates with high variance, which paradoxically reduces **queueing delay correlations** across nodes. In practice, this yields lower tail latency (99th percentile) even under bursty traffic—something most tutorials overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
