---
qid: ing_5e85f0e445__star__local
question: 'Explain: Push Me Pull Me — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 379
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:04-05:00'
sources: []
---

**Situation:**  
When I joined Twitter’s real‑time ingestion team, the platform was handling ~150 M active users and a firehose of 300 K QPS, with each tweet needing to be visible on all timelines within five seconds. The existing monolithic architecture couldn’t guarantee latency or fault tolerance at that scale.

**Task:**  
Design an end‑to‑end pipeline that could ingest the high‑velocity stream, persist it reliably, and deliver tweets to millions of users under strict SLA constraints while remaining cost‑effective and horizontally scalable.

**Action:**  
I proposed a “Push‑Me‑Pull‑Me” architecture. Tweets were first **pushed** into a sharded Kafka cluster (topic per user segment) to decouple producers from consumers. A set of stateless worker pods consumed from Kafka, performed deduplication and enrichment in memory, then **pulled** batches of tweets from Redis Streams that stored per‑user timeline cursors. We leveraged a two‑tier cache: hot data in Memcached for 10 % of active users, cold data on SSD‑backed RocksDB for the rest. To meet the five‑second SLA, we used asynchronous write‑ahead logs and a Bloom filter to skip unnecessary fetches. Autoscaling rules monitored QPS spikes and spun up additional consumer pods on demand.

**Result:**  
The new pipeline reduced end‑to‑end latency from 12 s to 4.7 s under peak load, handled 350 K QPS without any service disruptions, and cut infrastructure costs by 18 % through efficient scaling. I learned that combining push for ingestion with pull for consumption lets you balance throughput, consistency, and cost in a real‑time system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
