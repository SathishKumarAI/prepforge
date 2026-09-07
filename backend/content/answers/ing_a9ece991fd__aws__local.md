---
qid: ing_a9ece991fd__aws__local
question: 'Explain: Composite Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:31-05:00'
sources: []
---

**Situation & Task (Ownership)**  
At my previous company we had a recommendation engine that served ~3 M users/day. The query “top‑N products for user *u*” hit a single table with millions of rows and was returning in 2 s—far above the SLA of 800 ms. I owned the performance issue, dug into the query plans, and realized we were scanning almost every row because we lacked a composite index on (`user_id`, `score DESC`).  

**Action (Dive Deep & Bias for Action)**  
I designed a **composite B‑Tree index** `(user_id ASC, score DESC)` in Amazon Aurora MySQL. I added the index via a zero‑downtime blue/green deployment, using the **AWS Database Migration Service** to copy data and switch traffic with minimal latency. To avoid write amplification, I scheduled the index rebuild during off‑peak hours (10 % of daily traffic).  

I also introduced a **read replica pool** on Amazon RDS Aurora Serverless v2 for read‑heavy recommendation queries, auto‑scaling between 1–8 replicas based on CPU utilization.  

**Result (Deliver Results)**  
- Query latency dropped from 2 s to **350 ms** (a 83% reduction).  
- Read replica pool handled a 4× spike in traffic during a product launch without additional cost—thanks to Aurora Serverless’s pay‑per‑second billing.  
- Operational cost grew by only **$30/month**, far below the projected $200/month for a dedicated read cluster.  

**Learning & Bar‑raiser focus**  
I documented the index rebuild process, shared lessons on balancing write performance vs. read latency, and built automated monitoring dashboards (CloudWatch + Grafana). The bar‑raiser looked for evidence that I owned the problem, dove deep into metrics, quantified impact, and turned failure points into learning artifacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
