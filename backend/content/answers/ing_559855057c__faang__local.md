---
qid: ing_559855057c__faang__local
question: 'Explain: HTTP Request/Response — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 503
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:03:00-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer wants the full end‑to‑end flow of an HTTP GET when you type `https://example.com`.  
Assumptions:  
- Standard HTTPS, no special DNS tricks.  
- Browser uses default OS resolver and cache.  
- No CDN or reverse proxy involvement beyond typical infrastructure.

**2️⃣ Approach**  
Outline the stages: DNS lookup → TCP handshake → TLS handshake → HTTP request/response → rendering & caching.  

**3️⃣ Depth**  
1. **DNS** – Browser checks its in‑memory cache; if miss, queries OS resolver → recursive server → authoritative zone → IP returned.  
2. **TCP** – 3‑way handshake (SYN→SYN‑ACK→ACK) establishes a connection to the resolved IP on port 443.  
3. **TLS** – ClientHello → ServerHello → certificate chain verification → key exchange (e.g., ECDHE_RSA). Result: encrypted channel.  
4. **HTTP/1.1 or HTTP/2** – Browser sends `GET / HTTP/1.1` with headers (`Host`, `Accept‑Encoding`, `Cookie`). The server processes the request, runs application logic, queries DB, returns a response (status line + headers + body).  
5. **Rendering** – Browser parses HTML → builds DOM → loads CSS/JS/images via subsequent requests (parallel TCP/TLS connections or multiplexed streams in HTTP/2).  
6. **Caching & CDN** – Responses hit `Cache-Control` and `ETag`; if stale, conditional GET (`If-None-Match`) may be sent.

**4️⃣ Edge Cases**  
- DNS NXDOMAIN → error page.  
- TLS handshake failure (bad cert) → blocked.  
- HTTP/2 multiplexing limits or server push mis‑config.  
- Browser throttling of concurrent connections (≈6 per host).

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: HTTP/2 reduces head‑of‑line blocking vs. legacy HTTP/1.1’s connection limits. Discuss CDN placement to cut RTT, use of persistent TLS sessions (session resumption) to avoid full handshakes on every request. Conclude by noting that understanding each layer lets you pinpoint bottlenecks in latency or failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
