---
qid: ing_eb6df235ee__faang__local
question: 'Explain: Web Browsing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 709
total_tokens: 945
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:47:32-05:00'
sources: []
---

**Clarify**  
You’re asking for a system‑design view of a web browser’s client–server architecture.  I’ll assume we need to describe the data flow, main components (browser, network stack, HTTP/HTTPS), and how they interact with a generic web server (HTTP server + application logic).  We’ll ignore peer‑to‑peer or CDN specifics unless asked.

**Approach**  
1. Outline the high‑level request–response cycle.  
2. Break down each layer: UI, rendering engine, networking stack, TLS, HTTP protocol, and server side.  
3. Highlight key responsibilities, protocols, and typical performance concerns.  
4. Discuss extensions (caching, multiplexing, push, security).

**Depth**

| Layer | Responsibility | Key Tech/Protocol |
|-------|----------------|-------------------|
| **Client UI / JavaScript Engine** | Parse HTML/CSS, build DOM & CSSOM, execute JS, perform layout and paint. | V8 / SpiderMonkey; CSS Object Model; WebAssembly. |
| **Browser Networking Stack** | Resolve DNS, open TCP/UDP sockets, maintain connection pool, apply congestion control. | `getaddrinfo`, epoll/kqueue, QUIC for UDP. |
| **TLS Layer** | Encrypt traffic, perform handshake, certificate validation. | TLS 1.3, PSK resumption, OCSP stapling. |
| **HTTP/HTTPS Layer** | Serialize requests, handle redirects, keep‑alive, pipelining/multiplexing. | HTTP/2 frames, header compression (HPACK), HTTP/3 (QUIC). |
| **Server Side** | Accept connections, route to application logic, serve static content or dynamic pages. | Nginx/Apache, Node.js/Express, Spring MVC; reverse proxy + load balancer. |

*Flow:*  
1. User enters URL → Browser resolves domain → DNS lookup → TCP handshake → TLS handshake → HTTP GET request → Server processes → Response headers + body → Browser parses → Rendered page.

**Edge Cases**

| Scenario | What can break | Test strategy |
|----------|----------------|---------------|
| Large payloads / slow networks | UI freezes, memory exhaustion | Load test with varying MTU, simulate throttling. |
| Malformed responses | Parsing errors, crashes | Feed crafted HTTP responses; fuzzing. |
| Certificate issues | Security warnings, denial of service | Test expired, mismatched CN, weak ciphers. |
| Server overload | Timeouts, 503 | Spike traffic; monitor connection limits. |

**Optimize & Communicate**

*Optimizations:*  
- **Connection pooling + HTTP/2 multiplexing** reduces latency.  
- **Service workers / caching** offload repeat requests to local storage.  
- **TLS session resumption** cuts handshake overhead.  
- **Content Delivery Network (CDN)** brings data closer to the client.

*Communication:* I’d present a diagram of the layered stack, narrate the request path, then discuss how each layer can be tuned for performance and reliability. Highlight trade‑offs: e.g., HTTP/2’s header compression vs. complexity, or QUIC’s reduced latency at cost of UDP support. This structured walk‑through shows clear problem framing, technical depth, and awareness of real‑world edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
