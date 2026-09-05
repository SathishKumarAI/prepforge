---
qid: ing_4a6f5fc317__star__local
question: 'Explain: Index lifecycle management (ILM) in Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:16-05:00'
sources: []
---

**Situation**  
At my previous company we were ingesting ~10 GB/day of application logs into an Elastic Stack cluster that had grown from 3 to 12 nodes. The indices kept ballooning; hot shards hit 80 % capacity, and the query latency for recent data shot up to 1.2 s.

**Task**  
I was tasked with reducing storage costs while keeping the latest two weeks of logs searchable in under 200 ms and ensuring older data could still be retrieved for compliance audits.

**Action**  
I designed an Index Lifecycle Management policy: a “hot” phase that kept indices on SSD nodes, a “warm” phase that moved them to HDDs after 7 days, and a “cold” phase that archived them to S3 via the snapshot module after 30 days. I used ILM’s `index.lifecycle.name` setting in the template, added lifecycle-aware rollover conditions (`max_size:50GB`, `max_age:1d`), and scripted a custom retention rule that deleted snapshots older than 90 days. I also tuned the refresh interval and shard count to balance write throughput and search latency.

**Result**  
Within three months storage costs dropped by 45 %, hot‑shard utilization fell from 80 % to 35 %, and recent query latency improved to 120 ms on average. I learned that a well‑configured ILM policy can turn an unmanageable log store into a cost‑effective, performance‑optimized asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
