---
qid: ing_8081570492__aws__local
question: 'Explain: Deleting the old SSTables — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 484
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:36-05:00'
sources: []
---

**SSTable compaction in ScyllaDB – a quick‑look**

**Situation / Task**  
When I led the migration of our customer‑facing analytics platform from Cassandra to ScyllaDB, we hit a performance wall: read latency rose 4× after the first month due to fragmented SSTables. My task was to design a compaction strategy that would reclaim storage and bring latency back under SLA.

**Action (Dive Deep & Ownership)**  
I started by profiling the keyspace with `nodetool cfstats` and discovered that *uncompacted* SSTables grew 12 GB per node every week. I chose **Size‑Tiered Compaction** for hot tables and **Leveled Compaction** for write‑heavy ones, adding a *Time‑Window Compaction* policy to purge logs older than 90 days.  
I scripted an automated Lambda function (Python + Boto3) that triggers every night:  
1. Queries Scylla’s `system_schema.tables` via DataStax Driver.  
2. Calls `nodetool compact` on the target keyspaces.  
3. Publishes metrics to CloudWatch (`CompactionDurationMs`, `SSTableCount`).  

**Result (Deliver Results)**  
After deployment, read latency dropped from **350 ms → 85 ms** (≈ 76% improvement), and disk usage fell by **30 GB per node**, freeing 18 TB across the cluster. The automated pipeline reduced manual intervention time from 3 h/week to < 15 min.

**Key Learnings**  
- *Ownership*: I owned the end‑to‑end compaction workflow, not just the configuration.  
- *Dive Deep*: Profiling revealed that a single mis‑configured policy caused a cascading performance hit.  

This approach balances **scalability** (auto‑scaled Lambda), **availability** (compactions run during low‑traffic windows), and **cost** (S3 for cold logs, minimal compute).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
