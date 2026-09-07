---
qid: ing_31c0694e08__aws__local
question: 'Explain: Example: Overselling Inventory — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 400
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:25-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a redesign of the order‑processing pipeline for a fast‑moving consumer goods company that was losing ~3 % revenue every quarter because the catalog service oversold inventory during flash sales. The goal: eliminate overselling while keeping latency < 200 ms and scaling to 10k concurrent users.

**Action & Design**  
I proposed a hybrid **ACID transaction layer** using **Amazon Aurora Serverless v2 (PostgreSQL)** for real‑time stock counters, coupled with **DynamoDB Streams + Lambda** for eventual consistency on analytics tables.  

*Key steps:*  
1. **Optimistic locking** – each `UPDATE inventory SET qty = qty - 1 WHERE id=? AND qty>0` returns affected rows; if zero we abort the order.  
2. **Transactional batch** – Aurora’s `BEGIN/COMMIT` guarantees atomicity across product, customer, and payment tables.  
3. **Circuit breaker** – a CloudWatch alarm on “no‑stock” responses triggers an SQS queue that throttles excess traffic during peak windows (bias for action).  

**Result**  
After deployment, oversell incidents dropped from 7 % to <0.01 %, boosting revenue by $1.2 M/month. Latency stayed below 180 ms and the system handled 15k TPS with cost savings of ~30 % compared to a monolithic RDS solution.

**Learning & Ownership**  
I owned the post‑mortem process, iterated on retry logic, and documented failure modes for future teams—demonstrating ownership and deep dive into root causes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
