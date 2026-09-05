---
qid: ing_07ba67951a__star__local
question: 'Explain: The Architecture Twitter Uses to Deal with 150M Active Users,
  300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5 Seconds - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 384
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:16-05:00'
sources: []
---

**Situation**  
When I joined the Twitter backend team, we were struggling to keep up with a growing user base of 150 million active accounts and an incoming firehose that pushed 22 MB/s of tweet data while serving 300K queries per second. The SLA demanded that any new tweet appear in a user’s timeline within five seconds.

**Task**  
I was tasked with redesigning the ingestion‑to‑delivery pipeline so it could scale horizontally, reduce latency, and maintain consistency across global replicas without breaking existing services.

**Action**  
I led a micro‑service refactor that split the monolithic “timeline” service into three stateless shards: 1) **Ingestion Service** using Kafka for durable queuing, 2) **Processing Service** built on Spark Streaming to enrich tweets and update user graph edges in real time, and 3) **Delivery Service** that writes to a distributed KV store (Cassandra) with per‑user partitions. We added a lightweight “push” mechanism: when a tweet arrives, its author’s followers are streamed to the Delivery Service via a Pub/Sub system (Apache Pulsar), bypassing batch pulls. To guarantee <5 s latency, we introduced an in‑memory cache layer (Redis Cluster) for hot user timelines and used read replicas with cross‑data‑center replication lag <200 ms.

**Result**  
The new architecture cut average timeline delivery time from 12 seconds to 3.2 seconds, handled a 4× spike in QPS during peak events, and supported a projected 250 million active users by next year. I learned that decoupling ingestion, processing, and delivery while leveraging both stream‑processing and caching can deliver the scalability and low latency required for real‑time social platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
