---
qid: ing_142093c6c4__star__local
question: 'Explain: MongoDB sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:26-05:00'
sources: []
---

**Situation**  
When I joined the e‑commerce analytics team, our nightly aggregation pipeline was hitting a bottleneck: the daily user‑activity dataset had grown to 3 TB and queries were taking hours on a single replica set.

**Task**  
I needed to design a scalable solution that kept write throughput high while reducing query latency below one minute for any customer segment report.

**Action**  
I introduced MongoDB sharding. First, I defined a *shard key* based on `user_id` hashed with `hashed()` to ensure even distribution across shards. Then I set up three shard servers (each an entire replica set) and deployed a config server cluster for metadata. To avoid “hot spots,” I added a balancer that automatically migrated chunks when size thresholds were exceeded. I also created indexes on the sharded fields (`user_id`, `event_timestamp`) to accelerate range scans, and used the `$out` aggregation stage to write results back into a separate collection on the same cluster. Finally, I monitored `shardKeyRange` statistics via Ops Manager to fine‑tune chunk sizes.

**Result**  
Query latency dropped from ~4 hrs to under 45 seconds for any 24‑hour slice, and write throughput increased by 3×. The system now supports real‑time dashboards with sub‑second response times. I learned that careful shard key selection and continuous monitoring are critical; a poor key can turn sharding into a performance nightmare.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
