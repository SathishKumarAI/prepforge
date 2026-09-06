---
qid: ing_d0e35a9542__fp__local
question: 'Explain: Summary — Proxy vs Reverse Proxy (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 612
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:50-05:00'
sources: []
---

**Why do we need a “proxy” at all?**  
A client wants to reach some resource (web page, API, file). In many deployments that resource is not directly exposed on the public network—firewalls, load‑balancing, or multi‑tenant isolation keep it hidden. A *proxy* sits between the client and the target, forwarding requests and responses while hiding internal details.

### Proxy  
- **Role:** Client → Proxy → Server  
- **Perspective:** The proxy is an intermediary that the client explicitly knows about (e.g., a corporate HTTP proxy).  
- **Typical use‑case:** An employee’s browser sends all web traffic through a corporate proxy to enforce security policies, cache content, or perform authentication.  
- **Key property:** The client *must* configure its software to use the proxy; it is part of the client’s request path.

### Reverse Proxy  
- **Role:** Client → Reverse Proxy → Backend Servers  
- **Perspective:** The reverse proxy presents itself as the actual service; clients are unaware of the backend.  
- **Typical use‑case:** A public domain `example.com` fronts a cluster of web servers, load‑balances requests, terminates TLS, and hides internal IPs. Clients just talk to `example.com`; the reverse proxy decides which backend handles each request.  
- **Key property:** The client never knows about the proxy; it is part of the server’s infrastructure.

---

#### Deeper insight  
Both are instances of *indirection*, a general optimization that decouples clients from servers. Indirection lets us:

1. **Scale** – distribute load across many backends without changing client URLs.
2. **Secure** – enforce policies (auth, rate‑limit) centrally.
3. **Observe** – log and monitor traffic in one place.

A non‑obvious fact: **Reverse proxies also act as “traffic managers” for protocols beyond HTTP**. For example, NGINX can proxy TCP streams to a database cluster, effectively turning it into a load‑balanced reverse proxy for any protocol that supports transparent forwarding. This shows that the proxy concept is rooted in *information routing*, not just web traffic.

---

#### Quick example

| Scenario | Client’s request path | What the client knows |
|----------|-----------------------|-----------------------|
| **Proxy** | `http://proxy.company.com:3128` → `https://api.external.org/…` | The proxy address. |
| **Reverse Proxy** | `https://www.example.com/api/…` → (internal) `http://10.0.1.5:8080/…` | Only `example.com`; backend IP hidden. |

In both cases the client is oblivious to the internal network, but only the reverse proxy hides itself from the client.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
