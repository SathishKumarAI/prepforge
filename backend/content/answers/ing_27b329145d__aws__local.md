---
qid: ing_27b329145d__aws__local
question: 'Explain: Example Workflow — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:35-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my last role I led the migration of a legacy micro‑service stack to AWS for a fintech client that required real‑time fraud detection. The system had to discover services dynamically across multiple availability zones without manual DNS updates.

*Task:* Design a scalable, highly available Service Discovery mechanism that would reduce operational overhead and enable zero‑downtime deployments.

*Action:*  
1. **AWS Cloud Map** – registered every micro‑service with health checks (ELB/Route 53).  
2. **ECS + Fargate** – containerized workloads; tasks automatically register/deregister in Cloud Map on start/stop.  
3. **API Gateway + Lambda** – a lightweight discovery API that returns the current endpoint list, caching results in DynamoDB for 5 s to reduce latency.  
4. **Auto Scaling & Spot Instances** – ensured cost‑efficiency; Cloud Map health checks removed failed instances from rotation instantly.  
5. **Monitoring (CloudWatch + X-Ray)** – traced discovery latency and failure rates.

*Result:* Service churn dropped by **73%**, deployment time shrank from 45 min to 8 min, and the system sustained **99.98 %** uptime during a 24‑hour spike of 3× traffic. Cost savings hit **$12k/month** due to Spot usage.

**Bar‑raiser cues**

- **Ownership:** I drove the entire end‑to‑end migration, from requirements to production rollout.  
- **Dive Deep:** I benchmarked discovery latency and iterated on caching strategy after observing a 200 ms spike during peak load.  
- **Quantified Impact:** 73% churn reduction, $12k/month savings.  
- **Learning from Failure:** Early prototypes using plain Route 53 failed under rapid scaling; switching to Cloud Map resolved the issue and taught me the value of managed service discovery in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
