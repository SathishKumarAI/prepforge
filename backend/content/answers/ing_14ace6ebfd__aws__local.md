---
qid: ing_14ace6ebfd__aws__local
question: 'Explain: Cost Analysis — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 451
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:48-05:00'
sources: []
---

**Situation** – At my previous company we launched an internal AI‑powered knowledge base that pulled data from hundreds of legacy documents, but the cost per query kept rising as we added more models and storage.  
**Task** – I was tasked to cut monthly spend by 30 % while keeping latency under 200 ms for 95 % of users.

**Action** –  
1. **Dive Deep into Usage** – Instrumented CloudWatch metrics for SageMaker endpoints, S3 read/write, and Athena queries; discovered that 18 % of traffic was “cold” (≤10 requests/day) yet incurred the same hourly EBS cost as hot traffic.  
2. **Re‑architect with Spot & Savings Plans** – Migrated infrequent inference to **SageMaker on Spot** (≈ 70 % cheaper) and locked a 1‑year **Savings Plan** for the remaining 80 % of steady traffic.  
3. **Implement Auto‑Scaling & Cache Layer** – Added **Amazon API Gateway + Lambda@Edge** with an in‑memory **ElastiCache Redis** tier to cache the top 5 k documents per day, reducing S3 reads by 60 %.  
4. **Cost‑Optimized Storage** – Moved infrequently accessed embeddings to **S3 Glacier Deep Archive**, cutting storage cost from $0.023/GB/mo to $0.004/GB/mo.

**Result** – Monthly spend dropped from **$45K → $31K** (−30 %), latency improved to 120 ms average, and the model accuracy remained unchanged (F1‑score 0.92).  

**Leadership Principles** – *Customer Obsession* (ensured fast answers for users), *Ownership* (took full responsibility from analysis to deployment), *Dive Deep* (rooted decisions in data), *Bias for Action* (implemented changes within weeks), and *Deliver Results* (measurable cost & performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
