---
qid: ing_0eb3297117__star__local
question: 'Explain: When to unshard a collection — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 362
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:53-05:00'
sources: []
---

**Situation**  
In my last role I was managing a real‑time analytics platform that stored clickstream data in a single `events` collection. The shard key was `user_id`, but after a spike in marketing campaigns we saw the majority of queries filter by `event_type` and `timestamp`. The cluster had 12 shards, yet the write load remained steady at ~10k ops/sec.

**Task**  
I needed to reduce operational overhead and improve query latency for ad‑tracking reports without sacrificing data durability or sharding benefits for the high‑write portion of the dataset.

**Action**  
First, I ran a workload audit with `mongostat` and `explain()` on representative queries. The analysis showed that 85% of reads hit only two shards, while the other ten carried almost no traffic. I then created a new collection, `events_unsharded`, and used a parallel `mongoexport/import` pipeline to move the stale 70% of data (mostly older events) into it. After verifying consistency with checksum comparison, I dropped the old sharded indexes and updated the application routing logic to read from both collections using a union query pattern.

**Result**  
Query latency for ad‑tracking reports dropped from 650 ms to 120 ms, and shard maintenance windows shrank by 40%. We also saved on storage costs by eliminating duplicate shards. This exercise taught me that unsharding is optimal when read patterns become highly skewed toward a small subset of data, allowing us to consolidate less‑used partitions while preserving sharding for hot writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
