---
qid: ing_2cac8f9b9a__aws__local
question: 'Explain: Active-Active Geo Distribution — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 563
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:57-05:00'
sources: []
---

**Situation – Problem**  
Our global marketplace needed sub‑100 ms latency for every user while guaranteeing 99.999% availability across regions. Traditional active‑standby (single primary + read replica) would have introduced a single point of failure and higher write latencies.

**Task – What I owned**  
Design an *Active‑Active Geo‑Distributed* data layer that keeps writes in sync worldwide, delivers real‑time consistency for critical counters, and scales to millions of concurrent sessions.

**Action – Architecture & AWS services**  

| Requirement | Design Choice | AWS Service(s) |
|-------------|---------------|----------------|
| Low write latency everywhere | Multi‑region *Global Tables* (DynamoDB) or *Aurora Global Database* | DynamoDB Global Tables, Aurora Global DB |
| Strong consistency for counters | **Conditional writes + Optimistic locking**; use DynamoDB’s **Transaction APIs** | DynamoDB Transactions |
| Cost control | Region‑specific read/write capacity with auto‑scaling; use S3 Cross‑Region Replication for archival logs | S3 CRR, Auto Scaling |
| Disaster recovery & routing | Route 53 latency‑based routing + health checks | Amazon Route 53 |

*Data replication models*:  
1. **Synchronous** (e.g., Aurora Global DB) – writes propagate instantly; low tolerance for partitions but gives strong consistency.  
2. **Asynchronous** (DynamoDB Global Tables) – eventual consistency with 200 ms sync latency; cost‑efficient and highly available.

**Result – Impact**  
- Cut global write latency from ~250 ms to <70 ms.  
- Achieved 99.999% uptime during a cross‑region outage, while maintaining per‑second request rates of 3 M in the U.S. region and 1 M in EU.  
- Reduced operational cost by 18 % through auto‑scaling and multi‑AZ read replicas.

**Reflection – Learning & Bar‑raiser cues**  
I *owned* the failure scenarios, dug into consistency trade‑offs, and quantified performance gains. The bar‑raiser would check that I clearly articulated risk–benefit choices, demonstrated ownership of monitoring (CloudWatch alarms), and showed how post‑mortems improved the design for future launches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
