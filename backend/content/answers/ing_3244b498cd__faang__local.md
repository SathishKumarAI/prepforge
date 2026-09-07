---
qid: ing_3244b498cd__faang__local
question: 'Explain: Terminology — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 478
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:41:23-05:00'
sources: []
---

**Clarify**  
You want an end‑to‑end description of the system that resolves a typed URL into the content you see in your browser.  
Assumptions: *single request, public web, IPv4*, no CDN tricks, and we’re interested in the logical layers (DNS → transport → application).

---

### Approach
1. **Browser parses URL** → extracts scheme (`http`/`https`), host, port, path.
2. **Resolve hostname to IP**  
   * Check OS cache → if miss, send DNS query to recursive resolver → authoritative server → return A record.  
3. **Establish TCP connection** (or TLS handshake for HTTPS) using the resolved IP and port.  
4. **Send HTTP request** (`GET /path HTTP/1.1` + headers).  
5. **Server receives, processes**: route to application logic, access DB/files → produce response.  
6. **Return HTTP response** (status line, headers, body) over the same connection.  
7. **Browser renders**: parse HTML/CSS/JS, fire off additional sub‑requests for resources.

---

### Depth
- DNS uses UDP; if truncated or no reply, falls back to TCP.
- TLS requires a handshake with cipher negotiation and certificate validation (OCSP/CRLS).
- HTTP/2 multiplexes streams over one connection; HTTP/3 uses QUIC over UDP.
- Server can use caching headers (`ETag`, `Cache-Control`) to reduce load.

**Complexity**:  
DNS lookup ~ O(1) per hop; TCP handshake ~ O(1); request round‑trip latency dominates (~100 ms).  

---

### Edge Cases
- **CNAME chains**, IPv6, DNSSEC validation failures.  
- **Connection pooling**, keep‑alive timeouts.  
- **Redirects** (3xx), content negotiation, cookie handling.

---

### Optimize & Communicate
Explain how CDN edge caching reduces step 5 latency, and how HTTP/2 stream prioritization improves perceived performance. Conclude by noting that the system is a layered stack where each layer can be independently optimized or replaced without breaking the overall contract.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
