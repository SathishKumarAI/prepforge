---
qid: ing_7fb099de66__faang__local
question: 'Explain: The Streaming Flow in Action — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 498
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:42:06-05:00'
sources: []
---

**Clarify**

> *Design a real‑time streaming service like Spotify that can serve millions of users, stream audio with low latency, and scale globally.*

Assumptions I’d confirm:  
• Maximum concurrent streams? (e.g., 10M)  
• Geographic distribution of users.  
• Content catalog size & freshness requirements.  
• Latency target (<200 ms).  
• Data consistency model for playlists/likes.

**Approach**

1. **Front‑end layer** – load‑balanced CDN edge nodes.  
2. **Session orchestration** – stateless API gateway → session manager (Redis) to track user, device, and token.  
3. **Streaming engine** – partitioned audio shards stored in object storage; use a distributed cache for most‑played tracks.  
4. **Content delivery** – HTTP/2 or QUIC with adaptive bitrate (ABR).  
5. **Metrics & analytics** – publish events to Kafka → stream processor (Kafka Streams/Flink) → real‑time dashboards.  
6. **Data consistency** – eventual consistency for likes/playlists; strong consistency only for user auth.

**Depth**

*Audio Storage*: Store each track in multiple resolutions on S3/MinIO, sharded by hash of track ID.  
*CDN*: Edge nodes cache chunks; if miss, pull from origin and stream to edge.  
*ABR*: Client reports bandwidth → server selects next segment’s bitrate.  
*Load Balancing*: Use consistent hashing for session affinity.  
*Scaling*: Auto‑scale streaming workers based on request queue depth.  
*Complexity*: O(1) cache hit; otherwise O(log N) to locate shard.

**Edge Cases**

• User disconnects mid‑stream → resume from last offset via checkpointing in Redis.  
• Network partition → fallback to lower bitrate or local cache.  
• Catalog updates while streaming – use versioned URLs.  

**Optimize & Communicate**

Explain trade‑offs: heavier CDN caching reduces origin load but increases storage cost; ABR saves bandwidth at the cost of buffering logic. Highlight that monitoring latency per edge node drives auto‑tuning of replication factor. Conclude with a diagram sketch and a brief performance projection to show confidence in meeting SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
