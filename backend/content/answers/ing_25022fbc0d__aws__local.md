---
qid: ing_25022fbc0d__aws__local
question: 'Explain: Database Design Tips | Choosing the Best Database in a System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:04-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Ownership**, **Dive Deep**  
> *Behavioral → STAR*  

**S**ituation – I was leading a cross‑functional team to build an e‑commerce recommendation engine that needed to serve 10 M active users with sub‑second latency.  
**T**ask – Choose the right database layer for user profiles, product catalog, and interaction logs while keeping cost in check.  
**A**ction – I first mapped data access patterns: *read‑heavy* (catalog), *write‑intensive* (interaction logs), and *mixed* (user profiles). I ran a benchmark suite (YCSB) on **Amazon DynamoDB**, **RDS MySQL**, and **Aurora Serverless**.  
I designed a **polyglot persistence** architecture:  
1. **DynamoDB** for the catalog (global tables, auto‑scaling, 99.999 % availability).  
2. **Aurora PostgreSQL** for relational user profiles (ACID, complex joins).  
3. **Amazon S3 + Athena** for immutable interaction logs (cost‑effective analytics).  

I added a **Lambda layer** to enforce schema validation and automated backups. The result: read latency dropped from 250 ms to <30 ms, write throughput scaled to 1 M ops/sec without manual intervention, and total database spend fell by 35 % YoY.

**R**esult – The system handled a 200% traffic spike during Black Friday with no outages; conversion rates rose 12 %.  

> *Bar‑raiser cues:* I demonstrated end‑to‑end ownership (from benchmark to deployment), deep dive into read/write patterns, quantified performance gains, and lessons learned—e.g., early adoption of DynamoDB global tables prevented a single‑region outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
