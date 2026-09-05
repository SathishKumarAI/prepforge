---
qid: ing_f46e20dbbb__star__local
question: 'Explain: Avoid node hotspots — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 325
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:59-05:00'
sources: []
---

**Situation**  
While building a real‑time anomaly detection pipeline for a financial services client, we ingested over 5 M transaction logs per day into an Elastic cluster. The initial deployment used 30 shards of 1 GB each across five nodes.

**Task**  
I needed to eliminate the single “hot” node that was saturating CPU and disk I/O, which caused query latency spikes during peak trading hours.

**Action**  
First, I ran profile queries to pinpoint the hotspot. The shard distribution was uneven because many shards contained highly skewed data (e.g., a few accounts with massive activity). I re‑sharded by increasing the number of primary shards to 60 and introduced a custom routing key based on account ID prefixes. This ensured that active accounts were spread across nodes. Then, I adjusted the shard size to ~750 MB and set `index.refresh_interval` to 30s for low‑write use cases. Finally, I enabled shard allocation awareness tags so hot shards would not cluster on a single rack.

**Result**  
CPU usage dropped from 95% to <45%, and query latency improved from an average of 1.8 s to 350 ms during peak times—a 80% reduction. I learned that careful shard sizing combined with intelligent routing can prevent node hotspots, especially in ML workloads where data skew is common.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
