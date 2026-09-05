---
qid: ing_f2c3a132b6__star__local
question: How do I manage shard size? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 457
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:23-05:00'
sources: []
---

**Situation**  
I was working on a real‑time analytics platform for an e‑commerce client that had to index about 3 TB of transaction logs across 12 nodes. Our initial index configuration used the default “1 shard per node” rule, which left us with 12 shards each averaging 250 GB – far beyond the recommended 50–200 GB per shard.

**Task**  
I needed to decide how many shards to allocate so that queries stayed under 150 ms, memory usage stayed below 70 % of heap, and we could still reindex quarterly without downtime.

**Action**  
1. Collected index statistics (docs, size, segment count) from the cluster API.  
2. Calculated optimal shard size using Elastic’s recommendation: keep shards between 50–200 GB; for 3 TB I targeted ~60 GB per shard → about 50 shards total.  
3. Re‑indexed with `index.number_of_shards=50` and a smaller `shard.max_result_window` to avoid deep paging.  
4. Ran load tests in Kibana’s Dev Tools, monitoring JVM GC pauses and CPU usage.  
5. Adjusted the number of replicas (from 1 to 2) to balance search throughput against write latency.

**Result**  
Query latency dropped from 280 ms to 120 ms on average; memory consumption stayed under 60 % heap, eliminating the frequent GC spikes we had before. The reindex process completed in 3 hours instead of 7, and we now have a clear shard‑size rule that scales with data volume. I learned that shard sizing is as much about operational metrics as it is about raw storage, and that small iterative tests can surface hidden trade‑offs early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
