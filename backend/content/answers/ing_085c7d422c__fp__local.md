---
qid: ing_085c7d422c__fp__local
question: 'Explain: How It Works : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 674
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:35-05:00'
sources: []
---

## How It Works: Load‑Balancing for AI Workloads  
*(Python + Matplotlib illustration)*

The **fundamental problem** is that a single inference node (GPU/TPU) can process only *k* requests per second, while the arrival stream is bursty and unpredictable. If we let all traffic hit one node, latency explodes; if we spread it arbitrarily, some nodes idle while others queue. The goal is to keep every worker saturated **and** minimize tail latency.

### Key Insight  
A load‑balancer must *adapt* to the **current state** of each worker, not just its static capacity. In stochastic terms this is a *dynamic resource allocation problem*: we observe the instantaneous queue length \(q_i(t)\) and adjust the routing probability \(p_i(t)\) so that the expected backlog stays near zero.

### Classic Algorithms

| Algorithm | Decision rule | Complexity |
|-----------|---------------|------------|
| **Round‑Robin** | Cycles through workers | O(1) per request |
| **Least‑Connection** | Picks worker with smallest \(q_i\) | O(n) |
| **Weighted Round‑Robin** | Uses static weights \(w_i\) | O(1) |
| **Dynamic Weight (e.g., *Power‑of‑Two*)** | Randomly sample 2 workers, pick lower \(q_i\) | O(1) |

The *Power‑of‑Two* trick is non‑obvious: sampling two nodes reduces the maximum queue length from \(O(\log n)\) to \(O(\log \log n)\), a dramatic tail‑latency win for large clusters.

### Code Sketch

```python
import random, time
from collections import deque

class Worker:
    def __init__(self, id):
        self.id = id
        self.queue = deque()

    def process(self):
        if self.queue:                      # pop the oldest request
            req = self.queue.popleft()
            time.sleep(req['latency'])      # mock inference time

workers = [Worker(i) for i in range(4)]

def power_of_two(request):
    a, b = random.sample(workers, 2)
    target = a if len(a.queue) <= len(b.queue) else b
    target.queue.append(request)

# Simulate incoming stream
for _ in range(1000):
    req = {'latency': 0.01}
    power_of_two(req)
```

### Visual (pseudo‑code)

```text
   ┌─────┐      ┌─────┐
   │req1│◄──────► w0  │
   └─────┘      └─────┘
          ▲            ▼
          │            │
       Round‑Robin  Least‑Conn.
```

### Takeaway  
A load balancer that *observes* queue lengths and uses the *Power‑of‑Two* rule achieves near‑optimal tail latency with minimal overhead—exactly what modern AI inference pipelines need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
