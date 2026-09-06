---
qid: ing_ec6867ace2__fp__local
question: 'Explain: Proxy vs Reverse Proxy (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 430
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:22:23-05:00'
sources: []
---

**Proxy vs Reverse Proxy – a first‑principles view**

At its core both devices perform *address translation*: they receive a request on one interface and forward it to another host or service.  
The difference lies in **who the client thinks it is talking to**.

|  | **Forward (regular) proxy** | **Reverse proxy** |
|---|-----------------------------|--------------------|
| Client’s view | “I am sending this to *X*.” | “I am sending this to the public server; I do not know the internal layout.” |
| Server’s view | “This request came from a client via *P*.” | “The request is directed to me (the reverse proxy) and must be dispatched internally.” |

Why it works that way:  
- **Forward proxies** hide the client’s IP, provide caching or filtering. The server still sees the proxy as the source, so the proxy’s job is to preserve the original request header while adding its own authentication or policy logic.  
- **Reverse proxies** expose a single entry point (often an HTTPS endpoint) and route traffic to backend services based on URL, headers, or load‑balancing algorithms. The internal servers are unaware of external identities; they only see the reverse proxy’s IP.

A deeper principle: *proxies implement indirection to decouple client–server communication from direct addressability*. This is an application of **abstraction** in distributed systems—clients interact with a single abstraction, while the proxy internally manages multiple concrete services.  

**Non‑obvious insight:**  
Because reverse proxies terminate TLS and often cache responses, they can *act as a de facto API gateway*. A forward proxy, by contrast, cannot protect backend services from each other; it only protects clients. Thus choosing between them is not just about routing but about where you want security boundaries and caching to live.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
