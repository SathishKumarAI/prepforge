---
qid: ing_8a9ec5b5f6__aws__local
question: 'Explain: Metadata — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:49-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to redesign Spotify’s music‑metadata service so that the catalog could scale from 1 M tracks to 10 B worldwide, while keeping query latency < 200 ms for 99.9 % of requests.

**Action (A)**  
*Ownership + Dive Deep*: I mapped every metadata field (artist, album, genre, release‑date, licensing flags) and identified hot keys—track ID, artist ID, and “search string” combinations.  
*Design*:  
- **Primary store**: Amazon DynamoDB with a composite key (partition = track_id, sort = version). It gives single‑digit ms reads and auto‑scaling throughput.  
- **Search index**: ElasticSearch on AWS OpenSearch Service for full‑text queries; we shard by artist region to keep index size manageable.  
- **Cache layer**: Amazon ElastiCache Redis for the top 1 M most‑played tracks, reducing DynamoDB load by ~70 %.  
- **Batch loader**: Glue jobs ingesting nightly CSV dumps into S3 → Lambda → DynamoDB; we added a “stale flag” to keep read traffic from stale data.  
*Bias for Action*: I provisioned 200 GB of SSD‑backed storage on DynamoDB and set up CloudWatch alarms for latency spikes.

**Result (R)**  
- Latency dropped from 350 ms to **120 ms** for 99.95 % of queries.  
- Throughput scaled from 5 kTPS to **200 kTPS** without code changes.  
- Cost per request fell by **32 %** due to Redis caching and efficient DynamoDB provisioning.

**Learnings**  
I discovered that denormalizing artist names into the search index dramatically cut cross‑service joins, but introduced eventual consistency challenges—resolved with a DynamoDB Streams consumer that keeps the index in sync. This iteration taught me to balance freshness against cost while staying fully accountable for service reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
