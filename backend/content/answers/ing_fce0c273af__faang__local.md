---
qid: ing_fce0c273af__faang__local
question: 'Explain: High Level Design — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 463
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:44-05:00'
sources: []
---

**Clarify**  
We need a high‑level architecture for “TwitterSearch” – a service that accepts user queries, fetches matching tweets in real time, and returns ranked results.  
Assumptions: *search scope is public tweets only*, *latency < 200 ms for 95% of requests*, *scale to millions of concurrent users*, *query language supports text, hashtags, mentions, geo‑filters*.

**Approach**  
1. **Client → API Gateway → Search Service**  
2. **Search Service** delegates to a *Query Planner* that chooses the right index (text, hashtag, location).  
3. **Distributed Indexes** on a sharded search engine (Elasticsearch/Apache Solr) backed by Kafka streams of tweet ingestion.  
4. **Ranking Engine** runs in parallel, pulling candidate IDs from indexes and scoring via TF‑IDF + popularity features.  
5. **Result Aggregator** merges shards’ top‑k lists, applies global filters, returns JSON.

**Depth**  
- *Ingestion*: Tweets flow into Kafka → MapReduce to update inverted indices per shard.  
- *Latency*: Each shard answers in ~50 ms; aggregator stitches in < 30 ms.  
- *Scalability*: Horizontal scaling of shards and ranking workers; hot‑key caching for frequent queries.  
- *Fault tolerance*: Replicated Kafka partitions, index replicas, circuit breakers.

**Edge Cases**  
- Extremely large result sets → pagination & cursoring.  
- Query terms with no matches → graceful “no results” handling.  
- Outages of a shard → fallback to replica and serve stale data for 1 s.

**Optimize & Communicate**  
We can improve by caching popular query vectors, using approximate nearest‑neighbor indices for semantic search, and employing machine‑learning ranking models (e.g., BERT) offline. I’d explain the trade‑off between freshness (real‑time updates) and latency (batch indexing). This structure demonstrates clear problem framing, solution planning, technical depth, edge‑case awareness, and optimization thinking—key to a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
