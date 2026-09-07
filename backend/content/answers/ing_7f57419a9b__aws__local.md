---
qid: ing_7f57419a9b__aws__local
question: 'Explain: Redundancy Across Layers — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:58-05:00'
sources: []
---

**Redundancy Across Layers – Ensuring High Availability**

*Situation:*  
I led the redesign of an AI‑powered recommendation engine that served 4 M daily users. Production incidents caused a 12 % drop in conversion during peak hours, hurting revenue.

*Task:*  
Architect a multi‑layer redundancy strategy that guarantees **>99.999% availability** while keeping cost under 15 % of the previous build.

*Action:*  
1. **Compute Layer:** Deployed stateless inference containers on *ECS Fargate* with an Application Load Balancer (ALB) and *Auto Scaling Groups* spread across three AZs. Added a *Circuit Breaker* in the service mesh to route traffic away from unhealthy tasks.  
2. **Model Layer:** Persisted model checkpoints in *Amazon S3* with Cross‑Region Replication to us-east-1, then served via *EFS* mounted on all worker nodes for low‑latency reads.  
3. **Data Layer:** Replaced the single RDS instance with a *Aurora Serverless v2* cluster configured for *Multi‑AZ*, leveraging Aurora’s failover and read replicas to offload reporting queries.  
4. **Observability & Auto‑Recovery:** Integrated CloudWatch Alarms, SNS notifications, and a Lambda recovery routine that auto‑provisions new tasks if the ALB target health dips below 95 %.

*Result:*  
Availability improved from **99.92%** to **>99.999%**, cutting incident response time by 70 %. Cost stayed within budget due to serverless scaling (avg. $12k/month vs $15k).  

**Leadership Principles:** *Customer Obsession* – eliminated user impact; *Ownership* – drove end‑to‑end solution; *Dive Deep* – analyzed failure logs and tuned auto‑scaling thresholds.  
Bar‑raiser notes: clear ownership, depth of design trade‑offs, quantified ROI, and lessons learned from the initial outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
