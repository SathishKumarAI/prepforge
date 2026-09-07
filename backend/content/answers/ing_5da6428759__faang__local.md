---
qid: ing_5da6428759__faang__local
question: 'Explain: High Level for Pull Based Timelines — The Architecture Twitter
  Uses to Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets
  in Under 5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 521
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:21:50-05:00'
sources: []
---

**Clarify**

The question asks how Twitter’s “pull‑based timeline” architecture scales to 150 M users, ~300 k QPS, a 22 MB/s firehose and delivers tweets in <5 s.  
Assumptions: *“Pull” means clients request their home feed; we’re focusing on back‑end data flow, not the UI.*  

**Approach**

1. **Ingest → Stream → Store → Query**  
2. Use a *partitioned, replicated* message queue for the firehose (Kafka).  
3. Persist user‑specific timelines in a fast key‑value store (Cassandra/HBase) with per‑user partitions.  
4. Serve via a stateless API layer that pulls from the store and applies filters.

**Depth**

- **Ingestion:** Kafka topics partitioned by user hash; 22 MB/s → ~10 k partitions for throughput & fault isolation.  
- **Processing:** Micro‑services consume streams, compute “followers’ timelines” in real time (fan‑out‑write) and materialize into per‑user timeline tables.  
- **Storage:** Each user’s timeline is a sorted set keyed by tweet timestamp; writes are append‑only, reads use range scans for the last N tweets.  
- **Serving:** API servers run behind a CDN; each request fetches from the nearest data center, retrieves up to 200 recent tweets, merges with realtime “mentions” pulled from an in‑memory cache (Redis). Latency <5 s achieved by: (a) pre‑computed timelines, (b) local caching of hot tweets, (c) asynchronous background rebalancing.

**Edge Cases**

- Sudden follower spikes → backpressure on Kafka; solution: dynamic partition scaling.  
- Cache misses for unpopular users → fallback to DB read with graceful degradation.  
- Network partitions → data replication ensures consistency.

**Optimize & Communicate**

- **Shard by user hash** to avoid hot spots;  
- **Use bloom filters** in the timeline store to skip empty ranges;  
- **Batch API responses** (e.g., 20 tweets per call) to reduce round‑trips.  
Explain trade‑offs: fan‑out write yields high write cost but O(1) read latency, acceptable for 150 M users.

This architecture balances throughput, low latency, and fault tolerance—key for Twitter’s massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
