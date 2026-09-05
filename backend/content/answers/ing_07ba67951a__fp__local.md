---
qid: ing_07ba67951a__fp__local
question: 'Explain: The Architecture Twitter Uses to Deal with 150M Active Users,
  300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5 Seconds - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 564
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:59-05:00'
sources: []
---

**Why the problem forces a distributed, stream‑oriented design**

A single machine cannot ingest *300 k queries per second* (QPS) while pushing *22 MB/s* of user data downstream and still answer a tweet request in <5 s.  
The constraints are threefold:

1. **Throughput** – 22 MB/s ≈ 200 million tweets/day → linear scaling with users.  
2. **Latency** – the end‑to‑end response must stay below 5 s, so every hop must be <1 s.  
3. **Consistency** – a user’s timeline must reflect the latest tweet order, not arbitrary shards.

From these constraints we derive the *canonical* Twitter architecture:

| Layer | Function | Why it works |
|-------|----------|--------------|
| **Front‑end HTTP/REST API** | Accepts tweets, queries timelines. | Stateless; load‑balanced by HAProxy → constant per‑request cost. |
| **Message Queue (Kafka)** | Buffers tweets and user actions. | Guarantees ordering within a topic partition; linear scalability with partitions. |
| **Producer Services** | Push tweets into Kafka partitions keyed by author ID. | Enables *exactly‑once* semantics: each tweet goes to one timeline stream. |
| **Consumer Streams (Storm/Spark Streaming)** | Build per‑user “home” streams in real time. | Parallelism ≈ number of partitions; back‑pressure handled automatically. |
| **In‑memory Store (Redis/HyperLogLog)** | Cache recent timelines for hot users. | Sub‑millisecond reads, amortizing the cost of recomputing timelines. |
| **Persistent Store (Cassandra/HBase)** | Append‑only log of all tweets and per‑user indices. | Wide‑column model supports fast range scans by user ID; linear write scaling. |

**Non‑obvious insight:**  
Twitter’s *timeline* is not a single table lookup but a *publish–subscribe stream* that materializes each user’s feed as an append‑only log of tweet IDs. This converts the “read‑heavy” problem into a “write‑heavy” one, where every new tweet only touches the authors’ followers once, and all other users read from their own pre‑built streams. The cost is shifted to the write path (which can be batched), allowing the read latency to stay constant even as user count grows.  

By treating tweets as immutable events in a distributed log and materializing feeds through stream processing, Twitter satisfies both high throughput and low latency without violating consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
