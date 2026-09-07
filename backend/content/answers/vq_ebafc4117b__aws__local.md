---
qid: vq_ebafc4117b__aws__local
question: How many devices? How many events per second?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 531
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:06-05:00'
sources: []
---

**S – Situation & Goal**  
I led the migration of a consumer‑fitness platform from on‑prem Hadoop to an Amazon‑native data lake. The product had 1 M active users and was expected to grow 30 % YoY, with each user generating ~10 health‑tracking events per minute (step counts, heart‑rate samples, GPS pings).

**T – Task**  
Define the scale for our ingestion layer: estimate devices, event rate, and design a cost‑efficient, highly available pipeline that guarantees real‑time analytics.

**A – Action**  
1. **Dive Deep into Usage Patterns** – sampled 10 k users over 3 months → 6 M events/day ≈ 70 k events/sec (peak).  
2. **AWS Design** –  
   * **Amazon Kinesis Data Streams** (shards = ceil(70 k / 500 events‑per‑sec per shard) ≈ 140 shards).  
   * **Lambda** for real‑time enrichment, autoscaling via concurrency limits.  
   * **Glue** catalog for schema evolution; **Athena** for ad‑hoc queries on S3 lake.  
3. **Cost & Availability** – Kinesis pricing ~ $0.015/shard‑hour → ~$120/day; Lambda < $10/day. S3 storage cost ~$0.023/GB, projected 500 GB/month = $11.5/month.  
4. **Monitoring & Rollback Plan** – CloudWatch alarms on shard lag >30 s, auto‑scaling triggers, blue‑green deployment of ingestion logic.

**R – Result**  
Within 2 weeks post‑migration:  
* Latency < 2 s for 99th percentile events.  
* Cost reduced by 45 % compared to legacy Hadoop (AWS bill $1.8k/month vs $3.2k).  
* Ability to run real‑time cohort analyses in <30 s, driving a feature that increased user retention by 12 %.  

**Leadership Principles Reflected**  
* **Ownership** – took end‑to‑end responsibility for scalability and cost.  
* **Dive Deep** – quantified event rates from live telemetry.  
* **Deliver Results** – achieved performance targets while cutting spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
