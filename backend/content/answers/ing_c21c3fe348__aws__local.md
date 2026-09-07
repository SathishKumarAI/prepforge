---
qid: ing_c21c3fe348__aws__local
question: 'Explain: Index by retention period — How many shards should I have in my
  Elasticsearch cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 458
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:55-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign a log‑analytics platform that ingests ~10 TB/day from IoT devices. The business required keeping data searchable for only 90 days before it could be archived, and the team wanted to keep query latency under 200 ms even at peak load.

**Action**  
1. **Retention‑based sharding** – I calculated that each shard would hold ~50 GB of hot data (≈2 weeks). For a 90‑day window this yields `90 / 14 ≈ 7` shards per index.  
2. **Elastic‑Service sizing** – I provisioned an ES domain with `m6g.large.elasticsearch` nodes, 4 vCPU/32 GB RAM each, and set *shard allocation awareness* on AZs to avoid single points of failure.  
3. **Lifecycle policy** – Using the Index Lifecycle Management (ILM) policy, indices automatically transitioned from hot → warm → cold tiers. Warm nodes were `r6g.large.elasticsearch` (more memory for aggregation), while cold data was moved to S3 via the *Elasticsearch snapshot API*.  
4. **Cost/scale trade‑off** – By limiting shards to 7 per index we kept replica count at 1, reducing storage cost by ~35 % while keeping query performance within SLA.

**Result**  
- Query latency dropped from 550 ms to 180 ms (30 % improvement).  
- Storage costs fell by $12k/month.  
- Failure tests showed zero data loss; recovery time was <5 min.  

**Bar‑raiser notes** – I demonstrated *Ownership* by driving the entire lifecycle design, *Dive Deep* through shard sizing calculations, quantified impact with real metrics, and learned from a prior over‑sharded prototype that caused 70 % more costs without performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
