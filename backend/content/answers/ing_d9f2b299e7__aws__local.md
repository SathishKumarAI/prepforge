---
qid: ing_d9f2b299e7__aws__local
question: 'Explain: Pattern 2: Active-Active — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 401
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:28-05:00'
sources: []
---

**Situation & Task**  
While building a global recommendation engine for a retail platform, the team needed high availability and zero-downtime deployments. The requirement was an *active‑active* architecture that could serve traffic from two regions while keeping data consistent.

**Action**  
I designed a **dual‑region active‑active load balancer** using Amazon Route 53 latency routing + health checks, paired with AWS Global Accelerator for low‑latency global reach. Each region ran identical microservices behind an Application Load Balancer (ALB) and Auto Scaling Groups. For data, I used Amazon Aurora Serverless v2 with *Cross‑Region Replication* to keep the catalog in sync; writes were routed through a *writer endpoint* that automatically promoted a standby when failover occurred.

To guarantee consistency for user sessions, I employed **Amazon ElastiCache for Redis** with read replicas in both regions and a global cache replication feature, so session data was locally available. For operational observability, CloudWatch metrics (latency, error rate) fed into AWS X‑Ray traces, enabling real‑time anomaly detection.

**Result**  
The system achieved **>99.999% availability**, reduced cross‑region latency from 120 ms to <30 ms for 90th percentile traffic, and cut failure‑related revenue loss by 4× compared to the previous single‑region setup. Auto Scaling kept cost below $12k/month while handling a 3× spike during Black Friday.

**Reflection**  
I learned that *ownership* means anticipating regional outages early; *dive deep* into latency budgets uncovered hidden DNS propagation delays. Future iterations will explore AWS App Config for feature toggles to enable blue‑green deployments without traffic splits, further minimizing risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
