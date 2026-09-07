---
qid: ing_a36644fdf0__aws__local
question: 'Explain: Pros and cons — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 476
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:49-05:00'
sources: []
---

**Customer Obsession + Ownership**

> *Situation:* While architecting a global e‑commerce platform for 50 M monthly users, the monolithic product catalog database hit 3 TB and started throttling reads during flash sales.  
> *Task:* I had to reduce latency below 150 ms while keeping cost < $10k/month.  
> *Action:* I introduced **sharding** – partitioning the table by `country_code`. Each shard became a separate Aurora‑PostgreSQL cluster, deployed in two AZs for high availability. Shards were routed via a lightweight Lambda proxy that resolved user locale to the correct endpoint. We added DynamoDB as an eventual‑consistency cache for hot items.  
> *Result:* Read latency dropped from 350 ms to 110 ms (30% improvement). Write throughput scaled linearly; we handled 10× traffic during peak sales without throttling. Operational cost fell to $7k/month due to targeted scaling of only active shards, and data consistency was maintained with two‑phase commit on critical updates.

**Dive Deep + Deliver Results**

- **Pros:**  
  - *Horizontal scalability* – each shard can be resized independently; cost is proportional to usage.  
  - *Fault isolation* – a failure in one shard doesn’t cascade to others.  
  - *Improved query locality* – queries touch fewer rows, boosting cache hit rates.

- **Cons:**  
  - *Complexity* – application logic must route queries; transaction boundaries are limited across shards.  
  - *Data migration risk* – re‑sharding requires careful planning and potential downtime.  
  - *Monitoring overhead* – each shard needs separate metrics, alarms, and backups.

**AWS services leveraged:** Aurora PostgreSQL (primary), DynamoDB (cache), Lambda (routing), CloudWatch + X-Ray (monitoring), Backup & Restore.

**Bar‑raiser focus:** I showed ownership by owning the full migration plan, depth through detailed sharding strategy, quantified impact with latency & cost metrics, and learned from a failed pilot that required adding cross‑shard replication to preserve consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
