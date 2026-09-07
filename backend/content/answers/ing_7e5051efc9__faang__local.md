---
qid: ing_7e5051efc9__faang__local
question: What happens when you type amazon com or www google com in the browser?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:38:51-05:00'
sources: []
---

**Clarify**  
You’re asking about what occurs behind the scenes when a user types a human‑readable URL (e.g., `amazon.com` or `www.google.com`) into a browser and presses *Enter*.  
Assumptions: *No VPN/Proxy*, *DNS caching enabled*, *HTTP(S) only*.

**Approach**  

1. Browser parses the string → host, protocol, path.  
2. Resolve hostname to IP via DNS lookup (recursive query).  
3. Establish TCP/TLS connection to that IP on port 80/443.  
4. Send HTTP(S) request (`GET /`).  
5. Server replies with status, headers, body.  
6. Browser renders the response.

**Depth**  

- **DNS**: The browser first checks OS cache → local resolver → root → TLD → authoritative nameserver; returns A/AAAA record(s).  
- **TCP/TLS handshake**: 3‑way handshake + TLS negotiation (cipher suite, certificates).  
- **HTTP**: Persistent connections, HTTP/2 multiplexing, header compression.  
- **Load balancing & CDN**: For large sites, DNS may return multiple IPs; the client picks one via round‑robin or latency‑based selection. The server often sits behind a CDN (e.g., Amazon CloudFront) that serves cached content from edge nodes.  

**Edge Cases**  

- No A record → “DNS resolution failed.”  
- Certificate mismatch → browser blocks page.  
- Network outage → connection timeout.  
- Mixed content on HTTPS pages → blocked by modern browsers.

**Optimize & Communicate**  

Explain how CDNs reduce latency, how HTTP/2 improves throughput, and why DNS caching speeds up repeat visits. Summarize the end‑to‑end flow concisely while highlighting key trade‑offs (e.g., security vs performance). This shows structured reasoning, depth, and communication—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
