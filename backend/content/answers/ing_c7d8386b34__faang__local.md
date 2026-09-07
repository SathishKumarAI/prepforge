---
qid: ing_c7d8386b34__faang__local
question: 'Explain: Force merge during off-peak hours — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 522
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:24:57-05:00'
sources: []
---

**Clarify**  
The interview asks how to perform a *force‑merge* (index compaction) in Elasticsearch during off‑peak hours while sizing the shards that will receive the merged data. We need to understand:  
1. What “off‑peak” means for our traffic pattern.  
2. Which indices/aliases are affected and their current shard counts.  
3. The total size of data to be compacted, retention policy, and any compliance constraints.

**Approach**  
1. **Baseline metrics** – capture cluster health, node capacity, and current index stats (docs, bytes).  
2. **Workload analysis** – use historical query/ingest rates to define a safe window.  
3. **Shard sizing** – aim for 30–50 GB per primary shard (industry guideline) while respecting the maximum shard limit (~5k per node).  
4. **Force‑merge plan** – schedule `POST /<index>/_forcemerge?max_num_segments=1` during the window, monitoring CPU/IO.  
5. **Rollback strategy** – keep a snapshot before merging.

**Depth**  
- *Shard sizing*: For 1 TB of data, target ~20–30 primary shards → 33–50 GB each.  
- *Force‑merge cost*: Reads are blocked for the shard; CPU and disk I/O spike (≈ 10× normal). Using `wait_for_completion=false` allows async execution with a callback.  
- *Complexity*: O(n) over shards, but real‑time impact is linear in concurrent merges.

**Edge Cases**  
- High cardinality indices: may need more shards to avoid hot spots.  
- Sparse data (many deleted docs): force‑merge can reclaim significant space.  
- Cluster under heavy query load: even off‑peak, latency spikes may still affect users—test with a staging cluster.

**Optimize & Communicate**  
Explain that we’ll use a rolling force‑merge to keep one shard idle at a time, reducing impact. We’ll monitor `cluster.stats` and set alerts on latency > 200 ms. After merging, reindex or refresh to ensure searchability. Conclude by emphasizing the trade‑off: larger shards reduce overhead but increase merge cost; smaller shards ease merges but raise node limits. This balanced strategy aligns with FAANG expectations for scalable, low‑downtime operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
