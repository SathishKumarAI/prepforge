---
qid: ing_e83222348a__star__local
question: 'Explain: MetaData Sharding - Based on VideoID — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 393
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:45-05:00'
sources: []
---

**Situation** – At my previous role at a cloud‑video startup, we were hitting a 30 % slowdown in metadata lookups for popular videos during peak hours. The catalog was stored as a single table in Cassandra; every request hit the same nodes and caused hot spots.

**Task** – I had to redesign the sharding scheme so that metadata queries would be evenly distributed while keeping latency under 10 ms, even when serving millions of concurrent streams.

**Action** – I proposed sharding by *VideoID* using a hash‑based partition key. First, I analysed video ID format (UUID v4) and confirmed it had high cardinality and uniform distribution. Then I implemented a consistent‑hash ring with virtual nodes in Cassandra’s keyspace, mapping each VideoID to one of 128 shards. To avoid cross‑node joins, I denormalised the *Channel* and *Category* fields into the same shard using materialized views indexed by `video_id`. For read amplification, I added a caching layer (Redis) that stored hot metadata per shard, invalidated on writes via a Kafka stream. Finally, I ran load tests simulating 1 M concurrent lookups and tuned replication factor to 3 for fault tolerance.

**Result** – After deployment, lookup latency dropped from 45 ms average to 7 ms, and CPU usage on hot nodes fell by 70 %. The system now scales linearly with traffic. I learned that careful key design—coupled with caching and consistent hashing—turns a monolithic bottleneck into a distributed advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
