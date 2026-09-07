---
qid: ing_eb2e3a57a5__aws__local
question: 'Explain: The Hadoop Database — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:57-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy relational store to a real‑time analytics platform for a mobile game with > 1 M daily active users (DAU). The goal was to reduce query latency from ~ 5 s to < 200 ms while keeping cost under $50k/month.  

**Action**  
I chose **Apache HBase** on EMR for its column‑family model and strong consistency, coupled with **S3** for cold‑log storage and **Redshift Spectrum** for batch reporting.  
*Design*:  
- **Row key = userID#timestamp** to enable point lookups and time‑range scans.  
- Secondary indexes via a *coprocessor* that writes to a materialized view table.  
- Auto‑scaling HBase cluster (3–9 nodes) triggered by CPU/latency metrics from CloudWatch.  
- Backup to S3 with incremental snapshots every 6 h; recovery time objective < 15 min.  

**Result**  
Query latency dropped to **180 ms** (90% improvement). Monthly ops cost fell to **$38k**, a 24% reduction vs the previous Spark‑on‑YARN pipeline. The system handled peak traffic of 50,000 concurrent reads without throttling.  

**Learning**  
A failed attempt with HDFS + Hive showed that schema flexibility was more valuable than raw throughput; I pivoted to HBase, learning how coprocessors can act as lightweight secondary indexes.

> **Leadership Principles**  
- *Customer Obsession*: Delivering instant insights for game designers directly impacted user retention.  
- *Ownership & Dive Deep*: I architected the full data flow, tuned compaction policies, and built automated recovery scripts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
