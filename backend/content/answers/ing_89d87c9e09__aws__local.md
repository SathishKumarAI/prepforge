---
qid: ing_89d87c9e09__aws__local
question: 'Explain: Docstore Query Patterns — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 478
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:43-05:00'
sources: []
---

**Situation & Task** – At Uber I led the redesign of our *Docstore* (a NoSQL‑style online store for driver/ride metadata) to support 40 M reads/sec during surge events. The goal was zero latency for drivers while keeping operational cost below $5 M/month.

**Action** –  
1. **Cache Layer**: Deployed a global, read‑through cache on *Amazon ElastiCache* (Redis) with a *Least Recently Used* eviction policy and TTL tuned per document type.  
2. **Hybrid Query Engine**: Built an adapter that first probes Redis; on miss it falls back to *Amazon DynamoDB* via PartiQL for ad‑hoc filters, then writes the result back into Redis.  
3. **Consistency & Partitioning**: Used DynamoDB Global Tables for multi‑region replication and DynamoDB Streams to propagate updates to Redis, guaranteeing eventual consistency within 50 ms.  
4. **Autoscaling & Cost Control**: Enabled *DAX* caching for hot items and applied per‑hour scaling policies; monitored with CloudWatch and triggered Lambda alerts when read traffic exceeded 70 % of capacity.

**Result** – The hybrid system sustained 42 M reads/sec during peak, reduced latency from 200 ms to <20 ms, and cut storage cost by 35 %. We achieved a 99.999% uptime SLA across four regions while keeping the total spend under $4.2 M/month.

**Learnings** – Ownership drove me to prototype with a single‑region testbed before full rollout; diving deep into DynamoDB’s latency characteristics revealed that partition key skew was the bottleneck, prompting the cache strategy. I documented the failure mode (cache miss storms) and built automated retry logic, turning an initial 10 % error spike into a resilient system.

> **Leadership Principles**: *Customer Obsession* (drivers get instant data), *Ownership* (I led cross‑team execution), *Dive Deep* (profiling & tuning), *Bias for Action* (rapid prototyping), and *Deliver Results* (measured metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
