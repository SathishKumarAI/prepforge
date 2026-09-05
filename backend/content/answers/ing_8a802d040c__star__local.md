---
qid: ing_8a802d040c__star__local
question: 'Explain: Write Globally and Read Locally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 374
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:26-05:00'
sources: []
---

**Situation:**  
At my last company we launched a video‑streaming platform that needed real‑time comments for millions of concurrent viewers. The existing monolithic backend couldn’t keep up; latency spiked to 2 s during peak hours and the comment feed lagged behind the stream.

**Task:**  
I was tasked with redesigning the comment subsystem so writes could be handled globally (any edge server) while reads stayed local (cached per viewer region), ensuring sub‑200 ms latency, eventual consistency, and horizontal scalability.

**Action:**  
I introduced a write‑through architecture: every client POST hit an edge API that immediately acknowledged receipt and forwarded the payload to a Kafka topic. A global “write” microservice consumed this stream, persisted comments in a sharded Cassandra cluster (time‑series key = video_id+timestamp), and pushed updates to region‑specific Redis caches via a pub/sub channel. For reads, each viewer’s client pulled from its nearest cache; if stale or missing, it fell back to the global service with an exponential backoff. I also implemented a TTL of 24 h on cache entries and used Bloom filters to reduce read traffic for unpopular videos.

**Result:**  
The system supported 5 M concurrent viewers with average write latency <30 ms and read latency <150 ms. Comment throughput increased from 10 k/s to 80 k/s, and the engineering team could roll out new features without downtime. I learned that coupling a durable log (Kafka) with region‑aware caching can balance global consistency with local speed in high‑traffic live services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
