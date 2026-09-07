---
qid: ing_73ccc93b19__aws__local
question: 'Explain: Troubleshoot shard-related errors — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 418
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:48-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our e‑commerce catalog from a legacy SQL store to **Amazon OpenSearch Service (formerly Elastic Search)**. After ingesting ~4 B documents, we hit frequent “shard limit” and “index overflow” errors that stalled nightly reindex jobs.

**Action**  
1. **Dive Deep into metrics** – pulled cluster stats (`_cat/shards`, `cluster.health`) and found each shard > 2 GB (the OpenSearch default max).  
2. **Size Shards & Indexes** – applied the “Shard Size Rule of Thumb” (≤ 50 GB total, ≤ 100 shards per index) and re‑partitioned into 12 indices with *7* primary shards each, adding 1 replica for HA.  
3. **Automate via Terraform + Lambda** – scripted index lifecycle policies that roll over when a shard reaches 2 GB, keeping shards balanced.  
4. **Cost & Availability trade‑off** – opted for `t3.medium.elasticsearch` instances (cost‑effective) and enabled **UltraWarm** to move older shards to cheaper storage while retaining search performance.

**Result**  
- Shard‑related errors dropped from 35 % of reindex jobs to <1 %.  
- Reindex throughput increased by **4×** (from 300 k docs/hr to 1.2 M docs/hr).  
- Daily cost fell 18 % due to efficient use of UltraWarm and fewer instance hours.

**Bar‑raiser check** – I owned the entire problem, dove deep into metrics, quantified impact with clear KPIs, and iterated on a solution that balanced performance, reliability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
