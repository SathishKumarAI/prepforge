---
qid: ing_82849195b9__fp__local
question: 'Explain: Load Balancing Algorithms Explained with Code'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 633
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:55-05:00'
sources: []
---

**Why we need a load‑balancer for machine learning**

When you train on many workers, each worker consumes CPU/GPU time and memory.  
If the data are not split evenly or if some workers finish early, the total
training time is bounded by the slowest node – a classic *straggler* problem.
A load‑balancer keeps every worker busy while respecting resource limits,
minimising variance in per‑worker workload and thus reducing wall‑clock time.

---

### 1. Static equal‑partitioning

```python
def static_split(dataset, n_workers):
    """Return a list of (start, end) indices for each worker."""
    size = len(dataset)
    chunk = size // n_workers
    ranges = [(i*chunk, (i+1)*chunk if i < n_workers-1 else size)
              for i in range(n_workers)]
    return ranges
```

*Why it works:*  
If every sample has the same cost \(c\), each worker processes ≈\(c·chunk\) work.
The total time is \(\max_i (c·chunk)\), which equals \(c·chunk\).  
**Limitation:** Real‑world data are heterogeneous; some batches may take longer.

---

### 2. Dynamic round‑robin with feedback

```python
import queue, threading

class Balancer:
    def __init__(self, workers):
        self.workers = workers          # list of worker objects
        self.q = queue.Queue()          # pending tasks
        self.lock = threading.Lock()

    def enqueue(self, task):
        self.q.put(task)

    def dispatch(self):
        while not self.q.empty():
            for w in self.workers:
                if w.is_idle():                 # worker ready?
                    try: 
                        t = self.q.get_nowait()
                    except queue.Empty:
                        return
                    w.start(t)                  # run task
```

*Why it works:*  
Workers pull from a shared FIFO.  If a worker finishes early, it pulls the next
task immediately; slow workers naturally receive fewer tasks because they are
not idle when the queue is drained.  This implements *work‑stealing* in a
deterministic way.

---

### Non‑obvious insight

Both strategies implicitly solve an **online scheduling** problem:  
minimise \(\max_i T_i\) (makespan) given unknown processing times.  
The static split is optimal only when all tasks are equal; the dynamic one
approaches optimality as soon as workers differ in speed or task cost, because
the queue acts as a *global reservoir* that smooths out variance.

> **Key takeaway:** In distributed ML, load balancing is not just about dividing data;
> it’s an online optimisation problem where feedback from worker status
> drives the allocation policy.  Ignoring this leads to wasted GPU cycles and
> longer training times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
