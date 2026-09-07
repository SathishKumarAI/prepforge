---
qid: ing_ae10ea7bc0__faang__local
question: 'Explain: How the Internet Works — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 477
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:16-05:00'
sources: []
---

**Clarify**  
We’re asked to describe, from a system‑design perspective, the sequence of events that occur when a user types `https://www.example.com` into a browser and presses *Enter*.  
Key assumptions: the client has a working network stack; DNS is not cached locally; we want a high‑level view (no packet‑by‑packet detail).

**Approach**  
1. Resolve hostname → IP via DNS lookup.  
2. Establish TCP/TLS connection to that IP on port 443.  
3. Send HTTP GET request.  
4. Receive HTTP response + content.  
5. Render the page, recursively fetching embedded resources.

**Depth**  
- **DNS resolution**: Browser checks OS cache → local resolver (often a DNS server) → iterative/recursive queries to root → TLD → authoritative servers; receives A record(s).  
- **TCP/TLS handshake**: SYN‑SYN/ACK + TLS ClientHello, ServerHello, cert exchange, key agreement → secure channel.  
- **HTTP request**: `GET / HTTP/1.1` with Host header; server replies 200 OK + body (HTML/CSS/JS).  
- **Resource fetching**: Browser parses HTML, issues parallel requests for images, scripts, stylesheets; utilizes HTTP/2 multiplexing or HTTP/3 QUIC to reduce round‑trips.  
- **Caching & CDNs**: Responses may hit edge caches, reducing latency.  

**Edge cases**  
- DNS cache miss → longer latency.  
- HTTPS certificate mismatch → browser blocks.  
- Network partition → fallback to cached content (Service Workers).  
- Server overload → 5xx responses or throttling.

**Optimize & Communicate**  
Explain how CDNs, HTTP/2 multiplexing, and TLS session resumption cut RTTs; discuss trade‑offs of aggressive caching vs. staleness. Conclude by noting that the overall latency is dominated by DNS + first TCP/TLS round‑trip, so optimizations target those steps. This structured walk‑through demonstrates clear problem framing, systematic design, and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
