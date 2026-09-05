---
qid: ing_9c573fcb21__star__local
question: 'Explain: 5.3 Create a New Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 340
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:38-05:00'
sources: []
---

**Situation:**  
At my last internship I was asked to prototype a feature for an internal analytics tool that would let us simulate how adding a new post on Instagram affects user engagement metrics over time. The platform had millions of daily active users and needed to handle high write throughput while maintaining low latency.

**Task:**  
I had to design the “Create a New Post” flow: accept media, metadata, and tags; store them reliably; propagate the post through recommendation pipelines; and update real‑time engagement counters without overloading downstream services.

**Action:**  
I broke the system into three layers: (1) an API gateway that validates requests and forwards to a Kafka topic for asynchronous processing; (2) a microservice cluster that ingests media, stores it in a sharded S3 bucket, writes a metadata record to Cassandra, and publishes a “post_created” event; (3) a real‑time counter service using Redis Streams to increment view and like counters per user. To keep latency < 200 ms I used circuit breakers for the image transcoder and implemented optimistic locking on the counters. We also added a Bloom filter cache to avoid duplicate post IDs.

**Result:**  
The prototype handled 10k new posts per second with an average end‑to‑end latency of 180 ms, and we reduced API error rates from 4% to <0.5%. I learned how sharding, event sourcing, and caching can be combined to meet strict SLAs in a high‑traffic social network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
