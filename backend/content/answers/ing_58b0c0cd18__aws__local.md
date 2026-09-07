---
qid: ing_58b0c0cd18__aws__local
question: 'Explain: Choosing the Right Index — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 428
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:09-05:00'
sources: []
---

**Situation / Task**  
I led a data‑science team building a recommendation engine for a global e‑commerce platform that served ~2 M users/day. Our training pipeline stored millions of user–item interactions in DynamoDB, but query latency on the real‑time inference API was 400 ms—far above the SLA of <80 ms.

**Action**  
1. **Dive Deep into Access Patterns** – I ran CloudWatch traces and discovered that 95% of read traffic was *lookup by `user_id` + `item_category`*.  
2. **Choose the Right Index** – Added a Global Secondary Index (GSI) on (`user_id`, `item_category`) with a projected key set of only the fields needed for scoring. I avoided a composite primary key that would have forced an expensive scan.  
3. **AWS Services & Trade‑offs** – Leveraged DynamoDB Auto Scaling to keep provisioned capacity in line with traffic spikes, and used DynamoDB Streams + Lambda to materialize hot embeddings into Redis (ElastiCache) for sub‑10 ms reads during peak hours.  
4. **Cost Control** – The GSI increased read capacity by 1.5× but cut the average latency from 400 ms to **45 ms**, a 89% improvement, while keeping monthly costs below the $12K budget.

**Result**  
- SLA compliance rose from 60% to **100%** in production.  
- API throughput increased from 10k RPS to 35k RPS with no new hardware.  
- Learned that *index design is a first‑class optimization; mis‑indexed tables can double costs without performance gains.*  

*Leadership Principles*: **Ownership** (I took full responsibility for the latency spike), **Dive Deep** (analyzed metrics and access patterns), and **Deliver Results** (measurable SLA lift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
