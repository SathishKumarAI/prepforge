---
qid: ing_5da6428759__star__local
question: 'Explain: High Level for Pull Based Timelines — The Architecture Twitter
  Uses to Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets
  in Under 5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 457
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:28-05:00'
sources: []
---

**Situation**  
When I joined the infrastructure team at a social‑media startup, we had to redesign our tweet delivery pipeline to support 150 M active users and sustain 300 K queries per second while ingesting a 22 MB/s firehose. The existing push‑based system was choking on peak traffic, causing tweets to appear after five seconds or more.

**Task**  
I was tasked with architecting a pull‑based timeline service that could deliver real‑time tweets in under five seconds at scale, without overloading any single node and while keeping latency low for mobile clients.

**Action**  
1. **Sharded Timeline Stores** – I introduced per‑user sharding across a distributed key‑value store (Cassandra). Each shard held the most recent 2 k tweets, keyed by user ID and timestamp.  
2. **Fan‑out on Read** – Instead of pushing updates to every follower immediately, followers pull their timelines via an API that reads from the shards in parallel using asynchronous I/O.  
3. **Batching & Prefetching** – Clients request 50‑tweet batches; the server prefetches the next batch while the user scrolls, leveraging HTTP/2 multiplexing and caching on CDN edge nodes.  
4. **Backpressure & Rate Limiting** – A token‑bucket algorithm throttles per‑user requests to 20 req/s, preventing spikes from a single device from saturating the cluster.  
5. **Monitoring & Auto‑Scaling** – Prometheus metrics (latency percentiles, read/write ops) feed into an autoscaler that spins up new worker pods when p95 latency exceeds 1.2 s.

**Result**  
The pull‑based design reduced average tweet delivery time from 4.8 s to 1.3 s during peak hours, with a 99th percentile under 2 s. The system handled sustained 350 K QPS with <0.5 % error rate. I learned that moving heavy fan‑out work to read paths and using sharded, pre‑prefetched stores can dramatically improve scalability without sacrificing real‑time experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
