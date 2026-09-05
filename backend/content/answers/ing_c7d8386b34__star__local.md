---
qid: ing_c7d8386b34__star__local
question: 'Explain: Force merge during off-peak hours — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 388
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:18-05:00'
sources: []
---

**Situation:**  
At my last job I was maintaining a prod search cluster that served an e‑commerce site with ~12 M documents and 3 TB of data. Every night the nightly pipeline ran a force merge to reduce segment count, but we hit a spike in CPU during peak hours, causing query latency to climb by 25 %.  

**Task:**  
I needed to schedule the force merges in off‑peak windows while ensuring that shards were sized optimally so the cluster could handle the merge load without impacting user traffic.  

**Action:**  
First I ran `/_cat/shards` and noted we had 200 shards across 10 nodes – roughly 60 GB each, far below the recommended 50–100 GB per shard for our workloads. I re‑sharded the index: dropped a few under‑utilized shards and increased replicas to spread merge traffic. Then I created an ingestion pipeline that triggers `POST /my-index/_forcemerge?max_num_segments=1` at 02:00 AM, using the cluster’s low CPU window. I also added a throttling parameter (`max_bytes_per_sec`) so merges stayed below 200 MB/s, preventing spikes.  

**Result:**  
After re‑sharding and scheduling the merge, nightly latency dropped from 400 ms to 180 ms during peak hours, and the cluster’s CPU usage never exceeded 30 % in the off‑peak window. I learned that shard sizing is a proactive way to tame heavy operations like force merges; balancing size with replica count can turn a performance bottleneck into a predictable maintenance task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
