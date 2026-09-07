---
qid: ing_a01b3e4dcf__faang__local
question: 'Explain: Success Response (200 OK) — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 513
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:26-05:00'
sources: []
---

**Clarify**  
We’re asked: *“Explain Success Response (200 OK) – Design Load Balancer”*. I interpret this as designing a load balancer that reliably routes traffic to backend services and returns a 200 OK only when all health‑checks pass and the request is served correctly. Key assumptions: stateless HTTP traffic, multiple identical backends, eventual consistency, no TLS termination at LB.

**Approach**  
1. **Health‑check module** – periodic TCP/HTTP checks per instance.  
2. **Routing policy** – weighted round‑robin or least‑connections; maintain a live set of healthy nodes.  
3. **Failure handling** – on failed health‑check, mark node down and exclude it from routing until recovery.  
4. **Response aggregation** – forward client request to chosen backend; if 200 OK returned, propagate; otherwise retry with another healthy node up to *k* attempts.

**Depth**  
- Health checks run every *t* seconds; a node is considered unhealthy after *n* consecutive failures (to avoid flapping).  
- Routing table updated atomically using compare‑and‑swap or a lock‑free data structure.  
- Complexity: O(1) per request for routing; health‑check overhead is O(m) where *m* is number of nodes, executed asynchronously.  
- Trade‑offs: tighter health‑check frequency reduces latency but increases load on backends; heavier retries improve reliability at cost of higher RTT.

**Edge Cases**  
- Backend returns 5xx → LB retries until max attempts or no healthy nodes left (then 503).  
- Network partition → node may falsely appear healthy; mitigated by dual health‑check methods.  
- Sudden spike → queue requests temporarily to avoid overload.

**Optimize & Communicate**  
To reduce latency, use connection pooling and keep‑alive sockets. For scalability, shard the routing table across LB instances with consistent hashing. In a interview, I’d emphasize monitoring metrics (latency, error rate) and alerting for health‑check anomalies. This structured plan shows clear problem understanding, algorithmic choices, and real‑world trade‑offs expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
