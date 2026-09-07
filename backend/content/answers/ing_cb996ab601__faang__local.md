---
qid: ing_cb996ab601__faang__local
question: 'Explain: High Level for Search — The Architecture Twitter Uses to Deal
  with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 635
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:32:31-05:00'
sources: []
---

**Clarify**

> *How does Twitter’s search stack handle 150 M active users, ~300K QPS, a 22 MB/s firehose and return tweets in <5 s?*  
Assumptions to confirm: (1) the search index is read‑heavy; (2) writes come from the real‑time stream; (3) latency bound is on user-facing queries.

---

**Approach**

1. **Ingest & Normalization** – parse the firehose, dedupe, and enrich tweets.  
2. **Indexing Pipeline** – split by shard, use Lucene/Elasticsearch or custom inverted index with field‑level compression.  
3. **Search Layer** – distributed query router → shards → local ranking → merge.  
4. **Caching & Pre‑fetch** – LRU caches for hot queries and recent tweets; CDN edge cache for static assets.  
5. **Scalability Controls** – auto‑scaling, sharding by user hash or geo‑region, and read replicas.

---

**Depth**

*Ingest*: Kafka topics per data center ingest 22 MB/s → Spark/Storm jobs parse into Avro → write to HDFS and a real‑time index.  
*Indexing*: Each shard holds ~1M tweets; inverted lists use skip‑lists + bitmaps for fast intersection. 128‑bit hashes keep term dictionaries small (~200 KB per shard).  
*Search*: A query router (e.g., Nginx + custom Go service) balances to the nearest shards based on locality. Each shard performs a two‑phase search: term match → score by recency, retweets, user weight. Results are streamed back and merged in O(log k) time.  
*Caching*: Tiered cache – L1 (in‑memory per node), L2 (Redis cluster). Frequently queried hashtags or timelines hit the cache, bypassing disk.  
*Latency*: 90th percentile <5 s achieved by keeping shard response <300 ms and merge overhead <200 ms; network RTT kept below 20 ms via colocated datacenters.

---

**Edge Cases**

- **Burst traffic** (e.g., breaking news): autoscaling kicks in, additional shards spin up.  
- **Shard failure**: read replicas serve until primary restored; write-back to log.  
- **Data skew**: hot tweets cause index imbalance; re‑sharding or sharding by hash mitigates.

---

**Optimize & Communicate**

Potential improvements:  
* Use vector‑based similarity for better relevance, trading CPU for higher precision.  
* Apply machine‑learning ranking models offline and serve via a lightweight inference layer.  
When explaining to interviewers, emphasize the trade‑offs between consistency (eventual vs strong), cost (more replicas vs faster reads), and complexity (custom index vs managed Elasticsearch). This demonstrates structured thinking, depth in architecture, and awareness of operational constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
