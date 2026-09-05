---
qid: ing_e1daa9c95e__star__local
question: 'Explain: Multi-Master Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 362
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:38-05:00'
sources: []
---

**Situation** – In my last role, the analytics team was scaling a real‑time recommendation engine that served 2 million users daily. Our single‑master PostgreSQL cluster started throttling during peak hours; read latency spiked to 350 ms and we hit a 5% SLA breach.

**Task** – I had to redesign the data layer so that reads could be distributed across replicas while still allowing writes from multiple geographic regions without losing consistency or incurring significant downtime.

**Action** – I introduced PostgreSQL logical replication with a multi‑master pattern using *pglogical*. First, I set up two master nodes (US‑East and EU‑West) each acting as both publisher and subscriber to the other. We added conflict resolution rules: write‑skew conflicts were resolved by a “last writer wins” policy based on a timestamp column. To keep the schema in sync, I scripted automated schema migrations via *pg\_diff* and wrapped them in a CI/CD pipeline that ran against both masters before deployment. For monitoring, I deployed *pgwatch2* to track replication lag; any lag above 200 ms triggered an auto‑scaling event for additional read replicas.

**Result** – Read latency dropped from 350 ms to under 60 ms during peak periods, and the SLA breach rate fell below 0.1%. The system now supports concurrent writes from both regions with a conflict resolution success rate of 99.8%, and we reduced operational downtime during maintenance to zero minutes. I learned that careful conflict policy design and automated schema drift detection are key to reliable multi‑master replication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
