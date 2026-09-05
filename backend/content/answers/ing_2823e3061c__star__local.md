---
qid: ing_2823e3061c__star__local
question: 'Explain: Size your shards — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 452
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:38-05:00'
sources: []
---

**Situation:**  
In a SaaS analytics platform, we were ingesting 12 M event logs per day into an Elastic cluster that had to serve real‑time dashboards for 200 customers. The cluster started throttling writes and query latency spiked after only three weeks.

**Task:**  
I needed to redesign the sharding strategy so that the cluster could handle sustained write throughput, keep search fast, and still be cost‑effective on our cloud instance limits.

**Action:**  
1. **Baseline analysis** – I exported recent index statistics (docs/second, shard size, heap usage) with X-Pack monitoring. Each primary shard averaged 2 GB after a week; the cluster had only 8 primary shards per index by default.  
2. **Shard sizing rule** – Adopted the guideline “shard size ≈ 1–5 GB” and kept total primaries ≤ 10× node‑count to avoid over‑provisioning.  
3. **Reindex with dynamic templates** – Created a new index template that set `number_of_shards` to 16 for the event type, distributed across 4 nodes. Added a daily rollover alias so each day’s data lived in its own index.  
4. **Shard allocation awareness** – Configured `_shard_allocation_cluster_manager` settings to spread shards across availability zones and avoid hot‑spots on single SSD disks.  
5. **Monitoring loop** – Enabled the `shardsize` metric in Kibana, set alerts when a shard grew beyond 3 GB, and automated reindexing for aging data.

**Result:**  
Write throughput doubled from ~4k docs/sec to >8k docs/sec without throttling. Search latency on average queries dropped from 750 ms to 220 ms. We also cut storage costs by 18 % because each shard was now fully utilized, and the automated rollover prevented any single index from ballooning beyond 5 GB. I learned that proactive shard sizing combined with daily rollovers is a simple yet powerful way to keep Elastic performance predictable at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
