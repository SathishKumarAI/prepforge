---
qid: ing_ae10ea7bc0__star__local
question: 'Explain: How the Internet Works — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 457
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:19-05:00'
sources: []
---

**Situation**  
During a senior engineering interview I was asked to explain what happens from the moment a user types “https://www.example.com” into Chrome. The interviewer wanted to see if I could walk through DNS resolution, TCP handshake, TLS negotiation, HTTP request/response, and load balancing in a realistic scenario.

**Task**  
I needed to describe each layer clearly, illustrate the role of routers, firewalls, CDN edge nodes, and the server’s application stack, and quantify performance impacts (latency, packet loss) while keeping the explanation under two minutes.

**Action**  
1. **DNS Lookup:** I explained that the browser first queries a local DNS cache; if miss, it contacts recursive resolvers which traverse root → TLD → authoritative servers to fetch the A record for “example.com.”  
2. **TCP Handshake & TLS:** Next, Chrome opens a TCP connection via a three‑way handshake to the resolved IP, then performs a TLS 1.3 handshake (0‑RTT if possible) to establish an encrypted channel. I highlighted how SNI routes traffic to the correct virtual host on shared servers.  
3. **HTTP Request/Response:** The browser sends an HTTP/2 GET request with headers; the CDN edge node checks cache, serves static assets, or forwards to origin over a private network. I noted header compression (HPACK) and multiplexed streams reducing round‑trips.  
4. **Load Balancing & Failover:** At the origin, a Layer 4 load balancer distributes traffic across stateless app servers; health checks ensure graceful failover. I mentioned that this architecture keeps per‑request latency < 120 ms under peak load.

**Result**  
The interviewer appreciated the end‑to‑end flow, the inclusion of real protocols and performance metrics, and my ability to tie technical details back to user experience. I left with a clear understanding of how each layer contributes to a fast, secure web visit—and reinforced that explaining complex systems concisely is as important as building them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
