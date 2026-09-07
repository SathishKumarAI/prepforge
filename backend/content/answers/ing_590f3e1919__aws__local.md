---
qid: ing_590f3e1919__aws__local
question: 'Explain: Redundancy & Replication — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 540
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:08-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a feature that added “story” uploads to our photo‑sharing app (≈ 1B active users). The requirement was *99.999%* uptime and *≤200 ms* read latency for the feed, even under sudden traffic spikes.

**Action – Redundancy & Replication Design**  
I scoped a **multi‑AZ architecture** using:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| CDN + cache | Amazon CloudFront + ElastiCache Redis (cluster mode) | Global edge caching reduces origin load. Redis cluster gives *sub‑10 ms* read latency and automatic failover. |
| Storage | S3 with cross‑region replication (CRR) to us-east-1 & eu-central-1 | Immutable, durable objects; CRR ensures data availability if an AZ fails. |
| Metadata DB | Amazon Aurora Serverless v2 (PostgreSQL) in a *read‑replica* pool across 3 AZs | Auto‑scales reads up to 50 k RPS, writes are single‑AZ but replicated asynchronously to replicas for read‑heavy traffic. |
| Orchestration | AWS Step Functions + Lambda | Decouples upload pipeline; each step runs in a separate region to avoid bottlenecks. |

**Dive Deep – Trade‑offs**  
- **Cost vs Availability**: Aurora Serverless saves $0.10/instance‑hour but incurs higher latency for cold starts; we mitigated with *provisioned* warm pools during peak hours.  
- **Replication Lag**: Asynchronous S3 CRR can lag 5–15 min, acceptable because stories are read‑once and eventually consistent.  

**Result**  
Post‑deployment, the feature achieved **99.999% uptime** over six months, with *average read latency 95 ms* (≤200 ms SLA). Traffic spikes of 4× were absorbed without a single outage, and storage costs stayed 18% below baseline due to efficient use of S3 lifecycle policies.

**Learning & Ownership**  
I instituted a quarterly “failure drill” to test failover paths; after discovering a missed CloudFront edge update, I automated the deployment pipeline, reducing manual steps by 30%. This demonstrates *Ownership*, *Bias for Action*, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
