---
qid: ing_394e1af7b9__faang__local
question: 'Explain: How it Works: — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 463
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:55-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how load‑balancing works in AI pipelines, the algorithms used, and an example implementation—ideally with visual intuition. I’ll assume we’re balancing inference requests across GPU nodes, that latency is the key metric, and that the system can query node health.

**Approach**  
1. Define the problem: distribute incoming inference jobs to a set of compute workers so that overall latency stays low.  
2. Pick a small set of classic algorithms (Round‑Robin, Least‑Connections, Weighted‑Round‑Robin, Consistent Hashing).  
3. Show a quick Python prototype using `concurrent.futures` and a simple visual diagram.

**Depth**  
```python
import random
from collections import defaultdict

class LB:
    def __init__(self, nodes):
        self.nodes = nodes          # list of (node_id, weight)
    
    # Weighted Round‑Robin
    def choose_wrr(self):
        total = sum(w for _,w in self.nodes)
        r = random.uniform(0,total)
        upto=0
        for node,w in self.nodes:
            if upto + w >= r: return node
            upto += w

    # Least‑Connections (naïve O(n))
    def choose_lc(self, state):
        return min(state.keys(), key=lambda n: state[n])
```
*Visual:*  
```
Client --> LB --> [Node1]  ← latency 10ms
                     |         ← latency 30ms
                    ...
```

**Edge Cases**  
- Node failure → health‑check fallback.  
- Skewed request patterns → dynamic weight adjustment.  
- High‑cardinality keys → consistent hashing to preserve locality.

**Optimize & Communicate**  
Explain that in production we’d use a distributed hash ring (e.g., `hash_ring`), keep per‑node queues, and expose metrics via Prometheus. Highlight trade‑offs: RR is O(1) but ignores load; LC is accurate but O(n). Conclude by summarizing how the code demonstrates the core idea while leaving room for scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
