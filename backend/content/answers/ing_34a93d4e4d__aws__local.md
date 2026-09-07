---
qid: ing_34a93d4e4d__aws__local
question: 'Explain: Key Features of Aurora Serverless — What is Serverless DB?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 498
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:54-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning our recommendation engine’s data layer for a global e‑commerce platform that had just surpassed 5 M daily active users. The monolithic MySQL cluster was hitting 95 % CPU at peak, leading to latency spikes and costly over‑provisioned resources.

**Action**  
I proposed migrating to **Amazon Aurora Serverless v2**, the “serverless DB” that automatically scales compute capacity in response to workload changes. I scoped the migration with a **data‑driven approach**:

- **Requirements**: 99.99 % availability, sub‑200 ms query latency for reads, and cost predictability.
- **Design**:  
  - Aurora Serverless v2 cluster (MySQL‑compatible) behind an Amazon RDS Proxy to handle connection pooling.  
  - Read replicas in the US‑East and EU‑West regions to reduce cross‑region latency.  
  - Global Database replication for disaster recovery.  
  - CloudWatch metrics + AWS Lambda auto‑scaling alarms to adjust capacity units (0–128) every minute.
- **Trade‑offs**: Slightly higher per‑query cost (~$0.0004/req) versus a provisioned instance, but we gained up to **70 % reduction in monthly DB spend** and eliminated the need for manual scaling.

**Result**  
After 3 months of operation:

| Metric | Before (Provisioned) | After (Aurora Serverless) |
|--------|----------------------|---------------------------|
| Avg. CPU | 95 % | 35 % |
| Peak latency | 350 ms | 120 ms |
| Monthly DB cost | $48k | $14k |
| Availability | 99.92 % | 99.999 % |

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end migration, dove deep into Aurora’s scaling granularity, and quantified impact with real numbers. The biggest learning was that a “serverless” database is not merely an abstract concept—it’s a managed service that **auto‑scales compute without code changes**, enabling us to deliver consistent performance while simplifying operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
