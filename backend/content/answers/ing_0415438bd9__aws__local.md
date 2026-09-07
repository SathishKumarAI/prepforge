---
qid: ing_0415438bd9__aws__local
question: 'Explain: Load Balancing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 453
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:55-05:00'
sources: []
---

**Load‑balancing for a real‑time ML inference service**

*Situation:*  
When I led the rollout of an on‑demand recommendation engine at **Acme Corp**, we saw 4× traffic spikes during product launches. Latency rose from 20 ms to >200 ms, and our SLA slipped below 99.5 %.  

*Task:*  
Design a scalable, highly available load‑balancing layer that keeps inference latency <30 ms while handling 10k QPS.

*Action:*  
1. **AWS Global Accelerator** – routes user traffic to the nearest edge location, reducing RTT and providing DNS‑level failover.  
2. **Elastic Load Balancer (ALB)** in each region with target groups pointing to **ECS Fargate** containers running TensorFlow Serving. ALB’s *sticky sessions* are disabled; instead we use a lightweight **Redis** cache for model metadata, ensuring statelessness.  
3. **Auto Scaling** on ECS, driven by CloudWatch metrics (CPU > 70 % → +2 tasks).  
4. **Canary deployments** via CodeDeploy to roll out new models without downtime.  

*Result:*  
- Latency dropped from 200 ms to **18 ms average** during peak events.  
- SLA improved to **99.97 %** uptime, saving $120k annually in penalty fees.  
- Cost stayed within budget by scaling only on demand (≈30 % lower than over‑provisioned baseline).  

*Learning:*  
I realized that *Bias for Action* can be risky if not coupled with *Dive Deep*: we logged every scaling event and performed post‑mortems, uncovering a hidden memory leak that would have cost us 15 % more compute.

**Leadership Principles highlighted:**  
- **Customer Obsession** – delivering low latency for end users.  
- **Ownership** – taking full responsibility from design to monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
