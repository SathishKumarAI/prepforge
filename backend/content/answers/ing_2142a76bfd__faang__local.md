---
qid: ing_2142a76bfd__faang__local
question: 'Explain: Streaming Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 533
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:09-05:00'
sources: []
---

**1️⃣ Clarify**  
Design a system that streams music to millions of users worldwide (Spotify‑style).  
Assumptions: • Users request tracks by ID; each track is ~10 MB. • Traffic peaks at ~2 M concurrent listeners. • Latency < 200 ms, 99th‑percentile throughput > 100 Mbps per user. • We have a CDN and global data centers.

**2️⃣ Approach**  
1. **Ingestion & Storage** – ingest raw audio → transcoded into multiple bitrates (64k–320k). Store on object storage with strong consistency.  
2. **Metadata Service** – lightweight API to resolve track IDs → location, bitrate options.  
3. **CDN Layer** – edge cache pulls from origin; use HTTP/2 & adaptive streaming (HLS/DASH).  
4. **Load Balancer + Autoscaling** – route to nearest region, autoscale stream processors.  
5. **Playback Queue Service** – manages user queues, prefetching, and buffering logic.

**3️⃣ Depth**  
*Storage*: Use a CDN‑backed object store (S3/Blob) with versioning; each bitrate is a separate key.  
*Delivery*: HLS segments (~4 s) cached at edge nodes; adaptive bitrate switching on client side.  
*Scalability*: Horizontal scaling of load balancers, use Kubernetes or serverless functions for stateless request handling.  
*Consistency*: Metadata changes propagate via event bus (Kafka); eventual consistency acceptable for new tracks.  
*Complexity*: O(1) lookup for metadata; streaming cost ≈ bandwidth × bitrate.

**4️⃣ Edge Cases**  
- **Cache miss** → fall back to origin, add latency spike. Test with cold cache scenarios.  
- **User offline** → buffer until reconnect; test reconnection logic.  
- **Malformed request** → validate ID format; return 404.  

**5️⃣ Optimize & Communicate**  
Reduce bandwidth by:  
- *Delta updates* for track edits (patching).  
- *Edge compression* (gzip/ Brotli) for control traffic.  
Narrate trade‑offs: CDN reduces origin load but adds cache consistency delay; higher bitrates improve UX but increase cost. Conclude with monitoring: latency dashboards, error rates, cache hit ratios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
