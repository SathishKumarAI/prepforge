---
qid: ing_98b3a62b78__star__local
question: 'Explain: General guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 370
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:00-05:00'
sources: []
---

**Situation**  
At my last job I was responsible for a real‑time anomaly detection pipeline built on Elasticsearch. The index had grown to 12 TB and the query latency for the ML scoring service spiked from <200 ms to >1 s during peak hours.

**Task**  
I needed to redesign the shard layout so that search performance stayed under 300 ms while keeping cluster health stable and avoiding excessive memory usage.

**Action**  
First I calculated the optimal shard size: using the rule of thumb “shard size ≈ 50–100 GB” for hot nodes, I reduced the default 30‑node cluster to 12 nodes. Then I reindexed with 240 shards (20 per node) and enabled **shrink indices** to split large segments into smaller ones. I also turned on **index.routing.allocation.require.box_type=hot** to keep all ML indices on SSDs, and used the **elasticsearch-shard-sizer** script to monitor segment sizes in real time. Finally, I added a small “warm” tier for older data, moving 70 % of the index there via ILM policies.

**Result**  
Query latency dropped to an average of 180 ms (±20 ms), and CPU usage on hot nodes fell by 35 %. The cluster’s JVM heap utilization stayed below 70 %, eliminating frequent garbage collection pauses. I learned that practical shard sizing is a balancing act between segment count, node memory, and data locality—small shards improve parallelism but can overload the coordinator if too many exist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
