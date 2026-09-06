---
qid: ing_f47c9c1dad__fp__local
question: 'Explain: When to Use : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 544
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:13-05:00'
sources: []
---

### Why you need a *load‑balancer* for AI workloads

When an inference or training job is split across many GPUs, CPUs, or edge devices, the **bottleneck** is no longer the model itself but the *distribution of work*. If one node gets more samples than the others, its queue length grows, latency spikes, and overall throughput drops. A load‑balancer is the optimization that enforces a *fair* or *throughput‑maximizing* allocation—exactly what any distributed system must do to approach the ideal of *linear scaling*.  

### When to pick each algorithm

| Algorithm | Use case | Assumption |
|-----------|----------|------------|
| **Round‑Robin** | Static batch sizes, low variance in inference time | All workers identical |
| **Least‑Connection (LC)** | Variable request latency, heterogeneous nodes | You can query current queue lengths |
| **Weighted LC / Power‑of‑Two Choices** | Skewed workloads or GPUs with different FLOPs | You know a performance weight per worker |

### Code sketch

```python
import random, time
from collections import deque

class Worker:
    def __init__(self, id, speed):          # speed = samples/sec
        self.id, self.speed = id, speed
        self.queue = deque()

def lc_schedule(workers, batch):
    """Least‑Connection: pick worker with shortest queue."""
    w = min(workers, key=lambda x: len(x.queue))
    w.queue.append(batch)
    return w.id

# demo
workers = [Worker(i, 100) for i in range(4)]
for _ in range(10):
    batch = random.randint(1,5)
    lc_schedule(workers, batch)

print([(w.id, len(w.queue)) for w in workers])
```

### Non‑obvious insight

Most people treat load‑balancing as a *static* problem. In AI, **batch size itself changes** during training (e.g., curriculum learning). A good balancer must adapt its weights on the fly—monitoring GPU utilization and adjusting target queue lengths in real time—to keep all devices saturated without causing thrashing.

> **Bottom line:** Choose round‑robin for homogeneous, steady workloads; switch to least‑connection or weighted variants when device capabilities differ or inference times fluctuate. The goal is always *maximizing aggregate throughput while keeping latency bounded*, the core principle of distributed optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
