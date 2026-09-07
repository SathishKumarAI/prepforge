---
qid: ing_ed5da0126c__faang__local
question: 'Explain: Timeouts — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 570
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:52:25-05:00'
sources: []
---

**Clarify**  
The interviewer wants an overview of how HTTP/HTTPS requests can “timeout” in a distributed web stack: client‑side (browser or SDK), network layer, load balancer, application server, and backend services. We’ll assume the goal is to keep latency predictable, avoid cascading failures, and surface useful metrics.

**Approach**  
1. Define timeout categories: *client‑connect*, *TCP handshake*, *TLS negotiation*, *request* (read/write), *response* (write/read).  
2. Map each to a component that can enforce it (browser JS `AbortController`, Nginx/HAProxy `proxy_read_timeout`, application code, service mesh).  
3. Show the flow of a request, where timeouts are set, and how they propagate back to the caller.

**Depth**  
- **Client**: `fetch` with `AbortSignal.timeout(ms)` or `axios` timeout prop; defaults 30 s for browsers, 60 s for Node.  
- **Load Balancer**: `proxy_connect_timeout`, `proxy_read_timeout`; usually 10–30 s to catch slow upstreams.  
- **App Server**: frameworks (Express/ASP.NET) expose request timeouts; set to ~2× expected service latency.  
- **Service Mesh**: Istio `requestTimeout` or Envoy’s `idle_timeout`; allows per‑route tuning.  
- **Backend**: database drivers often have query timeouts; microservices should return 504 if downstream exceeds their own timeout.  

Complexity is O(1) for each component, but overall latency = sum of all timeouts + actual processing.

**Edge Cases**  
- Long‑running uploads/downloads (e.g., video transcoding) need *chunked* or *multipart* streams with per‑segment timeouts.  
- Bursty traffic can trigger *spike‑based* adaptive timeouts; a naive static timeout may cause premature 504s.  
- TLS renegotiation can stall; set `max_ssl_session_reuse` to avoid it.

**Optimize & Communicate**  
Use exponential backoff for retries, but cap total retry window below the shortest downstream timeout. Expose aggregated metrics (`request_latency`, `timeout_rate`) via Prometheus and alert on sudden spikes. In an interview, I’d illustrate this with a diagram, walk through a failure scenario, and emphasize that timeouts are not “fail‑fast” but graceful degradation to maintain system health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
