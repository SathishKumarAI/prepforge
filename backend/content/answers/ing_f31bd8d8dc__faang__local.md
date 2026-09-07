---
qid: ing_f31bd8d8dc__faang__local
question: 'Explain: So another thing is we also selectively — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 491
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:04:52-05:00'
sources: []
---

**Clarify**  
You’re asking how a platform like YouTube scales to support millions of concurrent users, billions of videos, and real‑time streaming. I’ll assume we need to cover data ingestion, storage, CDN delivery, and the ML components that personalize content at scale.

**Approach**  
1. **Data pipeline** – ingest video uploads → transcode into multiple bitrates.  
2. **Storage & catalog** – distributed object store + metadata graph.  
3. **Content delivery** – edge‑cached CDNs with smart routing.  
4. **ML services** – recommendation, A/B testing, anomaly detection, all horizontally scalable.

**Depth**  
- *Ingestion*: Use a partitioned Kafka cluster; each topic per region feeds transcoding workers (e.g., FFMPEG in containers).  
- *Storage*: S3‑compatible storage with erasure coding for durability; metadata lives in a graph DB (JanusGraph) to support “related videos” queries.  
- *CDN*: Anycast IPs, edge nodes store popular chunks; origin fetches are throttled by adaptive bitrate selection.  
- *ML*: Models run on TensorFlow Serving behind gRPC; inference shards per user segment. Batch training nightly on GPU clusters; online A/B tests use feature flagging and real‑time analytics pipelines (Spark Structured Streaming). Complexity: ingestion O(log N) per message, CDN cache hit ratio >95%, ML latency <50 ms.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale transcoding pods via Kubernetes HPA.  
- Data center outages → multi‑region replication; failover to nearest CDN.  
- Cold start for new users → fallback recommendation using popularity metrics.

**Optimize & Communicate**  
We can reduce cost by caching transcodes in a tiered storage (S3 Standard‑IA, Glacier). For latency, pre‑warm edge caches based on trending videos. I’d explain these trade‑offs to stakeholders: higher cache hit → lower origin load but higher storage cost; tighter ML latency → more GPU resources. This structured narrative shows problem framing, design choices, and measurable impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
