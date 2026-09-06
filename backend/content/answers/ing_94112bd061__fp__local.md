---
qid: ing_94112bd061__fp__local
question: 'Explain: How Health Checking Works — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 443
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:09-05:00'
sources: []
---

**Why a load balancer must “know” which servers are alive**

When traffic is split among *n* backend nodes, the goal is to keep the overall service latency low while never over‑loading a single node.  
Suppose we have no knowledge of server health: each request could be routed to any node. In the worst case, a failed or heavily loaded instance receives all traffic until a timeout occurs, causing cascading failures.  
The *optimal* policy (minimizing expected response time) is therefore:

1. **Maintain an up‑to‑date set** of “healthy” nodes.  
2. **Distribute requests uniformly** over that set.

Thus the load balancer needs a mechanism to discover which nodes are truly reachable and responsive—this is the *health check*.

---

### Deriving the health‑check algorithm

1. **Observable metric**: response time or success/failure of an HTTP/ICMP/TCP probe.  
2. **Decision rule**: accept a node as healthy if its recent probes meet a threshold (e.g., 5 consecutive successes).  
3. **Update frequency**: too fast → noisy; too slow → stale state. Choose a period \(T\) that balances responsiveness with overhead, often derived from the service’s SLAs.

The rule can be expressed as a Bayesian filter:  
\(P(\text{healthy} | \text{probe outcomes})\) is updated each round, and we accept if this posterior exceeds 0.95. This gives a principled way to tune sensitivity.

---

### Non‑obvious insight

Health checks should **not** be purely reactive (only after failures).  
Instead, they must be *predictive*: by monitoring latency trends before an error occurs, the balancer can preemptively drop traffic from nodes on the brink of failure. This anticipatory routing turns a reactive system into a proactive one, reducing mean‑time‑to‑detect and improving overall reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
