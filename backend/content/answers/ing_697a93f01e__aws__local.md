---
qid: ing_697a93f01e__aws__local
question: 'Explain: Operational Tradeoffs — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 540
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:32-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a recommendation engine from an on‑premise SQL cluster to a fully cloud‑native data pipeline that had to serve 10 M active users with <200 ms latency for real‑time inference. The core question was whether to keep a relational store (PostgreSQL) or switch to a NoSQL solution (DynamoDB) for feature storage.

**Action**  
1. **Dive Deep on Workload** – I profiled the query mix: 95 % of reads were key–value lookups, 5 % were complex joins over user‑item tables during model training.  
2. **Design Trade‑off Matrix** –  
   *SQL (Aurora PostgreSQL)*: Strong ACID guarantees, support for analytic queries; but scaling read replicas to >50 k RPS hit write bottlenecks and cost $0.10/GB‑month for storage.  
   *NoSQL (DynamoDB)*: Single‑digit ms latency at scale, automatic sharding, on‑demand capacity ($1.25/million writes); however, joins required denormalization and batch reads added 30 % overhead.  
3. **Hybrid Pattern** – I built a Lambda‑driven ETL that materialized join results into DynamoDB tables for inference, while keeping the canonical relational data in Aurora for offline analytics.  
4. **Cost & Availability** – Leveraged DynamoDB Auto Scaling (cost ≈ $0.25/million reads), Aurora Serverless v2 for bursty training jobs, and S3 + Athena for long‑term logs.

**Result**  
- Reduced inference latency from 350 ms to 140 ms (45 % improvement).  
- Cut operational cost by 37 % ($1.2 M/yr saved).  
- Achieved 99.999% availability across all services with minimal manual intervention.

**Reflection**  
*Ownership*: I owned the end‑to‑end migration, coordinating DevOps, data scientists, and security teams.  
*Bias for Action*: We prototyped the hybrid pattern in two weeks and rolled out to production within a month.  
*Learn from Failure*: Initial attempt using only DynamoDB caused cold‑start spikes; we mitigated with provisioned throughput and caching via ElastiCache.

**Leadership Principles Highlighted** – **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
