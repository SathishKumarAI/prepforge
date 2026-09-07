---
qid: ing_8bd697d2dd__aws__local
question: 'Explain: Database Replication & Backups — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 488
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our photo‑sharing platform’s data layer to support 15 M daily active users while guaranteeing *zero data loss* during peak traffic spikes. The challenge was to implement **database replication and automated backups** that could scale, remain highly available, and stay cost‑efficient.

**Action (Design & Implementation)**  
1. **Replication** – I chose Amazon Aurora Serverless v2 for the primary DB, enabling *Aurora Global Database* across two regions (US‑East 1 / EU‑West 2). This gives us < 200 ms cross‑region failover and reads from any region with < 10 % latency increase.  
2. **Backups** – Daily snapshots are automatically taken by Aurora (stored in S3) and retained for 35 days, while point‑in‑time recovery (PITR) is enabled to roll back within the last 7 days. For an extra safety layer I implemented a *Lambda* that copies snapshots to a separate S3 bucket with lifecycle rules (30‑day archive).  
3. **Monitoring & Alerting** – CloudWatch alarms trigger on replication lag > 5 s or backup failures; automated SNS notifications kick off a Lambda that initiates a failover test.

**Result**  
- 99.999% availability during the migration, with an average recovery time objective (RTO) of < 30 s and recovery point objective (RPO) of < 1 s.  
- Backup costs were reduced by **22 %** compared to our legacy on‑prem solution while improving data durability from 99.9 % to 99.9999 %.  

**Reflection & Learning**  
I *owned* the end‑to‑end process, diving deep into Aurora’s internals to tune replication lag. The bar‑raiser will notice my focus on **Ownership**, **Dive Deep**, and a data‑driven outcome that directly impacts user experience.

> *Leadership Principles*: Ownership, Dive Deep, Customer Obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
