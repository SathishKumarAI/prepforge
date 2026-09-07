---
qid: ing_e96f70e59e__aws__local
question: 'Explain: Key Considerations — Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 417
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:43-05:00'
sources: []
---

**Situation / Task**  
I led the migration of a legacy recommendation engine from on‑prem PostgreSQL to an AWS‑native solution that needed to support 10 M daily users while keeping latency <30 ms.

**Action**  
- *Customer Obsession & Ownership*: I interviewed product, ops, and devs to surface real user pain points (e.g., slow cold starts).  
- *Dive Deep & Bias for Action*: I benchmarked PostgreSQL vs. Amazon Aurora, DynamoDB, and Amazon Timestream on a synthetic workload that mimicked 1 M concurrent requests.  
- *Design*: Chose **Aurora Serverless v2** for relational metadata (user profiles) + **DynamoDB with Global Secondary Indexes** for real‑time feature vectors. Implemented a **Lambda layer** to cache hot keys in **ElastiCache‑Redis**, reducing read latency by 70 %.  
- *Scalability & Cost*: Aurora’s on‑demand capacity automatically scaled from 2 TB to 10 TB with no manual intervention, keeping monthly spend under $12K vs. the projected $18K for a fixed cluster. DynamoDB’s provisioned throughput matched peak traffic with an auto‑scaling target of 95 % utilization.

**Result**  
- Latency dropped from 120 ms to 28 ms (−77 %).  
- Revenue uplift: recommendation click‑through rate rose 3.4 %, translating to ~$1.2M incremental revenue quarterly.  
- Operational cost reduced by 33 %.  

**Reflection**  
I learned that “don’t reinvent the wheel” – selecting the right managed service saves engineering time and reduces failure risk. The bar‑raiser will hear my ownership of metrics, deep dive into trade‑offs, and data‑driven impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
