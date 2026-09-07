---
qid: ing_06fa4c34ef__aws__local
question: 'Explain: Avoid unnecessary mapped fields — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 426
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:47-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our recommendation engine from an on‑premise Solr cluster to Amazon OpenSearch Service (formerly Elasticsearch). The original schema had dozens of “mapped” fields that were never queried, yet each added 10 MiB of storage per shard and slowed index refreshes. Our goal was to cut storage costs by 30 % while keeping query latency under 50 ms for a catalog of 12 M products.

**Action**  
1. **Dive Deep on Usage** – I ran the OpenSearch `_cat/fielddata` API, cross‑checked with CloudWatch logs, and found 18 fields used <0.01 % of the time.  
2. **Ownership & Bias for Action** – I rewrote the index template to mark those fields as `enabled: false` (or removed them entirely) and re‑indexed.  
3. **Scalability / Cost Trade‑off** – Each shard was 1 TiB; by removing the unused mapping we reduced per‑shard size from 1.2 TiB → 0.9 TiB, allowing us to drop the number of shards from 24 → 18 without hitting the 5 TB limit.  
4. **Availability** – I used OpenSearch’s `reindex` API with a `wait_for_completion=false` and performed a rolling reindex to avoid downtime.  

**Result**  
- Storage cost fell by **$12,000/month** (≈ 30 % of the previous spend).  
- Query latency improved from 62 ms to **48 ms** on average.  
- Indexing throughput increased by **15 %**, freeing capacity for new features.

**Learnings** – Early schema audits are a low‑hanging fruit; removing “dead weight” gives immediate ROI and improves system health. This aligns with *Customer Obsession* (better performance) and *Ownership* (proactively reducing costs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
