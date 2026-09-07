---
qid: ing_6545d305de__aws__local
question: 'Explain: How Indexes Work — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 403
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:50-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of a legacy relational store (PostgreSQL) to **Amazon Aurora Serverless v2** for an e‑commerce catalog that served 1 M page views/day. The query latency on product searches was >400 ms, hurting conversion rates.

**Task (T)**  
I had to redesign the data model so that “search by keyword + category” returned <50 ms while keeping costs under $200/month and retaining full ACID guarantees.

**Action (A)**  
1. **Dive Deep** into query patterns: 82 % of reads were *SELECT* on `product_name, category_id` with a `WHERE keyword LIKE '%…%'`.  
2. Created a **GIN index** on `tsvector(product_name)` and a composite B‑tree `(category_id, product_name)`.  
3. Deployed the changes in Aurora Serverless v2 (leveraging its auto‑scaling compute nodes).  
4. Monitored with **Amazon CloudWatch** and *Explain* plans to validate index usage.

**Result (R)**  
- Query latency dropped from 400 ms → **32 ms** (92 % reduction).  
- CPU utilization fell by ~60 %, cutting monthly costs from $350 → **$170**.  
- Conversion rate on search pages rose from 3.8 % to 5.1 % (+34 %).  

I documented the failure modes of missing indexes and created a *index‑health* dashboard for continuous monitoring—an example of **Customer Obsession** (improve UX) and **Ownership** (own the end‑to‑end pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
