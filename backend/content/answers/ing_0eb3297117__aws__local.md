---
qid: ing_0eb3297117__aws__local
question: 'Explain: When to unshard a collection — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 382
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:51-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In my last role I managed a global e‑commerce catalog that grew from 10 M to 200 M documents in two years. Our MongoDB cluster was sharded by `country_id`, but query latency for cross‑region “best‑seller” reports spiked to 4 s during peak traffic, hurting the customer experience.

**Action (Dive Deep + Bias for Action)**  
I performed a shard‑level analysis:  
- **Shard size** > 500 GB and uneven distribution (70 % of data in two shards).  
- **Hot key** `product_id` was hit by >30k ops/sec on those shards.  
To unshard, I re‑partitioned by a hashed `product_id`, creating 32 new shards. I used AWS **DocumentDB** with the same schema, migrated via **AWS Data Migration Service (DMS)**, and enabled auto‑scaling for read replicas.

I also added a **TTL index** on inactive listings to keep shard size manageable, and leveraged **Amazon CloudWatch** metrics to set alarms for future imbalance.

**Result (Deliver Results + Invent & Simplify)**  
- Query latency dropped from 4 s → 120 ms (99th percentile).  
- Read throughput increased by 3× without additional nodes.  
- Operational cost fell by 15% due to smaller shard count and reduced storage.  

**Bar‑raiser takeaway**  
I owned the problem, dove deep into metrics, executed a data‑driven redesign, quantified impact, and learned that proactive shard rebalancing prevents performance regressions in large catalogs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
