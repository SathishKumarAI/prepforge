---
qid: ing_770be7c282__faang__local
question: 'Explain: Questions and Solutions — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 505
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:46-05:00'
sources: []
---

**Clarify**

We’re asked to design the end‑to‑end flow that occurs when a user types a URL into a browser’s address bar and presses *Enter*.  
Assumptions: single request for an HTTP/HTTPS resource; no proxy or VPN; DNS resolution is needed; the server responds with HTML/CSS/JS that may trigger further requests.  

**Approach**

1. Browser parses the URL → extracts scheme, host, port, path, query, fragment.  
2. Resolve host to IP via local cache → if miss, perform DNS lookup (UDP/TCP).  
3. Establish TCP connection (SYN‑ACK handshake) → optional TLS handshake for HTTPS.  
4. Send HTTP request; receive response headers + body.  
5. Render HTML → parse DOM → discover assets (CSS, JS, images); spawn parallel resource requests.  
6. Execute scripts → potentially modify DOM or trigger additional network calls.  

**Depth**

- **URL parsing**: RFC 3986 compliant tokenization.  
- **DNS**: recursive query; cache TTL handling; fallback to IPv4/IPv6.  
- **TCP/TLS**: Nagle’s algorithm, TLS 1.3 session resumption, HTTP/2 multiplexing.  
- **Rendering pipeline**: layout → paint → compositing layers.  
- **Concurrency**: limit of ~6 parallel connections per host (RFC 7230).  

Complexities:  
- DNS lookup \(O(1)\) average; TCP handshake constant time.  
- Rendering is CPU‑bound, complexity depends on DOM size.  

**Edge Cases**

- Malformed URLs → syntax error.  
- Non‑existent domain → NXDOMAIN.  
- Slow DNS or network → timeout.  
- Redirects (3xx) → follow up to a max depth.  
- Mixed content in HTTPS → blocked by browser policy.  

**Optimize & Communicate**

- Use DNS prefetching and HTTP/2 multiplexing to reduce latency.  
- Cache static assets aggressively; leverage Service Workers for offline support.  
- Explain trade‑offs: enabling early data (TLS 0‑RTT) vs security, aggressive caching vs stale content.  

This structured walkthrough demonstrates clear reasoning, depth in protocol details, and awareness of edge cases—key signals for a top‑tier interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
