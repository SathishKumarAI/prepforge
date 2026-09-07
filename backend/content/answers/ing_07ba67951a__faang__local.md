---
qid: ing_07ba67951a__faang__local
question: 'Explain: The Architecture Twitter Uses to Deal with 150M Active Users,
  300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5 Seconds - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 537
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:02:07-05:00'
sources: []
---

**Clarify**

We need to explain how Twitter’s architecture scales for ~150 M active users, ~300 K queries per second (QPS), a 22 MB/s firehose, and guarantees tweet delivery in <5 s.  
Assumptions: *“Send Tweets”* means posting + broadcasting; latency measured from client to visible on timeline; we focus on backend systems, not front‑end UI.

**Approach**

1. Partition the data (sharding) by user ID or hash.  
2. Use a write‑through cache → message queue → storage pipeline.  
3. Replicate & stream changes to followers’ timelines via fan‑out (pull vs push).  
4. Employ distributed queues, load balancers, and CDN edge nodes for delivery.

**Depth**

- **Write path**: Client → API gateway → *Tweet Service* writes to an in‑memory cache (Redis) then pushes a “tweet” event onto a high‑throughput message queue (Kafka/Heron).  
- **Storage**: The queue feeds into a sharded NoSQL store (Cassandra) where each tweet is stored once.  
- **Fan‑out**: Two strategies coexist:
  * *Pull* – followers request their home timeline; the service queries a pre‑computed “timeline” table.
  * *Push* – for high‑followers accounts, a background worker consumes the queue and appends the tweet to each follower’s timeline shard.  
- **Delivery**: Edge servers (CDN) cache hot timelines; latency <5 s achieved by keeping the most recent 10k tweets in Redis per user shard and using asynchronous replication.

Complexity: Write O(1), read O(log n) for timeline lookup; queue throughput >22 MB/s with horizontal scaling. Trade‑off: push increases write load but reduces read latency.

**Edge Cases**

- Sudden follower spike → overload push workers → fall back to pull.  
- Network partitions → eventual consistency of timelines.  
- Very large tweets (media) increase firehose size; handled by separate media service and async thumbnail generation.

**Optimize & Communicate**

Future improvements: adopt *stream‑to‑table* frameworks (Kafka Streams) for real‑time aggregation, use *vector search* for personalized timelines, and implement *rate limiting* per user to cap QPS. I’d explain each layer’s role, the rationale behind pull vs push, and how horizontal scaling keeps latency bounded while handling massive throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
