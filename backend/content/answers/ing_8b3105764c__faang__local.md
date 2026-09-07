---
qid: ing_8b3105764c__faang__local
question: 'Explain: Load Balancing — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:47-05:00'
sources: []
---

**Clarify**  
We’re asked how a load balancer handles **TCP** versus **UDP** traffic in a system‑design context.  
Assumptions: stateless or stateful services, typical health checks, latency constraints, and whether the client expects reliable delivery.

**Approach**  
1. Identify protocol semantics (connection‑oriented vs datagram).  
2. Map those to load‑balancing strategies (session persistence, connection tracking, health‑check style).  
3. Discuss underlying hardware/software differences and failure handling.  

**Depth**  

| Protocol | Core LB behavior | Health checks | State management |
|----------|------------------|---------------|-----------------|
| **TCP** | Tracks connections; uses *source IP/port* or *session cookie* for stickiness; often stateful “connection‑aware” load balancer. | TCP‑level probes (handshake) or application‑layer checks; can terminate and re‑establish TLS. | Maintains connection tables; can failover with graceful draining. |
| **UDP** | Stateless; distributes packets via round‑robin or hash of packet header (src/dst IP/port). No session table needed. | Simple ICMP or application‑layer echo; less robust because no handshake. | No per‑connection state; relies on client retry logic for reliability. |

- **Failover**: TCP LB can keep connections alive by forwarding to the same backend; UDP must rely on redundant instances or DNS round‑robin.  
- **Performance**: UDP is lighter (no SYN/ACK), but may require a separate layer‑7 LB if content‑based routing is needed.

**Edge Cases**  
- *TCP half‑open connections* during node failure → connection timeout vs graceful close.  
- *UDP packet loss* in burst traffic → need for jitter buffers or application retries.  
- *Large payloads* causing MTU fragmentation → UDP may drop entire datagram; TCP reassembles.

**Optimize & Communicate**  
For high‑throughput services, use a **Layer 4 LB** (e.g., HAProxy) for both protocols but enable connection persistence only for TCP. For media streaming or IoT, a dedicated **UDP LB** with rate limiting and replay protection is preferable. Explain that choosing the right LB type hinges on reliability needs versus latency budgets, and always validate with end‑to‑end load testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
