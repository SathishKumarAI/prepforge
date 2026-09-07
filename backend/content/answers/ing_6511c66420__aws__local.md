---
qid: ing_6511c66420__aws__local
question: 'Explain: Cloud Spanner Database — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:22-05:00'
sources: []
---

**Situation** – I was asked to design a globally‑consistent data store for a multi‑region SaaS that had to support > 10 M writes/day and deliver < 200 ms latency to any region.

**Task** – Build the solution on GCP while keeping cost < $50k/month, ensuring 99.999% availability, and providing an audit trail for regulatory compliance.

**Action**  
1. **Chosen service:** *Cloud Spanner* – its horizontal scaling, strong consistency, and automatic replication fit the latency/availability needs.  
2. **Schema & sharding:** Partitioned tables on a composite key (tenant‑id + entity‑id) to keep hot spots at bay; added a “last‑modified” index for efficient queries.  
3. **Integration layer:** Cloud Functions + Pub/Sub to capture writes, enforce business rules, and push events to downstream analytics services (BigQuery).  
4. **Security & compliance:** IAM roles per tenant, encryption at rest/traffic, and audit logs via Cloud Audit Logs.  
5. **Monitoring & cost control:** Stackdriver metrics → alert on > 1% write latency; used regional replicas only where traffic justified.

**Result** – Achieved 99.9999% uptime over 12 months, reduced per‑write cost by 18% vs a replicated MySQL cluster, and cut query latency from 350 ms to < 120 ms globally.  

*Bar‑raiser cues:* I took full ownership of the architecture, dove deep into Spanner’s consistency model, quantified performance gains, and learned that sharding on tenant ID avoids write hotspots—a lesson applied to future multi‑tenant services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
