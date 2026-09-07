---
qid: ing_8329f34bf0__faang__local
question: 'Explain: Streaming — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 512
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:49:53-05:00'
sources: []
---

**Clarify**

> *What does “streaming via HTTP/HTTPS” mean in a system‑design context?*  
We’re asked to design a service that delivers continuous media (audio/video) over the web, handling millions of concurrent users, low latency, and graceful degradation.  
Assumptions:  
- Clients are browsers or mobile apps.  
- Content is pre‑encoded but may need adaptive bitrate.  
- We must support on‑demand and live streams.  

**Approach**

1. **Front‑end layer** – CDN edge nodes with HTTP/2 + TLS termination.  
2. **Content storage** – Object store (S3) + segment cache in Redis or local disk for hot segments.  
3. **Adaptive streaming** – HLS/DASH manifests, multiple bitrate encodings.  
4. **Back‑end services** –  
   - *Manifest generator* (stateless, caches manifests).  
   - *Segment fetcher* (parallel reads from storage, stream to CDN).  
5. **Metrics & throttling** – Token bucket per user, rate limits on segment requests.  

**Depth**

- **HTTP/2** allows multiplexed streams; each media segment is a separate request, reducing head‑of‑line blocking.  
- Use *Range* headers for partial content to support seeking.  
- For live streaming, implement a “rolling buffer” in CDN and publish new segments via WebSocket or Pub/Sub to notify clients.  
- **Security**: Signed URLs with short TTLs + HTTPS/TLS.  
- **Scalability**: Auto‑scale backend containers; use serverless for manifest generation.  

**Edge Cases**

- Sudden traffic spike → CDN cache miss, backend overload → rate‑limit and back‑pressure.  
- Client network drop → resume via Range requests.  
- TLS handshake failure → fallback to HTTP/1.1 with warning.  

**Optimize & Communicate**

- Pre‑warm hot segments in CDN; use edge computing for transcoding on demand.  
- Monitor latency per segment, auto‑switch bitrate earlier if RTT > threshold.  
- Explain trade‑offs: HTTP/2 multiplexing vs. HTTP/3 QUIC (lower latency but less mature CDNs).  

This design balances performance, scalability, and security while keeping the system modular for future feature extensions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
