---
qid: ing_a9b67100e9__fp__local
question: 'Explain: Load Balancing Across Multiple Servers — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 567
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:04-05:00'
sources: []
---

**Load balancing across multiple servers – proxy vs reverse‑proxy**

The core problem is *distribution of traffic* so that no server becomes a bottleneck while all requests finish quickly.  
A **forward proxy** sits in front of clients; it receives every request, decides which upstream server to contact, and forwards the response back. It is useful when you want to hide internal topology or enforce policies on outbound traffic (e.g., corporate firewalls).  

A **reverse proxy** does the same routing but from the perspective of incoming requests. Clients hit a single IP/port; the reverse proxy inspects headers, URI, or session state and forwards to one of many back‑end servers. Because the clients never see the internal addresses, you can add SSL termination, caching, or request rewriting transparently.

### Why each must behave that way

* **Stateless routing** (hashing on IP/URL) guarantees equal load but may break sticky sessions.
* **Health checks** keep a server out of rotation when it fails; otherwise traffic would be sent to an unresponsive node.
* **Connection persistence** (TCP keep‑alive or HTTP/1.1 Keep-Alive) reduces TLS handshake overhead—critical for low latency.

### Non‑obvious insight

Both proxies *implicitly perform load balancing by solving a set of constraints*:  
1. **Capacity constraint** – each back‑end’s current load must stay below its threshold.  
2. **Cost constraint** – routing should minimize round‑trip time or network hops.  

A well‑designed proxy turns this into an online optimization problem: at each request, pick the server that maximizes *future* throughput, not just current utilization. Techniques like weighted least connections or dynamic latency weighting embody this principle and are often overlooked in simple “round‑robin” tutorials.

---

**Example:**  
A company’s public API uses a reverse proxy (NGINX) on 443. The proxy terminates TLS, runs health checks against three app servers (`app1`, `app2`, `app3`), and forwards requests based on the URL path: `/v1/* → app1`, `/v2/* → app2`. If `app2` becomes overloaded, NGINX automatically stops sending traffic there until it recovers. Clients never see `app2`’s internal IP, simplifying scaling and security.

In contrast, a forward proxy in the same network would sit at 10.0.0.1:3128, intercepting all outbound web requests from employees. It could route them to any external server, but it doesn’t help balance load on the company’s own back‑ends; that is the reverse‑proxy’s domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
