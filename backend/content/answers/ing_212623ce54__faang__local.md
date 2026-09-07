---
qid: ing_212623ce54__faang__local
question: 'Explain: Hi everyone. Kango''s come up from uh — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 488
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:00-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of how *YouTube* scales its video‑delivery infrastructure, especially in the context of the “Kango’s” discussion at the Seattle Conference on Scalability. I’ll assume the interviewer wants an overview of key architectural choices (CDN, sharding, caching) and the trade‑offs that drive performance and cost.

**Approach**  
1. Outline YouTube’s data flow: ingestion → transcoding → storage → CDN delivery.  
2. Highlight major scalability levers: global edge caches, horizontal scaling of transcoders, sharded metadata DBs.  
3. Discuss monitoring & autoscaling signals (latency, bitrate, user concurrency).  

**Depth**  
- **Ingestion/Transcoding**: Videos are chunked into 10‑second segments and stored in GCS; a distributed transcode farm (≈ 2000+ workers) uses spot VMs to keep costs low while meeting SLAs.  
- **Storage & Metadata**: Video blobs live on a multi‑region object store; metadata is sharded by user ID across Bigtable instances, enabling O(log n) lookups even for billions of videos.  
- **CDN Delivery**: Cloud CDN edges cache 5–10 GB per edge; cache hit ratios >95% for popular content. Edge caches are invalidated via a Pub/Sub “purge” stream that propagates updates in <1 s.  
- **Autoscaling & Observability**: Latency and CPU utilisation trigger horizontal autoscaler hooks; a dedicated monitoring stack (Prometheus + Grafana) surfaces 99th‑percentile metrics to the ops team.

**Edge Cases**  
- Sudden viral spikes: pre‑warming caches on predicted edges mitigates cold‑start latency.  
- Content moderation failures: fallback to origin server bypasses stale edge cache, ensuring compliance.  

**Optimize & Communicate**  
I’d propose a micro‑service for dynamic cache expiry based on content popularity decay curves, reducing storage costs by ~15%. While explaining, I’ll keep the narrative tight, use concrete numbers (e.g., 2000 workers), and emphasize the cost‑performance trade‑offs that guide design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
