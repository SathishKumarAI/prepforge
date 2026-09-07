---
qid: ing_5f34ff8187__aws__local
question: 'Explain: Load Balancing — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 471
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:08-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In a recent e‑commerce launch I was tasked with building the ML inference layer that powers real‑time recommendation. The traffic spiked 4× during Black Friday and any downtime would directly hurt revenue.

*Task*: Design a fault‑tolerant load‑balancing architecture that guarantees <1 % latency SLA while keeping costs under $15k/month.

*Action*:  
1. **Front‑end** – I deployed an *Application Load Balancer (ALB)* with path‑based routing to separate “cold” vs “warm” model endpoints, ensuring new models don’t impact live traffic.  
2. **Compute** – Each target group hosts *AWS Lambda@Edge* functions that invoke *Amazon SageMaker Endpoints* via the *InvokeEndpoint API*. I configured *Lambda provisioned concurrency* (3× peak traffic) and enabled *dead‑letter queues* for retries.  
3. **Scaling & Health Checks** – ALB’s *target health checks* run a lightweight “ping” Lambda that validates endpoint health; failed targets are automatically deregistered. Auto Scaling of SageMaker endpoints is driven by CloudWatch metrics (CPUUtilization > 70 % → scale‑up).  
4. **Observability** – I added *AWS X-Ray* tracing across ALB, Lambda, and SageMaker to surface latency bottlenecks. Metrics are pushed to a dedicated *Grafana* dashboard for real‑time monitoring.

*Result*: The system handled a 6× traffic surge during peak hours with <0.8 % error rate and maintained 99.9 % availability. Monthly cost stayed at $13k, 15 % below the budget.  

**What a bar‑raiser hears**  
- Clear ownership of end‑to‑end flow (ALB → Lambda → SageMaker).  
- Deep dive into latency paths and retry logic.  
- Quantified impact on revenue and cost.  
- Lessons: early adoption of ALB health checks prevented cascading failures, and the use of provisioned concurrency eliminated cold start penalties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
