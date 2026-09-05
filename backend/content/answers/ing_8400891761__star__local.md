---
qid: ing_8400891761__star__local
question: 'Explain: Example — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 353
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:18-05:00'
sources: []
---

**Situation:**  
At a fintech startup we migrated the user‑activity log from a monolithic PostgreSQL table to ElasticSearch for real‑time analytics. The table grew to 300 GB in six months and query latency hit 3 seconds on average.

**Task:**  
I had to design shard sizing so that indexing throughput stayed above 10k docs/sec while keeping search latency under 200 ms, even as data doubled quarterly.

**Action:**  
1. Collected 24‑hour index stats (docs per second, memory usage) and plotted the “shard‑size curve.”  
2. Decided on a baseline shard size of 30 GB to stay within the 60 GB RAM/CPU sweet spot for each node.  
3. Implemented a rolling reindex strategy: added new data shards every week, then merged small shards nightly via the `forcemerge` API (target‑segments=1) to reduce overhead.  
4. Configured index templates with dynamic routing based on user‑region to keep hot shards balanced across nodes.  
5. Monitored `searchable_snapshot` and `indexing_pressure` metrics; adjusted shard count by 10% when the “shard‑count” metric exceeded 1000.

**Result:**  
Index throughput rose to 12k docs/sec, search latency dropped to 120 ms on average, and we avoided costly node upgrades for two years. I learned that proactive shard sizing combined with automated reindexing can sustain performance without constant hardware scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
