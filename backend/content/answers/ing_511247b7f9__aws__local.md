---
qid: ing_511247b7f9__aws__local
question: 'Explain: Costs of Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 485
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I led the redesign of a high‑traffic e‑commerce catalog service that served > 1M requests/second. The existing single global secondary index on *category* and *price* was bloating DynamoDB storage by 250 % and causing write latency spikes (>200 ms). I owned the full cost‑impact analysis and had to deliver a scalable, cost‑efficient solution within 6 weeks.

**Action (Dive Deep + Bias for Action)**  
1. **Cost Audit** – Used CloudWatch metrics & DynamoDB *Provisioned Capacity* reports; calculated $4.2M/yr spent on unused index capacity.  
2. **Design Choice** – Switched to **Amazon Aurora Serverless v2** with a materialized view table (PostgreSQL) that stores pre‑joined product–category data, indexed only on the frequently queried *price_range* and *availability*.  
3. **AWS Services** – Aurora Serverless for autoscaling, **DynamoDB Streams + Lambda** to sync updates, **Amazon RDS Proxy** for connection pooling.  
4. **Scalability & Availability** – Multi‑AZ deployment; Aurora auto‑scales compute from 2 vCPU to 128 vCPU in <5 s. The view table’s indexes are tiny (≈ 15 % of original size).  

**Result (Deliver Results)**  
- Reduced storage cost by **68 %** ($2.8M/yr saved).  
- Write latency dropped from 200 ms to **35 ms**; read throughput increased 3× with consistent query performance.  
- Achieved 99.999 % availability during a production migration, meeting SLA without additional CAPEX.

**Bar‑raiser Takeaways**  
- Demonstrated *ownership* of end‑to‑end cost & performance.  
- Applied *dive deep* analytics to quantify impact.  
- Learned that hybrid storage (Aurora + DynamoDB Streams) can deliver both scalability and cost efficiency, but requires careful monitoring of stream lag and Lambda error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
