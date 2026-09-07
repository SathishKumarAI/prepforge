---
qid: ing_188c7df6a3__aws__local
question: 'Explain: Delete indices, not documents — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 758
total_tokens: 992
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:14-05:00'
sources: []
---

**Situation / Task**  
While migrating a legacy search platform to **Amazon OpenSearch Service**, I discovered that our “soft‑delete” logic was leaving 30 % of the index data untouched. The stale documents inflated shard size, slowed query latency from 250 ms to >1 s, and increased storage costs by $4K/month.

**Action**  
I led a **zero‑downtime refactor**:

| Step | What I did | Why it mattered |
|------|------------|-----------------|
| **Audit & metrics** | Queried the `/_cat/indices` API to compute total size, hit rate, and delete‑by‑query cost. | Quantified the problem (30 % of 1.2 TB). |
| **Redesign retention** | Switched from “delete by query” on documents to **index‑level deletion**: each day’s data lived in a time‑partitioned index (`logs-YYYY.MM.DD`). After 90 days, I deleted the entire index via `DELETE /logs-2023.01.01`. | Shard count dropped from ~120 to 30; query latency fell to 180 ms. |
| **Automate with Lambda** | Scheduled a nightly Lambda (Python) that: 1) lists indices older than 90 days, 2) deletes them via the OpenSearch API, and 3) publishes success/failure metrics to CloudWatch. | Eliminated manual ops; achieved 99.9 % uptime. |
| **Monitoring & alerts** | Added a CloudWatch alarm on `ClusterStatus.green` and `ShardSize` > 10 GB. | Immediate visibility for future regressions. |

**Result**  
- Reduced storage by **45 %**, saving $3.6K/month.  
- Cut query latency from 1.0 s to **180 ms** (a 82 % improvement).  
- Lowered OpenSearch Service cost from $12K to $8.4K per month.

---

### Technical Design & Trade‑offs

| Consideration | Choice | Rationale |
|---------------|--------|-----------|
| **Shard sizing** | 2 shards/index, 1 GB each | Balances parallelism with overhead; aligns with AWS OpenSearch limits. |
| **Availability** | Multi-AZ subnets + Auto Scaling for nodes | Guarantees 99.9 % availability even during index deletions. |
| **Cost** | Use `OpenSearch Service` on r5.large.elasticsearch, reserved instances | Lower hourly cost vs EC2+EBS; reserved instances cut price by 30 %. |
| **Scalability** | Time‑partitioned indices + Index Lifecycle Management (ILM) | Allows linear scaling with data volume and automated rollover. |

---

### Bar‑Raiser Lens

- **Ownership**: Took full responsibility for the legacy system’s performance, not just a patch.  
- **Dive Deep**: Used OpenSearch APIs to surface shard statistics; quantified impact before and after changes.  
- **Quantified Impact**: 45 % storage savings & 82 % latency reduction.  
- **Learning from Failure**: Realized that “soft deletes” can balloon cluster size; pivoted to index‑level deletes, a pattern now baked into our CI/CD pipeline.

*Leadership Principles*: **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
