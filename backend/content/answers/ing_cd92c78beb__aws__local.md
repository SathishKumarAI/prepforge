---
qid: ing_cd92c78beb__aws__local
question: 'Explain: Types of Failover Configurations: Active-Active vs Active-Passive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:56-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In a global e‑commerce platform we had to guarantee 99.999% uptime for the recommendation engine while keeping latency < 50 ms under peak traffic (30 k req/s).  
*Task*: Design a failover strategy that balances cost, performance, and reliability.

**Design Choices**

| Configuration | AWS Services | Availability | Cost | Trade‑offs |
|---------------|--------------|--------------|------|------------|
| **Active‑Passive** | EC2 Auto Scaling + Elastic Load Balancer (ELB) + Route 53 health checks | 99.9% (single AZ) → 99.999% with multi‑AZ | Lower – only one active fleet runs at a time | Simpler, lower cost, but single point of failure until failover triggers |
| **Active‑Active** | EC2 Auto Scaling across 3 AZs + Global Accelerator + DynamoDB Streams for state sync | 99.9999% (simultaneous traffic) | Higher – all instances run concurrently | Complex data consistency; higher spend, but zero downtime and lower latency |

*Result*: We piloted the **Active‑Passive** model first, achieving 99.97 % uptime at $3k/month. After a production outage caused by an AZ failure, we switched to **Active‑Active**: uptime rose to 99.9998 %, latency dropped 12 ms, and customer churn fell 1.2 %. The cost increased by 45 % but was justified by the revenue uplift.

**Key Learnings**

- *Dive Deep*: Continuous monitoring of Route 53 health checks revealed a sub‑second lag in failover that we mitigated with CloudWatch Alarms.  
- *Bias for Action*: Rapid switch to Active‑Active after incident showed ownership and commitment to customer experience.  

This approach demonstrates how AWS services can be orchestrated to meet stringent SLAs while balancing cost and complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
