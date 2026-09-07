---
qid: ing_d52d3e734e__aws__local
question: 'Explain: High Availability Architectures — How to Design for High Availability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 455
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:48-05:00'
sources: []
---

**High‑Availability Architecture – A Real‑World Example**

*Situation:* In my last role I was tasked to rebuild an e‑commerce checkout service that had a 99.9 % SLA but experienced frequent outages during peak sales events.

*Task:* Design a fully redundant, multi‑AZ architecture that guarantees zero single points of failure and can scale to 10k concurrent checkouts per second without manual intervention.

*Action:*  
1. **Stateless API Layer** – Deployed behind an Application Load Balancer (ALB) with *cross‑zone load balancing*. Each instance runs in a separate AZ, using Amazon ECS Fargate for automatic scaling.  
2. **Database Resilience** – Migrated from RDS MySQL to Aurora Serverless v2 with *Aurora Global Database* across two regions. The read replicas serve 80 % of traffic; failover is automatic within seconds.  
3. **Event‑Driven Order Queue** – Switched to Amazon SQS FIFO for order messages, coupled with Lambda consumers that are provisioned via *Reserved Concurrency* and a *Lambda Provisioned Concurrency* burst capacity.  
4. **Observability & Auto‑Recovery** – CloudWatch Alarms trigger SNS notifications; an EventBridge rule invokes a Step Functions workflow that performs health checks and restarts unhealthy services.

*Result:* Post‑deployment, the checkout service achieved 99.999 % availability during a Black Friday sale (10k TPS), reduced mean time to recovery from 12 min to <30 sec, and cut operational costs by 18 % through serverless scaling.

**Leadership Principles:**  
- **Ownership & Deliver Results** – Took full responsibility for end‑to‑end uptime and quantified the impact.  
- **Dive Deep** – Analyzed failure logs, identified bottlenecks, and iterated on design until metrics met SLA.  

*Bar‑raiser takeaway:* Showed deep technical knowledge, ownership of outcomes, and a data‑driven approach to learning from past outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
