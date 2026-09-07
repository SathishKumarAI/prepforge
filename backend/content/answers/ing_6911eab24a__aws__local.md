---
qid: ing_6911eab24a__aws__local
question: 'Explain: Supported services — Singleleaderreplication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 552
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:55-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to migrate a legacy recommendation engine that relied on a single MySQL master to an Amazon Aurora cluster so we could handle 10 × the traffic and eliminate downtime during read‑replica failover.

**Task (T)**  
Design a “single‑leader replication” pattern for Aurora PostgreSQL, ensuring high availability, minimal latency, and cost efficiency while preserving ACID guarantees.

**Action (A)**  

| Step | What I did | AWS services used |
|------|------------|-------------------|
| 1. Identify read/write split | Decided the application would write only to the primary instance; all reads go to a reader cluster. | Aurora PostgreSQL |
| 2. Enable **Aurora Global Database** with a single‑leader region and secondary standby in a different AZ for rapid failover. | Aurora Global DB, Multi-AZ deployments |
| 3. Configure **Read Replica** auto‑scaling via Amazon RDS Proxy to pool connections from micro‑services. | RDS Proxy, Auto Scaling Groups |
| 4. Implement **Failover Automation** using CloudWatch alarms on `AuroraReplicaLag` and SNS → Lambda that triggers Aurora failover if lag > 100 ms. | CloudWatch, SNS, Lambda |
| 5. Add **Database Activity Streams** for audit and rollback support, capturing every write for a 30‑day retention window. | Amazon Kinesis Data Streams |

**Result (R)**  

- **Availability**: 99.999% uptime during the migration; failover latency < 2 s, down from 10 s with the old system.  
- **Performance**: Read throughput increased by 12× (from 200 RPS to 2400 RPS) thanks to read replicas and connection pooling.  
- **Cost**: Total DB spend fell by ~25% due to reduced instance size (primary 4‑node → 2‑node) and auto‑scaling of readers.  

**Reflection**  

*Ownership*: I owned the end‑to‑end migration, coordinating with ops, security, and dev teams.  
*Dive Deep*: I profiled query plans pre‑ and post‑migration to identify bottlenecks (e.g., index fragmentation).  
*Learning from Failure*: The initial failover test exposed a lag issue; by adding CloudWatch thresholds we prevented data loss in production.

---

> **Bar‑raiser cues**: Clear ownership, measurable impact, deep technical dive, proactive failure mitigation, and cost–benefit trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
