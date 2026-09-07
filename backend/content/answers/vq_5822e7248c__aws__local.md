---
qid: vq_5822e7248c__aws__local
question: How can I prevent tablespace fragmentation?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 461
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:36-05:00'
sources: []
---

**Situation & Task**  
In my last role on the DynamoDB migration team, we discovered that our Aurora‑PostgreSQL “analytics” tablespace was fragmented after 18 months of heavy write traffic. The fragmentation caused a 35 % increase in query latency for OLAP workloads and pushed storage costs up by ~12 M USD annually.

**Action (Dive Deep + Ownership)**  
1. **Root‑cause analysis** – Used `pg_stat_user_tables` & `pgstattuple` to quantify bloat per table; identified 3 tables with >70 % dead tuples.  
2. **Design a remediation plan** – Scheduled nightly `VACUUM FULL` during low‑load windows, but to avoid blocking writes we introduced *partitioned* sub‑tables (yearly partitions) and enabled *autovacuum_freeze_max_age* tuning.  
3. **Automation & monitoring** – Created an AWS Lambda function triggered by CloudWatch metrics (`pg_stat_user_tables.table_bloat_percent`) that auto‑spawns a Spot‑Instance to run `VACUUM FULL` on affected partitions. The Lambda writes the job status to DynamoDB for audit.  
4. **Cost/availability trade‑off** – Spot instances reduce cost by ~70 % but may be interrupted; we mitigate with a fallback EC2 On‑Demand instance and keep data consistency by using RDS point‑in‑time backups before each run.

**Result (Deliver Results)**  
- Reduced average query latency from 1.8 s to 0.9 s (+50 %).  
- Cut storage cost by 12 M USD per year.  
- Automated process now runs in <30 min with zero manual intervention, and we set up an SNS alert if fragmentation exceeds 40 % again.

**Learnings (Customer Obsession + Bias for Action)**  
I realized that proactive monitoring is key; instead of reacting to performance alerts, we pre‑empt fragmentation. The Lambda automation also taught me to balance cost savings with reliability—critical when serving a global data‑science team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
