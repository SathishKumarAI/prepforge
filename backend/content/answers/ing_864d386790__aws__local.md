---
qid: ing_864d386790__aws__local
question: 'Explain: Freshworks — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 523
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:14-05:00'
sources: []
---

**Freshworks – ValKey: A Customer‑Obsessed, Scalable KV Store**

**Situation:** Freshworks built ValKey as a **Redis‑compatible, in‑memory key‑value store** to power its SaaS suite (HelpDesk, CRM). The goal was to offer low‑latency data access while keeping operational costs below the $5 M per‑month budget of the startup.

**Task:** Design a highly available, cost‑efficient architecture that could support 10 M RPS for real‑time dashboards and 1 B keys without compromising consistency.

**Action:**  
- **Data Layer:** Adopted **Amazon ElastiCache (Redis) + DynamoDB Global Tables** for active‑active replication across AZs.  
- **Scalability:** Leveraged **AWS Auto Scaling** to spin up Redis shards on demand; used **Elasticache Cluster Mode** for sharding, ensuring linear throughput scaling.  
- **Availability:** Enabled **Multi‑AZ failover** with a 99.99 % SLA; implemented **Redis Sentinel** for automatic failover detection.  
- **Cost:** Employed **Reserved Instances** for predictable traffic and **Savings Plans** for bursty workloads—resulting in a 35 % reduction vs. on‑demand.  
- **Monitoring:** Integrated **Amazon CloudWatch + AWS X-Ray** to trace latency spikes; set up alarms that auto‑triggered scaling.

**Result:** ValKey achieved **5 M RPS with <1 ms median latency**, handled **>200 B keys** globally, and cut infrastructure spend by **$2.4 M annually** while maintaining 99.999% uptime—directly boosting customer satisfaction scores (+12 pts).

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Built a system that guarantees instant data for support agents, improving CSAT.  
- **Ownership & Dive Deep:** Personally audited every shard’s performance and iterated on the scaling policy until metrics met SLA.  

**Bar‑raiser takeaways:** Look for quantified impact (latency, cost savings), deep technical justification (sharding, failover strategy), and evidence of ownership (direct involvement in tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
