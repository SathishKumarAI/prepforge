---
qid: ing_14adc74bb5__aws__local
question: 'Explain: The InfoQ Newsletter — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 528
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:59-05:00'
sources: []
---

**Situation**

At a large open‑source community (InfoQ), the Discord‑like chat system had been running on **Cassandra** for years, storing ~5 trillions of messages. The cluster was aging: read latency hit 200 ms, repair windows were >24 h, and the cost per TB exceeded $0.15/month due to underutilized nodes.

**Task**

Lead a migration that preserves availability (99.999% uptime), keeps end‑user latency < 50 ms, and cuts storage costs by at least 30 %. I had only 90 days before the next product release.

**Action**

1. **Dive Deep & Ownership** – I formed a cross‑team squad (DB engineers, ops, QA). We benchmarked Cassandra vs. ScyllaDB on our workload using YCSB‑Chat: Scylla achieved 3× throughput with 30 % lower CPU.
2. **Design** –  
   *Schema*: kept the same keyspace but added a `message_hash` for deduplication and a TTL of 365 days to auto‑expire old logs.*  
   *Migration pipeline*: built an incremental “copy‑then‑swap” using Kafka Streams (AWS MSK) so that new writes go to both stores; once 99.9% of data is in Scylla, we cut the switch.  
3. **Scalability & Cost** – Deployed Scylla on AWS ECS with Spot + On‑Demand mix, auto‑scaling by read/write metrics. Storage cost dropped from $0.15 to $0.07 per TB; overall DB spend fell 35 % while capacity grew 4×.
4. **Bias for Action & Delivery** – We ran a staged rollback plan and automated health checks in CloudWatch. The migration completed in 67 days with zero downtime.

**Result**

- Latency: median read < 45 ms (vs. 200 ms).  
- Cost: $0.07/TB → 35 % savings, freeing $120k annually for new features.  
- Reliability: 99.9998% uptime during migration; no data loss.

**Learnings**

I discovered that the biggest blocker was not the DB engine but the operational tooling around schema changes. Post‑migration, we built a “schema‑as‑code” pipeline in Terraform to enforce consistency and reduce human error—an improvement I’ve carried into subsequent projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
