---
qid: ing_a957d4044c__aws__local
question: 'Explain: Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 360
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:21-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous company we had a recommendation engine that served 1 M users daily. The query “SELECT * FROM products WHERE category_id = X” was returning 300 ms because the table wasn’t indexed, hurting user satisfaction and driving churn.

**Action (Dive Deep + Bias for Action)**  
I profiled the workload with **AWS CloudWatch & RDS Performance Insights**, discovered that `category_id` was the sole filter. I created a **clustered index on `(category_id, product_id)`** in Amazon Aurora MySQL. To ensure high availability and cost‑efficiency I used **Aurora Serverless v2** so the cluster auto‑scales with traffic spikes.

I also added an **Amazon ElastiCache Redis** layer to cache hot category results for 5 min, reducing DB load by ~70%. The design kept write latency low (≤2 ms) while maintaining strong consistency through Aurora’s read replicas.

**Result (Deliver Results)**  
Post‑deployment query latency dropped from 300 ms to **<40 ms** (90% reduction). Page views per session increased by **12 %**, and churn fell by **3.5 %** in the first month. Cost savings were 18 % due to reduced Aurora compute time.

**Learning & Bar‑raiser focus**  
I documented assumptions, ran A/B tests, and iterated on index columns based on real metrics—showing true ownership and a data‑driven mindset that bar‑raisers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
