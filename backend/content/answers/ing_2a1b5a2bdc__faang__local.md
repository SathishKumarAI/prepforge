---
qid: ing_2a1b5a2bdc__faang__local
question: 'Explain: HTTPS Upgrade — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 514
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:05-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *system‑level* flow that occurs when a user types `https://example.com` into a browser and presses enter.  
Assumptions:  
- The domain has an A record and a valid TLS certificate.  
- The client supports HTTP/2 or newer.  
- No proxy or VPN is involved.

**Approach**  
1. DNS resolution → IP address.  
2. TCP three‑way handshake to the server’s port 443.  
3. TLS handshake (ClientHello, ServerHello, certificate exchange, key‑exchange).  
4. HTTP request over the encrypted channel.  
5. Server processes and responds with headers + body.  
6. Browser renders or initiates further requests.

**Depth**  
- **DNS**: UDP query to recursive resolver; may fallback to TCP if large response.  
- **TCP**: SYN → SYN‑ACK → ACK, with congestion control (e.g., CUBIC).  
- **TLS 1.3**: Handshake is 0‑RTT or 1‑RTT; server sends *Encrypted Extensions*, certificate chain, and `Finished`. The session key derives via HKDF.  
- **HTTP/2**: After handshake, the client opens a single connection with multiplexed streams. Each request is sent as a header block (HPACK/QUIC) followed by optional body. The response can be pipelined; server pushes resources if needed.  
- **Security**: Server verifies hostname against cert CN/SAN; certificate pinning and revocation checks (CRL/OCSP).  

**Edge Cases**  
- Missing or expired cert → browser shows warning, may abort TLS.  
- DNS cache poisoning → wrong IP leads to MITM.  
- Large header blocks can trigger “HTTP Request Header Fields Too Large” errors.  
- HTTP/2 stream limits if too many concurrent streams.

**Optimize & Communicate**  
To reduce latency: use DNS prefetching, keep‑alive TCP/TLS connections, enable ALPN for HTTP/3 (QUIC) which eliminates the handshake round‑trip and improves packet loss resilience. I’d explain how each layer’s performance trade‑offs (e.g., TLS 1.3 vs 1.2, HTTP/2 multiplexing vs HTTP/1.1 pipelining) impact overall user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
