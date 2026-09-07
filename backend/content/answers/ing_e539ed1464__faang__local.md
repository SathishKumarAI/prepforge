---
qid: ing_e539ed1464__faang__local
question: 'Explain: Elasticsearch Cluster — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 539
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:17-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *Elasticsearch* cluster that could support a music‑streaming service like Spotify: massive, constantly updated catalog, multi‑tenant search (artists, tracks, playlists), high query throughput and low latency. I’d confirm: 1) expected data size (e.g., millions of songs, billions of user interactions); 2) read/write ratios; 3) required SLAs for search latency and indexing freshness.

**Approach**  
1. **Data model & sharding** – index by `song_id`, shard on a hash of that ID to distribute load.  
2. **Cluster topology** – master‑eligible nodes (5–7) for resilience, data nodes (≥10) with hot/cold tiering.  
3. **Replication & fault tolerance** – set replica count to 1 or 2 per shard; use cross‑cluster replication for backup.  
4. **Index lifecycle management** – rollover indices daily for logs, delete after retention period.  
5. **Caching & query shaping** – enable the query cache on popular terms, use fielddata caching for aggregations.  

**Depth**  
- *Sharding*: `index.number_of_shards = 20`, each shard ~50 GB (for 2 TB catalog).  
- *Replica factor*: 1 → 40 % storage overhead; ensures read availability during node failure.  
- *Hot‑cold tiering*: active shards on SSDs, archived ones on HDDs to cut costs.  
- *Indexing pipeline*: ingest node transforms metadata (e.g., genre tags) before indexing.  
Complexity: O(log N) search per shard; overall latency ≈ O(log S × Q), where S = #shards, Q = query complexity.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale data nodes via Kubernetes or cloud autoscaling.  
- Large bulk imports (e.g., new album releases) could lock shards; use bulk API with throttling.  
- Schema changes: use index templates and reindexing jobs to avoid downtime.

**Optimize & Communicate**  
Explain trade‑offs: more replicas → higher write cost but better read latency. Hot‑cold tiering saves money but adds retrieval latency for cold data. Suggest monitoring key metrics (search latency, CPU, JVM GC) and setting up alerts. Conclude with a diagram of cluster layout and a brief note on future scaling—adding shards or nodes as catalog grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
