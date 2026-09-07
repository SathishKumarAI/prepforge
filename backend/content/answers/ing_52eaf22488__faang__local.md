---
qid: ing_52eaf22488__faang__local
question: 'Explain: Under the hood: Broadcasting live video to millions - Engineering
  at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 506
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:00-05:00'
sources: []
---

**Clarify**  
We’re asked how Meta delivers a single live‑video stream to ~10⁸ viewers in real time with low latency and high reliability. Key assumptions: (1) Video originates from mobile devices; (2) Viewers span the globe, including bandwidth‑constrained users; (3) System must tolerate node failures and spikes in traffic.

**Approach**  
1. Ingest → encode → chunk into HLS/DASH segments.  
2. Store segments on a globally distributed CDN (edge caches).  
3. Use adaptive bitrate (ABR) to serve best quality per client.  
4. Leverage peer‑to‑peer (WebRTC) for low‑latency bursts, fallback to CDN otherwise.  
5. Monitor and auto‑scale encoders & edge nodes.

**Depth**  
- **Ingestion**: Real‑time RTMP/HLS ingestion on load‑balanced ingress servers; shards by user ID.  
- **Encoding**: GPU‑accelerated multi‑bitrate pipelines; each stream produces 4–5 ABR tracks.  
- **CDN**: Geo‑distributed edge nodes with HTTP/2 and QUIC; cache segments for ~30 s, purge on new segment.  
- **Delivery**: Clients fetch via CDN using HLS/DASH; if latency <200 ms, switch to WebRTC mesh for 1–3 viewers.  
- **Scaling**: Auto‑scaling groups for encoders and edge caches; spot instances for cost savings.  
- **Reliability**: Replicated metadata (Kafka + DynamoDB), health checks, graceful failover to alternate CDN.

**Edge Cases**  
- Sudden viewership spikes → auto‑scale triggers may lag; pre‑warm edge nodes mitigates.  
- Network partitions → fallback to lower ABR tracks; clients reconnect automatically.  
- Device churn → session affinity ensures minimal rebuffering.

**Optimize & Communicate**  
We can reduce CDN load by pruning stale segments early and using HTTP/3 for multiplexed streams, cutting latency by ~10 ms. Explain trade‑offs: higher encoding cost vs lower buffering. Finally, summarize that Meta’s architecture combines real‑time ingestion, multi‑bitrate encoding, global edge caching, and opportunistic P2P to achieve scalable, low‑latency live video delivery for millions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
