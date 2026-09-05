---
qid: ing_8596e7c2dd__star__local
question: 'Explain: Relational databases tend to have vertical scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 413
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:12-05:00'
sources: []
---

**Situation** – In my last role I was leading a migration of our analytics platform from a legacy on‑premise data warehouse to a cloud‑based solution. The existing relational database (PostgreSQL) had been in production for 8 years and we were hitting the 10 TB limit on our current instance, with query latency creeping above 3 seconds during peak reporting periods.

**Task** – My goal was to keep the same data model and SQL interface while boosting capacity and performance without a full rewrite into a NoSQL store. I had to demonstrate that vertical scaling (adding more CPU, RAM, and faster disks) could meet our SLA of sub‑second report generation for 99 % of queries.

**Action** – I first performed a detailed workload analysis using pg_stat_statements to identify the most expensive joins and table scans. Then I re‑engineered indexes, added partitioning on the date column, and switched to SSD storage. Next, I upgraded the instance type from m5.large (2 vCPU, 8 GiB) to m5.4xlarge (16 vCPU, 64 GiB), which also allowed me to enable PostgreSQL’s parallel query feature. I used pgbouncer for connection pooling and tuned work_mem and maintenance_work_mem to match the new memory profile.

**Result** – After deployment, peak query latency dropped from 3.2 seconds to 0.7 seconds, and we increased our data capacity from 10 TB to 25 TB on the same relational engine. The migration cost was 35 % less than a projected NoSQL redesign, proving that vertical scaling can be a practical win when coupled with careful schema tuning and hardware optimization. I learned that understanding the specific workload patterns is key to making vertical scaling worthwhile.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
