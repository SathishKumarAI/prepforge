---
qid: ing_1a6bed493b__faang__local
question: 'Explain: Concurrent Connections — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 545
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:46:37-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *load‑balancer* that can handle many concurrent client connections (e.g., HTTP, WebSocket). The key objectives are low latency, high throughput, fault tolerance, and horizontal scalability. I’ll assume:  
- Stateless backend services behind the balancer.  
- Clients use TCP or TLS; we support graceful shutdown.  
- Metrics (latency, error rate) must be exposed.

**Approach**  
1. **Front‑end** – a reverse proxy with connection pooling and a thread‑per‑connection model (or async I/O).  
2. **Health checks** – periodic probes to backends; unhealthy nodes are removed from rotation.  
3. **Scheduling** – implement *least‑congested* or *consistent hashing* to distribute traffic, preserving session affinity when needed.  
4. **Scaling** – run multiple balancer instances behind a global DNS (e.g., AWS Route 53) with health‑based routing.  
5. **Observability** – expose Prometheus metrics; use distributed tracing (OpenTelemetry).

**Depth**  
- Use an event‑driven framework (Nginx, Envoy, or custom libuv).  
- For TCP, maintain a pool of worker threads; each thread handles many sockets via epoll/kqueue.  
- Round‑robin + *“least‑queued”* algorithm: keep per‑backend queue lengths in an atomic counter to pick the lightest node.  
- Health checks run asynchronously; a backend is marked *DOWN* if it fails 3 consecutive probes (configurable).  
- Complexity: O(1) per request for routing; O(N) for health‑check sweep, where N = backends.

**Edge Cases**  
- Sudden surge → queue overflow → apply backpressure or drop policy.  
- Backend crash while serving a request → connection reset; client retries handled by the balancer’s retry logic.  
- Network partitions → stale health state → mitigate with short TTLs and exponential backoff.

**Optimize & Communicate**  
- Profile hot paths: connection accept, hash calculation, queue lookup.  
- If latency spikes, shift to async I/O or increase worker count.  
- Explain trade‑offs: consistent hashing reduces churn but may hurt load balance; round‑robin is simple but ignores node capacity.  

This design satisfies FAANG expectations: clear assumptions, systematic plan, technical depth with complexity analysis, edge‑case awareness, and a roadmap for optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
