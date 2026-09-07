---
qid: ing_c83dbc42d2__aws__local
question: 'Explain: Reliability and Redundancy — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 531
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:51-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a high‑traffic photo sharing app (≈ 200 M active users) to AWS. The goal was to guarantee **99.999% availability** while keeping cost under $2 M/month.

**Action**  

| Layer | Design & AWS Services | Why |
|-------|----------------------|-----|
| **Front‑end** | Global **Route 53** + **CloudFront** with WAF, origin in **NLB** behind **Auto Scaling EC2** (multi‑AZ). | Edge caching reduces latency; NLB provides TLS termination and 100 k+ concurrent connections. |
| **API** | **AppSync** + **Lambda@Edge** for real‑time analytics, backed by **DynamoDB Global Tables** (US‑East‑1 & EU‑West‑2). | Multi‑region writes keep data in sync; DynamoDB’s 99.999% SLA handles spikes. |
| **Storage** | User media on **S3** with cross‑region replication to **Glacier Deep Archive** for cold objects. | S3 provides 11 nines durability, cross‑region copy gives active‑active redundancy. |
| **Database** | **Aurora Serverless v2** (PostgreSQL) with Multi‑AZ and **Read Replicas** in each region. | Automatic scaling + failover; cost per request rather than idle capacity. |

*Redundancy*: Each tier is replicated across two AZs and two regions. Health checks on Route 53 route traffic to healthy endpoints, while CloudWatch alarms trigger auto‑scaling or fail‑over.

**Result**  
Post‑migration, uptime rose from **99.95% → 99.999%**, user churn dropped by **12%**, and we saved **$350K annually** through serverless scaling.  

**Reflection (Bar‑raiser focus)**  
I owned the entire stack, dove deep into latency bottlenecks, quantified impact with SLOs, and learned that “auto‑scaling is only as good as your alarms”—so I added predictive scaling based on traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
