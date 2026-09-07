---
qid: ing_ca9c41408f__aws__local
question: 'Explain: Disadvantages — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 400
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:22-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our e‑commerce catalog from an on‑prem MySQL cluster to Amazon Aurora Serverless. The legacy system used heavy data replication (read replicas + manual sync scripts) to keep the product search index fresh, causing 30 % CPU spikes and 15 % latency during flash sales.

**Action**  
I proposed a *single source of truth* model:  
1. Store master data in Aurora PostgreSQL with **logical replication** to a read‑only replica that feeds our Elasticsearch domain (via AWS DMS).  
2. Use **EventBridge** to publish `ProductUpdated` events; a Lambda function writes the delta to a Kinesis Data Stream, which triggers an *incremental* reindex job in Amazon OpenSearch Service.  
3. Implement **Cache‑Aside** with ElastiCache Redis for hot product attributes, reducing DB load by 45 %.  

This design eliminated stale reads, cut replication lag from 10 min to <1 s, and lowered cost by 22 % (no manual sync overhead).

**Result**  
During the next flash sale we saw a **35 % reduction in query latency** and **30 % lower RDS CPU utilization**, enabling us to serve 4× more concurrent users without provisioning extra instances.  

**Reflection**  
I took full ownership, dug deep into replication internals, quantified performance gains, and learned that *simplifying data flow* often yields the biggest cost‑benefit.  
---  

> **Leadership Principles:** Ownership & Dive Deep  
> **Bar‑raiser cues:** Quantified impact (CPU %, latency), depth of technical reasoning, clear ownership of end‑to‑end solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
