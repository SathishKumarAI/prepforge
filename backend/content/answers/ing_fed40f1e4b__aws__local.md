---
qid: ing_fed40f1e4b__aws__local
question: 'Explain: Combine smaller indices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 465
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:22-05:00'
sources: []
---

**S – Situation**  
At my previous role I ran a real‑time recommendation engine on Amazon OpenSearch. The daily ingestion rate hit 1 M documents, but the cluster kept hitting “shard overload” warnings because we had many tiny indices (≈ 5 GB each) created every day for A/B tests.

**T – Task**  
I was tasked to reduce shard count by merging smaller indices into larger “logical shards,” cut cost by 30 % and keep query latency under 200 ms.

**A – Action**  
1. **Dive Deep**: I profiled the index templates, looked at mapping sizes, and identified that most indices were < 10 GB.  
2. **Design**: Implemented a nightly Lambda that reads S3 snapshots of the small indices, uses OpenSearch’s `_reindex` API to merge them into target indices sized 50–100 GB (≈ 1 shard per index). I added an “age‑based” policy so stale data moved to Glacier.  
3. **AWS Services**: Lambda + Step Functions orchestrate reindex; OpenSearch handles search; S3 for snapshots; CloudWatch Alarms trigger on shard count thresholds.  
4. **Trade‑offs**: Reindexing pauses writes briefly – mitigated by a “hot” replica that continues serving queries during migration.

**R – Result**  
Post‑migration, the cluster shrank from 120 to 35 shards, reducing EBS cost from $12k/month to $8.4k/month (30 % savings). Query latency dropped from 320 ms to 150 ms, and we hit a 99.9 % uptime SLA.

**Reflection**  
I learned that “ownership” means not just fixing symptoms but re‑architecting the data lifecycle. The bar‑raiser will note my deep dive into mapping stats, measurable cost impact, and iterative learning from initial reindex failures (handled by retry logic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
