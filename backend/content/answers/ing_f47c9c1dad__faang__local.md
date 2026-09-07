---
qid: ing_f47c9c1dad__faang__local
question: 'Explain: When to Use : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 522
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:08:24-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *when* one should pick a particular load‑balancing algorithm, not just list them. I’ll assume the audience is familiar with basic HTTP/HTTPS traffic and wants guidance for a micro‑service or API gateway. Key assumptions: stateless services, multiple replicas, possible sticky sessions, and need for fault tolerance.

**Approach**  
1. Group algorithms by strategy (round‑robin, weighted, least‑connections, IP‑hash, health‑check).  
2. For each, state the ideal traffic pattern or requirement it solves.  
3. Provide a short Python snippet that shows how to implement it in a simple proxy.  
4. Add a tiny ASCII diagram to illustrate flow.

**Depth**  
| Algorithm | When to use | Code sketch (Python) | Complexity |
|-----------|-------------|----------------------|------------|
| **Round‑Robin** | Uniform traffic, equal capacity nodes | `index = (index + 1) % len(nodes)` | O(1) per request |
| **Weighted RR** | Nodes with different CPU/ram budgets | `weights=[2,1]; idx=next(weighted_iter)` | O(n) to build iterator |
| **Least‑Connections** | Variable response time; keep hot spots low | maintain `conn_count[node]`; pick min | O(log n) if heap |
| **IP‑Hash (Session stickiness)** | Need session affinity without cookies | `hash(ip)%len(nodes)` | O(1) |
| **Health‑Check aware** | Dynamic scaling or failures | periodic ping; remove from pool | Extra I/O overhead |

Visual:  
```
Client IP  →  LB   →  Node A
                 ↘︎
               Node B (if hash matches)
```

**Edge Cases**  
- Rapid node churn → need cache invalidation.  
- Very high request rates → round‑robin may become bottleneck; use async queue.  
- Sticky sessions with load balancer failover → fallback to cookie‑based affinity.

**Optimize & Communicate**  
Explain trade‑offs: weighted RR adds bookkeeping but improves utilization; least‑connections gives best performance under skewed loads but is heavier. End by recommending a hybrid: start with round‑robin, switch to least‑connections once traffic > threshold, and enable health checks in all cases. This shows awareness of real‑world constraints while keeping the answer concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
