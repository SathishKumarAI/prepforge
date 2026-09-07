---
qid: ing_5571e7b357__aws__local
question: 'Explain: Caching — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:21-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the redesign of our loan‑origination pipeline. The relational DB hit >30 k RPS during peak nights and latency spiked to 1.2 s, violating our SLA and driving churn.

**Action (Design)**  
I scoped a *cache‑first* strategy:  

| Layer | Service | Why |
|-------|---------|-----|
| **Query results** | **Amazon ElastiCache Redis** (cluster mode) | Low‑latency key/value store; supports TTL & pub/sub for invalidation. |
| **Read‑heavy tables** | **DynamoDB Accelerator (DAX)** | In‑memory caching for NoSQL reads, eliminating the read‑through hit on RDS. |
| **Session state** | **AWS AppConfig + S3** | Immutable config objects cached in Lambda@Edge to avoid repeated S3 fetches. |

I introduced a *cache‑stale‑policy* that invalidated only affected keys on writes (using Redis keyspace notifications). The system was instrumented with CloudWatch metrics and a custom dashboard.

**Result**  
- **Latency dropped** from 1.2 s to <200 ms for 95 % of requests (avg 0.45 s).  
- **RPS handled** increased by 4× without additional RDS instances.  
- **Cost** stayed under $3k/month vs. the projected $6k for scaling RDS alone.

**Reflection (Bar‑raiser)**  
I owned every failure point: after a cache miss surge, I traced it to stale TTLs and adjusted to event‑driven invalidation—demonstrating *Dive Deep* and *Bias for Action*. The initiative reinforced *Customer Obsession*: faster decisions = higher loan approvals and lower churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
