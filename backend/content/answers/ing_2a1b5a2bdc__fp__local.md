---
qid: ing_2a1b5a2bdc__fp__local
question: 'Explain: HTTPS Upgrade — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 464
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:28-05:00'
sources: []
---

When you type **`https://example.com`** the browser must turn a human‑readable address into an encrypted data stream that the server can understand.  
1. **Domain name → IP** – The URL’s host is resolved by querying DNS. If the domain has *DNS‑SEC* or *HSTS* records, those are fetched first; HSTS tells the browser to skip plain HTTP entirely for that origin.  
2. **TCP handshake** – A TCP connection is opened to the server’s IP on port 443 (default HTTPS). The three‑way handshake guarantees a reliable channel.  
3. **TLS negotiation** – Immediately after TCP, TLS starts: the client sends a *ClientHello* containing supported cipher suites and the *ALPN* protocol list (`h2`, `http/1.1`).  
   - The server picks a suite, returns a *ServerHello*, and may send *Certificate*, *KeyShare*, etc.  
   - If the server supports **0‑RTT** and the client has cached keys, data can be sent before the handshake completes, but the server must validate it later.  
4. **HTTP request** – Once the TLS session is established (or 0‑RTT data accepted), the browser writes an HTTP/1.1 or HTTP/2 frame over the encrypted channel: `GET / HTTP/1.1`. The response travels back, still wrapped in TLS, until the server closes the connection or the client times out.

**Non‑obvious insight:**  
The *ALPN* negotiation is not just a protocol selector; it embeds an optimization loop. By advertising only the protocols the browser truly supports, the server can avoid sending unnecessary HTTP/2 frames or negotiate a lower‑latency transport (QUIC) later, saving both bandwidth and handshake time—something many designers overlook when they assume “HTTPS = HTTP over TLS” in a vacuum.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
