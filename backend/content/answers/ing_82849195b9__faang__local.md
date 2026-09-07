---
qid: ing_82849195b9__faang__local
question: 'Explain: Load Balancing Algorithms Explained with Code'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 693
total_tokens: 925
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:25-05:00'
sources: []
---

**Clarify**  
We’re asked to describe common load‑balancing algorithms (Round Robin, Least Connections, Weighted variants) and show how to implement them in code. I’ll assume a stateless request stream, a set of backend servers with health status, and that we only need to route each incoming request.

**Approach**  
1. Enumerate the core algorithms.  
2. For each, give a concise Python implementation that can be unit‑tested.  
3. Mention time/space complexity and key trade‑offs.  

**Depth**

| Algorithm | Idea | Code (Python) | Complexity |
|-----------|------|---------------|------------|
| **Round Robin** | Cycle through servers in order. | ```python<br>class RR:<br>    def __init__(self, servers):<br>        self.servers = servers<br>        self.idx = 0<br>    def next(self):<br>        srv = self.servers[self.idx % len(self.servers)]<br>        self.idx += 1<br>        return srv``` | O(1) per request |
| **Least Connections** | Track active connections; pick server with fewest. | ```python<br>class LC:<br>    def __init__(self, servers):<br>        self.servers = {s:0 for s in servers}<br>    def next(self):<br>        srv = min(self.servers, key=self.servers.get)<br>        self.servers[srv] += 1<br>        return srv<br>    def release(self,srv):<br>        self.servers[srv]-=1``` | O(n) to find min (or use heap for O(log n)) |
| **Weighted Round Robin** | Each server has weight *w*; serve w consecutive requests before moving on. | ```python<br>class WRR:<br>    def __init__(self, servers_weights):<br>        self.servers = list(servers_weights.keys())\n        self.weights = list(servers_weights.values())\n        self.idx=0\n        self.current_weight=0\n    def next(self):<br>        while True:<br>            self.idx=(self.idx+1)%len(self.servers)<br>            if self.idx==0: self.current_weight-=gcd(self.weights)\n            if self.current_weight<=0: self.current_weight=self.weights[self.idx]\n            if self.current_weight>0: return self.servers[self.idx]``` | O(1) amortized |

**Edge cases**  
- **Server failure** – need health‑checks; remove from pool.  
- **Zero weight** – skip server.  
- **Tie in least connections** – pick first or random to avoid bias.  

**Optimize & communicate**  
Use a concurrent data structure (e.g., `threading.Lock` or atomic counters) for production. Explain that Round Robin is fastest but ignores load skew; Least Connections adapts but costs O(n). Weighted RR balances capacity and keeps low overhead. Clarify trade‑offs in my interview narrative, showing I can pick the right algorithm based on system constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
