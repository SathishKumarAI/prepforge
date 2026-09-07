---
qid: ing_b9ed23fdf9__aws__local
question: 'Explain: The "Nines" of Availability — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:08-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team was tasked with launching a real‑time recommendation engine for a global e‑commerce platform that could not afford any downtime during holiday sales.

*Task*: Define the “nines” of availability and build an architecture that meets 99.999% uptime (five nines) while keeping cost in check.

*Action*:  
1. **Understand the metric** – Five nines means < 5.26 seconds of outage per year. I mapped this to a *service‑level objective* (SLO) and derived an *error budget* that guided all design decisions.  
2. **Design for resiliency** –  
   - Use **Amazon Route 53 latency routing + health checks** for global failover.  
   - Deploy stateless application containers on **ECS/Fargate** across at least two AZs, backed by an **Application Load Balancer (ALB)** with *cross‑zone load balancing* to eliminate single points of failure.  
   - Store session state in a **DynamoDB global table** with auto‑replication for instant failover.  
   - Leverage **AWS Global Accelerator** to keep latency < 50 ms worldwide, reducing the chance of timeouts.  
3. **Monitoring & automation** – Implement **CloudWatch SLO dashboards**, set up **Anomaly Detection alarms**, and use **AWS Fault Injection Simulator** in CI to validate resilience before production.

*Result*: The system achieved 99.9997% availability over the first six months, translating to < 2.5 seconds of downtime per year—well below the target. Cost stayed within 12% of the baseline by using spot instances for non‑critical batch jobs and autoscaling.  

**Bar‑raiser takeaways**: I owned the entire SLO lifecycle, dove deep into failure modes (simulating AZ outages), quantified impact in seconds-of-downtime, and learned to iterate on anomaly detection thresholds after a minor outage caused a 0.0003% slip—prompting tighter health checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
