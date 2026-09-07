---
qid: ing_16e7fbedc2__faang__local
question: 'Explain: Introduction — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 544
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:37:36-05:00'
sources: []
---

**Clarify**

> *What happens when you type a URL into your browser?*  
> We need to describe the client‑side request flow and the server‑side response path, focusing on DNS resolution, TCP/TLS handshake, HTTP request/response, caching, load balancing, and content delivery. Assume a typical HTTPS site served by modern CDNs.

**Approach**

1. **Client → DNS** – resolve hostname to IP(s).  
2. **TCP Handshake + TLS** – establish secure connection.  
3. **HTTP Request** – GET/POST with headers (cookies, cache‑control).  
4. **Load Balancer / CDN edge** – route to nearest node, perform caching or origin fetch.  
5. **Origin Server** – application layer: authentication, business logic, database access.  
6. **Response** – status line, headers, body; may trigger client‑side rendering/JS.

**Depth**

- *DNS*: Recursive lookup via root → TLD → authoritative servers; returns A/AAAA records; supports IPv4/IPv6 and round‑robin for scaling.  
- *TCP/TLS*: 3‑way handshake, TLS 1.3 session resumption to reduce latency; certificates validated by browser.  
- *HTTP/2+ multiplexing*: multiple streams over one TCP connection; header compression (HPACK).  
- *Caching*: `Cache-Control`, ETag, conditional GET (`If-None-Match`). CDN edge serves cached assets, reducing origin load.  
- *Load Balancer*: round‑robin or least‑conn; health checks; TLS offload vs. end‑to‑end encryption.  
- *Origin*: stateless microservices behind a reverse proxy (NGINX/Envoy); database sharding, read replicas for scalability.

**Edge Cases**

- DNS failures → fallback to alternative IPs or error page.  
- TLS handshake errors → certificate mismatches, protocol downgrade attacks.  
- Cache stampede when many clients request uncached resource simultaneously.  
- Load balancer misconfiguration causing request routing loops.

**Optimize & Communicate**

Explain trade‑offs: keeping TLS on edge reduces latency but may expose origin to traffic; using HTTP/3 (QUIC) lowers head‑of‑line blocking. Highlight monitoring metrics: DNS lookup time, TLS handshake duration, CDN cache hit rate, origin response latency. Conclude with the importance of observability and auto‑scaling to maintain low request times under variable load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
