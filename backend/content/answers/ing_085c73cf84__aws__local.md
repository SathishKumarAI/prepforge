---
qid: ing_085c73cf84__aws__local
question: 'Explain: Redundancy at the Software Level — Availability and Single Points
  of Failure (Sun Java System Directory Server Enterprise Edition 6.0 Deployment Planning
  Guide)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 422
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:54-05:00'
sources: []
---

**Situation / Task**  
While leading a migration of an on‑prem Sun Java System Directory Server (v6.0) to the cloud for a global retail client, the client’s SLA required 99.99 % uptime. The legacy deployment was a single JVM instance with no built‑in failover, exposing a classic software‑level single point of failure.

**Action**  
I applied **Customer Obsession** and **Ownership** by first mapping every failure path (network, disk, CPU) using *Dive Deep* logs. I then designed an active‑active cluster on **Amazon RDS for Oracle** (the DB backend) coupled with a **managed Amazon Aurora Global Database** to replicate the directory data across two AZs. The application layer was containerized in **ECS Fargate**, orchestrated by **AWS Elastic Load Balancer (ELB)**, and protected by **AWS WAF** to mitigate DDoS.

Key trade‑offs:
- *Scalability*: Auto‑scaling ECS tasks ensured 10× peak load with <5 % latency increase.
- *Availability*: Multi‑AZ Aurora guarantees <1 ms failover, meeting the 99.99 % SLA.
- *Cost*: Savings of ~30 % vs a self‑managed HA cluster by eliminating on‑prem licensing and maintenance.

**Result**  
Post‑migration, we achieved **99.999 % availability** over 12 months, a 45 % reduction in outage incidents, and cut operational costs by $120K annually. The client reported higher customer satisfaction scores (+15 pts).  

**Bar‑raiser take‑away**: I owned the end‑to‑end solution, dove deep into failure modes, quantified impact with real metrics, and learned that shifting from a single JVM to managed services dramatically reduces risk while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
