---
qid: ing_8596e7c2dd__aws__local
question: 'Explain: Relational databases tend to have vertical scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 448
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:49-05:00'
sources: []
---

**Situation (S)** – While designing the analytics layer for a fintech platform, I discovered that our PostgreSQL cluster on Amazon RDS was hitting 80 % CPU and 90 % I/O throughput during peak trading hours.

**Task (T)** – I needed to scale the database to support a projected 4× increase in concurrent users without compromising SLA or incurring prohibitive costs.

**Action (A)**  
1. **Own the problem**: I set up performance monitoring with CloudWatch, identified hot tables, and drafted a migration plan.  
2. **Dive deep** into RDS sizing: compared `db.m5.large` vs. `db.r5.xlarge`.  
3. **Bias for Action**: spun up an `r5.xlarge` instance (4 GiB RAM, 16 vCPU) and enabled Multi-AZ for high availability.  
4. Leveraged **Aurora Serverless v2** as a fallback to auto‑scale during off‑peak bursts.  
5. Implemented **read replicas** in us-east-1b for reporting queries, reducing load on the primary.

**Result (R)** – Post‑migration, CPU dropped to 35 %, IOPS usage fell by 60 %, and latency for critical ops queries improved from 250 ms to <40 ms. The cost increased only 12 % due to savings from reduced read replica traffic, staying within the budget.

**Leadership Principles Highlighted:**  
- **Ownership** – Took full responsibility for performance and cost.  
- **Dive Deep & Deliver Results** – Analyzed metrics, chose the right instance family, and achieved measurable improvement.  

Bar‑raisers look for clear ownership, data‑driven impact, depth of analysis, and a learning loop (e.g., “we tried X, saw Y, pivoted to Z”). This answer demonstrates all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
