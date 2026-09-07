---
qid: ing_494c253d93__faang__local
question: 'Explain: How streaming actually works: — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 510
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:21-05:00'
sources: []
---

**Clarify**  
The question asks how a *streaming* system (e.g., a video‑on‑demand platform) actually delivers data to end users in real time, and what architectural choices enable that. I’ll assume we’re designing for millions of concurrent viewers, low latency, and high reliability.

**Approach**  
1. **Ingest → Encode → Store**: Capture raw media, encode into multiple bitrates (HLS/DASH), store in a CDN‑backed object store.  
2. **Manifest Generation**: Create adaptive manifests pointing to segmented chunks.  
3. **Client Request Flow**: Client requests manifest → selects bitrate based on bandwidth → fetches segments over HTTP/HTTPS.  
4. **CDN Caching & Edge Delivery**: Use a global CDN with edge caches; cache segments for ~24 h, purge on update.  
5. **Metrics & Scaling**: Track segment hit rates, buffer health, and auto‑scale origin servers.

**Depth**  
- *Chunking*: 2–4 s MP4 fragments enable fast seeks.  
- *Adaptive Bitrate (ABR)*: Client monitors RTT/packet loss to switch ABRs; the server must expose multiple renditions.  
- *Caching Strategy*: Leverage edge cache‑ability tags; use signed URLs for DRM protected content.  
- *Fault Tolerance*: If a CDN node fails, TCP fallback to origin or another edge.  
- *Scalability*: Use stateless microservices; autoscale via request rate and buffer metrics.

**Edge Cases**  
- **Bandwidth spikes** → buffer underrun; solution: larger initial buffer or pre‑fetching.  
- **Cold start** (first segment miss) → higher latency; mitigate with CDN prewarm.  
- **Geo‑restriction** → authentication at edge before serving content.  

**Optimize & Communicate**  
Explain that the core trade‑off is between *latency* (small chunks, low cache TTL) and *bandwidth efficiency* (larger chunks, longer TTL). I’d narrate by walking through a viewer’s request path, highlighting where decisions are made (manifest selection, CDN caching), and how metrics drive autoscaling. This showcases structured reasoning, depth in protocol choices, and awareness of real‑world edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
