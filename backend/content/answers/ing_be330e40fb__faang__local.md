---
qid: ing_be330e40fb__faang__local
question: 'Explain: TCP three-way handshake — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 467
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:52-05:00'
sources: []
---

**Clarify**  
The question asks for the sequence of events that occur when a browser resolves a URL and establishes an HTTP connection over TCP, including the three‑way handshake. We’ll assume IPv4/IPv6, standard ports (80/443), no proxies or VPNs.

**Approach**  
1. DNS lookup → IP address.  
2. Browser opens a socket → initiates TCP three‑way handshake.  
3. Handshake exchanges SYN/SYN‑ACK/ACK; connection ready.  
4. HTTP request sent, response received, socket closed (or kept alive).

**Depth**  
- **DNS**: Browser queries local resolver → recursive DNS servers → authoritative server → IP returned.  
- **TCP Handshake**:
  - *Client* sends `SYN` with initial sequence number (ISN).  
  - *Server* replies `SYN‑ACK`, acknowledges ISN+1, supplies its own ISN.  
  - *Client* responds `ACK` acknowledging server’s ISN+1.  
  Connection established; both sides know the other’s current sequence number and can start data transfer.  
- **HTTP**: Browser sends a GET/POST request over the socket (port 80 for HTTP, 443 for HTTPS). For HTTPS, TLS handshake occurs after TCP is ready. Server replies with status line + headers + body. Browser may keep the connection alive (`Connection: keep-alive`) to reuse for subsequent requests.

**Edge Cases**  
- DNS cache miss → longer latency.  
- Connection timeout if any SYN packet lost (TCP retransmits).  
- Firewall or NAT may block ports, causing handshake failure.  
- HTTP/2 multiplexing changes how streams are scheduled over a single TCP connection.

**Optimize & Communicate**  
Explain that browsers use connection pooling and DNS prefetch to reduce latency. Mention that in practice, the three‑way handshake is hidden behind OS networking stacks, but understanding it helps diagnose “connection refused” or “timeout” errors. This structured explanation shows clear reasoning, depth of knowledge, and awareness of real‑world complications—qualities valued by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
