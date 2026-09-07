---
qid: ing_a82c53ff92__faang__local
question: 'Explain: Aim for shards of up to 200M documents, or with sizes between
  10GB and 50GB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 503
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:46-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about shard sizing strategy in a large‑scale document store (e.g., Elasticsearch). We want shards that are small enough to be efficiently rebalanced but large enough to avoid overhead—targeting 200 M docs or 10–50 GB per shard. Confirm assumptions: total data volume, query patterns, write throughput, hardware limits (CPU, RAM, disk I/O), and cluster scale.

**Approach**  
1. Compute average doc size (`total_bytes / total_docs`).  
2. Decide whether to target by doc count or byte size based on the distribution.  
3. Derive shard count: `ceil(total_docs / 200M)` or `ceil(total_bytes / avg_shard_size)`.  
4. Validate against cluster constraints (max shards per node, memory per shard).  
5. Iterate: adjust thresholds if imbalance or rebalancing costs spike.

**Depth**  
- *Shard sizing formula*:  
  ```text
  target_docs = min(200M, total_bytes / avg_doc_size)
  num_shards  = ceil(total_docs / target_docs)
  ```
- *Memory*: each shard consumes ~40 MB of heap; limit shards per node to <10 000 for safety.  
- *Rebalancing*: fewer large shards mean less frequent rebalances but higher recovery time.  
- *Write amplification*: too many small shards cause more index merges and GC overhead.

**Edge Cases**  
- Highly skewed doc sizes → some shards exceed 50 GB; handle with dynamic shard allocation or manual splitting.  
- Sudden write bursts could overflow hot shards; use rollover indices or autoscaling.  
- If `avg_doc_size` is <0.5 KB, 200M docs may still be <10 GB; prefer byte‑based sizing then.

**Optimize & Communicate**  
Explain trade‑offs:  
- *Smaller shards* → faster rebalancing, better parallelism, but higher overhead.  
- *Larger shards* → less management cost, but slower recovery and potential hot spots.  
Recommend periodic monitoring of shard health metrics (e.g., `shard.store.size`, `searchable_shards`) and automated alerts to trigger resharding when thresholds drift. This balances operational efficiency with performance, a key metric for FAANG‑style infrastructure reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
