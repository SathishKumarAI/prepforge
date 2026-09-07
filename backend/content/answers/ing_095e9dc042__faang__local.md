---
qid: ing_095e9dc042__faang__local
question: How does the load balancer choose the backend server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:13-05:00'
sources: []
---

**Clarify**  
The question asks how a load balancer (LB) selects which backend instance should receive an incoming request.  
Assumptions:  
* The LB sits in front of multiple identical or heterogeneous servers.  
* Requests are HTTP/HTTPS or TCP, and the LB is state‑agnostic unless sticky sessions are required.

**Approach**  
1. **Gather metrics** – health checks, current load, latency, etc.  
2. **Choose a strategy** – round‑robin, least‑connections, weighted, IP hash, or custom logic.  
3. **Apply the algorithm** – pick a target, route the request, and update state if needed.

**Depth**  
* *Round‑Robin*: simple counter; O(1) per request, no state beyond an index.  
* *Least‑Connections*: tracks active connections; requires atomic counters (e.g., Redis or in‑memory). Complexity O(n) to scan but can be optimized with min‑heap.  
* *Weighted/Resource‑Aware*: uses capacity or CPU/memory metrics; LB periodically polls servers and updates weights.  
* *Sticky Sessions*: IP hash or session cookie ensures same client hits the same server, useful for stateful apps.  
Health checks are performed at intervals; unhealthy nodes are temporarily removed from rotation.

**Edge Cases**  
* **Server churn** – adding/removing instances must not drop in‑flight traffic.  
* **High latency spikes** – weighted round‑robin can smooth out short bursts.  
* **Non‑uniform request sizes** – least‑bytes strategy may be preferable over connections.  
Testing: simulate varying loads, node failures, and verify no single point of failure.

**Optimize & Communicate**  
Explain trade‑offs: round‑robin is fast but ignores load; least‑connections balances better at cost of extra state. Highlight that in cloud environments (e.g., AWS ALB), the LB automatically handles health checks and scaling. Conclude with a recommendation based on workload: use weighted least‑connections for dynamic microservices, or IP hash for sessionful apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
