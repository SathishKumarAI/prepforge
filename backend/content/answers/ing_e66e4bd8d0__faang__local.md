---
qid: ing_e66e4bd8d0__faang__local
question: 'Explain: How a Request Flows Through the System — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 459
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:08-05:00'
sources: []
---

**Clarify**  
You’re asked how an HTTP request travels from a client to the backend services and how a load balancer orchestrates that traffic. I’ll assume a stateless REST API, multiple identical application instances behind the balancer, and a simple round‑robin or least‑connections strategy.

**Approach**  
1. Client → DNS → Load Balancer (LB)  
2. LB selects an instance based on its algorithm  
3. LB forwards request (TCP/TLS handshake, HTTP headers) to chosen instance  
4. Instance processes request, queries DB/cache if needed, returns response  
5. Response travels back through the same path to client

**Depth**  
- **LB Selection**: Round‑robin distributes evenly; least‑connections keeps load balanced under bursty traffic. Health checks (HTTP/ICMP) keep unhealthy nodes out of rotation.  
- **Session Affinity**: Optional sticky sessions via cookies or source IP hash if stateful interactions are required.  
- **TLS Termination**: Often handled at the LB to offload CPU, with re‑encryption downstream for end‑to‑end security.  
- **Scaling**: Auto‑scaling groups adjust instance count based on metrics (CPU, latency).  
- **Observability**: Distributed tracing (e.g., OpenTelemetry) tags each hop; metrics dashboards show request counts, error rates per backend.

**Edge Cases**  
- Sudden spike → LB can drop or queue requests; graceful degradation.  
- Backend failure mid‑request → LB retries on a healthy instance or returns 502.  
- Network partitions → health checks detect and remove unreachable nodes.

**Optimize & Communicate**  
Explain trade‑offs: round‑robin is simple but may overload a slow node; least‑connections adapts but needs accurate connection counts. Emphasize that the LB’s design hinges on latency, fault tolerance, and cost. Conclude by noting that a well‑architected LB turns a chaotic request stream into predictable, scalable traffic flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
