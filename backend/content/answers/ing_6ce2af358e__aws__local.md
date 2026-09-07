---
qid: ing_6ce2af358e__aws__local
question: 'Explain: Database Indexing — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 454
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:01-05:00'
sources: []
---

**Situation / Task**  
I led a migration of our recommendation engine from an on‑prem SQL cluster to Aurora Serverless. The team hit a wall: query latency spiked from 20 ms to 3 s after adding new feature columns, and we risked breaching the 99.9% SLA for real‑time personalization.

**Action**  
I applied **30 indexing concepts** (covering composite keys, partial indexes, bitmap vs B‑tree, index‑only scans, GIN/GING, etc.) to re‑engineer the schema:

1. *Customer Obsession* – I logged every latency spike in CloudWatch, correlated with user session data, and defined a “critical path” metric (personalization latency < 50 ms for 95% of users).  
2. *Dive Deep & Ownership* – Conducted a root‑cause analysis on the query planner, discovered that many lookups were unindexed due to column order mismatches. I added composite GIN indexes on `user_id + item_category` and partial B‑tree indexes on high‑cardinality `tag`.  
3. *Bias for Action & Deliver Results* – Rolled changes in a blue/green deployment, monitored with Aurora’s performance insights, and saw latency drop to 22 ms (−93%) while throughput stayed at 10k RPS. Cost increased by only 7% because the new indexes reduced read replicas needed.

**Result**  
The recommendation engine now delivers sub‑50 ms responses for 95% of users, improving NPS by 12 points in the next release cycle. I documented the “30 indexing playbook” and trained three junior engineers—boosting team capacity and reducing future query‑optimization cycles by 40%.

> **Bar‑raiser takeaway:** ownership (I owned the SLA), depth (dive into planner output), quantified impact (93% latency reduction, cost +7%), and learning from failure (failed first attempt led to deeper index knowledge).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
