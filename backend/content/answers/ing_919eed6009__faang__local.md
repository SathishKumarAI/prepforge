---
qid: ing_919eed6009__faang__local
question: 'Explain: HTTP/3 — Explaining 8 Popular Network Protocols in 1 Diagram'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 652
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:46-05:00'
sources: []
---

**Clarify**  
You want a single visual that maps the eight most‑used internet protocols (HTTP/1.x, HTTP/2, HTTP/3, HTTPS, FTP, SMTP, DNS, WebSocket) and how they interrelate in a typical client‑server stack. Assume we’re targeting an audience with basic networking knowledge and want to emphasize flow, transport layer, and encryption.

**Approach**  
*Sketch the layers first:* Application → Transport → Network.  
Label each protocol at its appropriate layer:  
- **HTTP/1.x / 2 / 3 & HTTPS** (Application)  
- **TCP** for HTTP/1.x & 2; **QUIC** for HTTP/3 (Transport)  
- **TLS** wrapped around TCP/QUIC (Security)  
- **DNS, FTP, SMTP, WebSocket** share the Application layer but differ in purpose.  
Then connect them to common services: web browsers ↔ servers, email clients ↔ mail servers, file transfer tools ↔ FTP/SFTP servers, etc.

**Depth**  
```
+---------------------------+
|   Application Layer       |
|  ┌───────┐  ┌───────┐      |
|  │HTTP/1│  │HTTPS │      |
|  │ HTTP/2│  │TLS   │      |
|  │HTTP/3 │  │QUIC  │      |
|  └───────┘  └───────┘      |
|  │FTP    │  │SMTP   │     |
|  │WebSocket│               |
+---------------------------+
          ▲
          │
+---------------------------+
|   Transport Layer         |
|  ┌───────┐  ┌───────┐      |
|  │ TCP  │  │ QUIC │      |
+---------------------------+
          ▲
          │
+---------------------------+
|   Network Layer           |
|  └───────┘ (IP)            |
+---------------------------+
```
*HTTP/3 replaces TCP with QUIC, which runs over UDP and bundles TLS 1.3.*  
*HTTPS is simply HTTP + TLS.*  
*WebSocket upgrades an existing HTTP connection to a bidirectional stream.*

**Edge Cases**  
- Browsers may fall back from HTTP/3 to HTTP/2 if the server lacks support.  
- QUIC’s reliance on UDP can be blocked by strict firewalls.  
- FTP and SMTP often use separate control/data channels; TLS is optional (FTPS, SMTPS).  

**Optimize & Communicate**  
Explain that this diagram keeps the “most popular” protocols visible while grouping them by function. Mention that adding more layers (e.g., HTTP/3’s header compression) would clutter the view, so we focus on core interactions. Conclude by noting how the diagram helps engineers spot protocol mismatches and plan migrations (e.g., moving from HTTP/2 to HTTP/3).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
