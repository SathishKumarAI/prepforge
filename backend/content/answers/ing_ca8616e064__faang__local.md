---
qid: ing_ca8616e064__faang__local
question: 'Explain: Components for Streaming — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 562
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:41-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *streaming* service like Spotify: users request songs, the system streams audio on‑demand while scaling globally and keeping latency low. Key assumptions:  
• High read‑intensity (many concurrent streams).  
• Content is immutable; writes are rare (new releases).  
• Users pay per stream or have a subscription model.  
• We need to support 10⁶+ daily users with sub‑200 ms latency.

**Approach**  
1. **Client → CDN edge**: cache popular tracks in regional edge caches.  
2. **CDN → Origin**: origin holds full catalog; serves cold requests and updates edge caches.  
3. **Metadata service**: a distributed key–value store (e.g., Cassandra/Redis) mapping track IDs to file locations, bitrate, DRM keys.  
4. **Player API**: stateless REST/gRPC endpoints for playlist resolution, authentication, analytics.  
5. **Analytics & recommendation**: stream events to Kafka → real‑time processing and batch ML jobs.

**Depth**  
- *CDN layer*: use HTTP/2 with content‑range support; cache‑control headers per popularity tier.  
- *Storage*: object store (S3/GCS) for raw audio, encoded segments stored in a CDN‑optimized format (e.g., HLS/DASH).  
- *Scalability*: horizontally scale API layer via Kubernetes; use load balancers with latency‑aware routing.  
- *Consistency*: eventual consistency is acceptable for metadata; strong consistency for DRM keys via distributed lock service.  
- *Complexity*: read‑heavy reads → O(1) cache hit, fallback to origin O(log N). Writes (new releases) propagate asynchronously.

**Edge Cases**  
- **Cache stampede**: guard with singleflight or token bucket per key.  
- **Network partitions**: fall back to local CDN copies; maintain user session state in cookies.  
- **Zero‑downtime upgrades**: blue/green deployments for API services.

**Optimize & Communicate**  
Future improvements:  
• Adaptive bitrate based on real‑time bandwidth monitoring.  
• Edge‑computing ML for instant recommendation personalization.  
When presenting, emphasize the layered design (CDN → metadata → storage), the trade‑off between latency and consistency, and how each component scales to meet SLA targets. This narrative shows clear problem framing, systematic planning, technical depth, and awareness of edge scenarios—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
