---
qid: ing_b8261a0483__aws__local
question: 'What is Service Discovery? — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 438
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:38-05:00'
sources: []
---

**Answer – “What is Service Discovery?”**

*Situation:*  
While leading a micro‑services team at my last role, we migrated from monolith to ECS/EKS and lost the ability for services to locate each other reliably. Our incident rate jumped 35 % in production.

*Task:*  
I owned the redesign of our service discovery layer so that every container could find peers without hard‑coded endpoints, ensuring zero downtime during rollouts.

*Action:*  
1. **Architecture** – Deployed a *Consul* cluster behind an Application Load Balancer (ALB) for high availability and used its DNS interface as the canonical discovery mechanism.  
2. **AWS Services** – Integrated with **ECS Service Discovery** (Cloud Map) to register tasks automatically; leveraged **Route 53 Private Hosted Zones** for internal DNS resolution.  
3. **Scalability & Cost** – Consul runs on a small Auto Scaling group (min = 1, max = 5) and costs <$20/month, while Cloud Map’s API calls are free up to 200K per month.  
4. **Observability** – Instrumented health checks with CloudWatch Alarms; logged registration events to Kinesis for audit.

*Result:*  
Service resolution latency dropped from 120 ms to <10 ms, and incidents fell by 42 % within two weeks of rollout. The team now deploys 3× faster with zero manual endpoint updates.

**Leadership Principles Anchored:**  
- *Ownership* – Took full responsibility for the end‑to‑end solution.  
- *Dive Deep* – Analyzed logs to pinpoint DNS jitter, leading to the choice of Consul over pure Cloud Map.  

**Bar‑raiser cues I heard:** clear ownership, data‑driven impact (35 % incident drop), deep technical reasoning, and a lesson learned—always keep discovery loosely coupled so that future teams can iterate without breaking deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
