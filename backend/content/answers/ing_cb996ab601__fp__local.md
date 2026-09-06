---
qid: ing_cb996ab601__fp__local
question: 'Explain: High Level for Search — The Architecture Twitter Uses to Deal
  with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 543
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:05-05:00'
sources: []
---

**Why the problem is hard**

A real‑time social network must satisfy two conflicting constraints:

1. **Throughput & latency** – 300 k queries per second (QPS) and a 22 MB/s firehose mean every write has to be acknowledged in < 5 s while still serving millions of reads.
2. **Scale & consistency** – 150 M active users produce billions of tweets; the system must partition data so that no single node becomes a bottleneck.

The only way to meet both is to *shard* the data, *replicate* it for fault tolerance, and *pipeline* writes so they never block reads.

---

### High‑level design

| Layer | Function | Key technique |
|-------|----------|---------------|
| **Ingress** | Accept tweets from clients | TLS termination + HTTP/2 load balancer → partitioned write queue |
| **Write pipeline** | Persist tweet & metadata | 1) Append‑only log (Kafka‑style) per user partition; 2) Replicate to N replicas via Raft for durability. |
| **Index service** | Build per‑user timeline | Background workers stream logs into a columnar store (Cassandra/Scylla) with *write‑ahead* indexing. |
| **Read API** | Serve timelines & search | Cache hot user feeds in Redis; fall back to Cassandra if miss. |
| **Search engine** | Full‑text lookup | Elastic‑search cluster indexed on the same shards, updated asynchronously via CDC from write log. |

---

### Non‑obvious insight

The system *does not* keep a single “master timeline” per user. Instead it builds timelines **on demand** by merging pre‑indexed partitions (the user’s own tweets + followees’ feeds). This lazy merge amortizes the cost of ordering and deduplication across millions of users, allowing each read to be served from a *small* set of shards while still guaranteeing sub‑5 s latency.

---

**Bottom line:** By combining sharded append‑only logs, event‑driven indexing, and cache‑first reads, Twitter turns the 22 MB/s firehose into a low‑latency, highly scalable service that can grow with every new user.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
