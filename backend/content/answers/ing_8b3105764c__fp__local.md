---
qid: ing_8b3105764c__fp__local
question: 'Explain: Load Balancing — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 325
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:49-05:00'
sources: []
---

**Why the protocol matters for a load balancer**

At its core, a load balancer must route *requests* to backend servers while keeping the system stable and responsive.  
For **TCP** the request is an opaque byte stream that guarantees delivery, ordering and congestion control. A balancer can therefore use simple round‑robin or least‑conn algorithms because each connection will be closed cleanly; the backend’s state (open sockets, half‑closed handshakes) is predictable.

With **UDP**, there is no handshake, no flow control, and packets may arrive out of order or be lost. The balancer must therefore decide *per packet* where to send it, and it can’t rely on connection‑level metrics. Instead it needs a *hash‑based* scheme (e.g., source IP + port → server) so that all packets from the same flow go to the same backend; otherwise a single client’s stream would be split, breaking application semantics.

**Non‑obvious insight**  
Even when using hash‑routing for UDP, load balancers must still monitor *packet rate* per flow. A malicious client can flood one hash bucket with tiny packets, starving others. Thus, the optimal design couples **stateless hashing** (for speed) with a lightweight *per‑bucket rate limiter* that adapts to observed traffic—something most people overlook when they think “UDP is stateless.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
