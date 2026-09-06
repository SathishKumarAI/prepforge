---
qid: ing_ffce7b9545__fp__local
question: 'Explain: Implementation: — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 640
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:38-05:00'
sources: []
---

### Why a Load Balancer is Needed  
When a service receives requests, each worker (CPU core, VM, container) has a finite processing capacity. If one worker gets more traffic than the others, its queue length grows while idle workers sit unused—this is **bottlenecking**.  
Mathematically we want to minimize the maximum queue length \(Q_{\max}\) across all workers. This is an instance of the *load‑distribution* problem in combinatorial optimization: assign tasks to machines so that \(\min\limits_{\text{assignments}}\; Q_{\max}\) is achieved.

### Classical Algorithms  
| Algorithm | Principle | Complexity |
|-----------|-----------|------------|
| **Round‑Robin** | Cycles through workers deterministically. | \(O(1)\) per request |
| **Least‑Connections** | Chooses worker with fewest active requests. | \(O(\log N)\) with a heap |
| **Weighted Round‑Robin** | Extends RR by assigning weights \(w_i\). | \(O(1)\) |
| **Hash‑Based (Consistent Hashing)** | Maps request key to worker via hash ring; only changes when workers join/leave. | \(O(\log N)\) |

The *Least‑Connections* rule is a greedy approximation of the optimal solution: it always picks the currently least loaded worker, which keeps \(Q_{\max}\) close to its lower bound.

### Implementation Sketch (Python)

```python
import heapq

class LoadBalancer:
    def __init__(self, workers):
        # min‑heap of tuples (active_conns, worker_id)
        self.heap = [(0, w) for w in workers]
        heapq.heapify(self.heap)

    def dispatch(self, request):
        active, wid = heapq.heappop(self.heap)
        # send request to wid …
        active += 1                      # increment load
        heapq.heappush(self.heap, (active, wid))
```

*Why a heap?*  
The heap gives \(O(\log N)\) access to the least‑loaded worker while maintaining order after each update—exactly what we need for *Least‑Connections*.

### Visual Insight  
Imagine workers as buckets and requests as balls.  
- **Round‑Robin** pours balls evenly but ignores bucket depth; a sudden burst can overflow one bucket before others catch up.  
- **Least‑Connections** always fills the shallowest bucket first, keeping the overall stack height minimal—this is why it’s robust under variable request sizes.

### Non‑Obvious Takeaway  
*Load balancing is not just about fairness; it is an online version of the *online bin packing* problem.* The greedy “least‑connections” strategy achieves a competitive ratio close to optimal for most traffic patterns, and the heap implementation guarantees this bound in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
