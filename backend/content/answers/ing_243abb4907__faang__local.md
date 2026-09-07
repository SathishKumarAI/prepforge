---
qid: ing_243abb4907__faang__local
question: What is a Reverse Proxy? — Proxy vs Reverse Proxy (Explained with Examples)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 433
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:42-05:00'
sources: []
---

**Clarify**

A reverse proxy sits **in front of one or more web servers**, intercepting client requests and forwarding them to the appropriate backend.  
Assumptions: we’re talking about HTTP(S), not generic TCP proxies, and the goal is load‑balancing or security.

**Approach**

1. Identify what a forward (client‑side) proxy does.  
2. Contrast that with a reverse proxy’s position behind the servers.  
3. Illustrate with concrete examples: CDN edge server, API gateway, nginx for Nginx/Apache.

**Depth**

| Forward Proxy | Reverse Proxy |
|---------------|--------------|
| Client → Proxy → Internet (caches public sites) | Client → Reverse Proxy → Backend Server(s) |
| Hides client IP, filters outgoing traffic | Hides backend topology, load‑balances, terminates TLS |
| Example: corporate proxy for employee web access | Example: Nginx fronting a cluster of Node.js services |

A reverse proxy can:
- **Load‑balance** across servers (Round‑Robin, least‑conn).  
- **Terminate SSL/TLS**, reducing CPU on backends.  
- **Cache static assets** to reduce load.  
- **Enforce security policies** (rate limiting, WAF).  

Implementation: `nginx.conf` snippet with `upstream app { server 127.0.0.1:3000; }` and `proxy_pass http://app;`.

**Edge Cases**

- *Sticky sessions*: need session persistence for stateful apps.  
- *Backend failures*: health‑check logic must be robust.  
- *Large file uploads*: reverse proxy buffering can become a bottleneck.

**Optimize & Communicate**

Mention that in large systems we often chain multiple proxies (edge CDN → internal reverse proxy → application servers) to separate concerns and improve observability. Conclude by highlighting how a reverse proxy abstracts the backend, simplifies scaling, and enhances security—key reasons why FAANG infra teams rely on them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
