---
qid: ing_85a64a7536__aws__local
question: 'Explain: Data Replication — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 521
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led a migration of an on‑prem Hadoop data lake to Amazon EMR and S3 to improve data resilience for a real‑time analytics platform that served ~10 M daily users. The goal: reduce data loss risk from single‑point failures while keeping costs < $200k/yr.

**Situation & Task**  
The legacy HDFS cluster had 4 nodes, each storing 50 TB of raw logs. A node failure meant a 25 % data loss window—unacceptable for our SLA of 99.9% availability. I owned the redesign and scoped a replication strategy that balanced durability, latency, and cost.

**Action**  
1. **Replication factor**: Adopted HDFS‑like 3‑copy policy on EMR with S3’s cross‑region replication (CRR) to a secondary region (us-east-2).  
2. **Storage tiering**: Hot data in S3 Standard, cold archives in S3 Glacier Deep Archive via lifecycle policies.  
3. **Monitoring & automation**: Implemented CloudWatch metrics and Lambda to auto‑restart failed EMR steps; used Athena for quick ad‑hoc queries instead of MapReduce jobs.

**Result**  
- Availability rose from 97.5 % to 99.95 % within two weeks.  
- Data loss risk dropped by **75 %** (from ~0.25 TB/day to < 0.06 TB).  
- Annual cost decreased by **$45k** thanks to tiered storage and reduced EMR idle time.

**Key Learnings**  
*Ownership*: I championed the migration, coordinating with security, ops, and finance.  
*Dive Deep*: Analyzed node failure logs, S3 consistency models, and cost per GB across tiers.  
*Bias for Action*: Deployed CRR within 48 hrs; iterated based on real‑world failure simulations.

**Bar‑raiser cues I’d look for**  
- Clear ownership narrative.  
- Quantified impact (SLA uplift, cost savings).  
- Deep technical justification (replication factor, tiering logic).  
- Reflection on failures (e.g., initial CRR lag) and corrective actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
