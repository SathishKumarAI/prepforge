---
qid: ing_53835d20a7__aws__local
question: 'Explain: Adding read replicas could also help with'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 643
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:33-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Adding read replicas can dramatically improve query throughput, reduce latency for read‑heavy workloads, and provide a graceful failover path in case the primary database becomes unavailable.*  

---

### Behavioral – STAR  

- **Situation:** At my last role we had an Aurora PostgreSQL cluster serving a real‑time analytics dashboard. The primary instance was saturated during peak hours (200 k QPS) and latency spiked to 350 ms, hurting the customer experience.  
- **Task:** I needed to lift read capacity while keeping costs under budget.  
- **Action:** I provisioned **3 Aurora read replicas** in a different AZ, enabled *Aurora Global Database* for cross‑region failover, and rewrote the data‑access layer to route all SELECT queries to replicas via `pg_read_replica` roles. I also added a CloudWatch alarm that auto‑scales replica count based on average CPU usage (threshold 70 %).  
- **Result:** Read latency dropped from 350 ms to <80 ms, and the overall QPS handled rose to 650 k with an **8 % cost increase**—well within our SLA budget. The system now automatically shifts traffic during a primary AZ outage, ensuring **99.99 % availability** for end users.

---

### Technical / System  

| Requirement | Design Choice | AWS Service(s) | Scalability | Availability | Cost | Trade‑offs |
|-------------|---------------|----------------|-------------|--------------|------|------------|
| Horizontal read scaling | Read replicas (Aurora/PostgreSQL) | Amazon Aurora, RDS Proxy | Linear read capacity per replica | Multi‑AZ, automatic failover | Pay per instance + I/O; cheaper than sharding | Slight replication lag (~100 ms); writes still single point |
| Disaster recovery | Global Database / Cross‑region replicas | Aurora Global Database | Low latency reads worldwide | 99.99 % with zone/region redundancy | Higher data transfer & replica cost | Complexity in consistency models |
| Cost control | Auto‑scale replicas via CloudWatch alarms | Amazon CloudWatch, AWS Lambda | Scale up/down on demand | No impact on availability | Variable spend; avoid over‑provisioning | Cold start latency when scaling up |

---

### What a bar‑raiser looks for  

- **Ownership:** Took end‑to‑end responsibility for performance and cost.  
- **Dive Deep:** Quantified latency, QPS, replication lag, and cost metrics before/after.  
- **Bias for Action & Deliver Results:** Deployed changes within 48 h; achieved measurable SLA improvement.  
- **Learning from Failure:** Documented the impact of replica lag on analytics freshness and tuned `max_standby_archive_delay` accordingly.

**Leadership Principles invoked:** *Customer Obsession* (better latency), *Ownership*, *Dive Deep*, *Bias for Action*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
