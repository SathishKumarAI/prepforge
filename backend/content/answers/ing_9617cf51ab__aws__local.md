---
qid: ing_9617cf51ab__aws__local
question: 'Explain: B-Tree Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 528
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:09-05:00'
sources: []
---

**Situation – Task**  
I was tasked to redesign the search layer for a high‑traffic e‑commerce catalog (10M+ SKUs, 5 k queries/sec). The existing full‑text scan caused 350 ms latency and >30% CPU usage on our RDS MySQL cluster.  

**Action – Technical Design**  
I introduced **B‑Tree indexes** on the `product_name`, `category_id` and a composite index `(price, rating)` to accelerate range queries.  
*Requirements:*  
- Sub‑200 ms latency for 99th percentile.  
- Zero downtime deployment.  
- Cost ≤ +10% of current spend.  

*Design choices:*  
1. **Amazon RDS Aurora MySQL** – native B‑Tree support, automatic failover, and read replicas for horizontal scaling.  
2. Use `ANALYZE TABLE` to keep statistics fresh; schedule nightly updates during low traffic windows.  
3. Partition the large table by `category_id` (range partitioning) to reduce index size per node.  

*Scalability:* Each replica can handle ~1 k queries/sec, so adding 2 replicas scales linearly.  
*Availability:* Aurora’s Multi‑AZ ensures no single point of failure; failover <10 s.  
*Cost trade‑off:* Index storage added 12 % but reduced CPU by 35%, saving ~$3k/month on EC2/IO credits.  

**Result – Impact**  
- Query latency dropped from 350 ms to **110 ms (68% reduction)**, 99th percentile below 200 ms.  
- CPU usage fell 35%, freeing resources for other services.  
- No downtime during rollout; customer satisfaction scores rose by 12 points in post‑release survey.

**Leadership Principles Highlighted**  
*Customer Obsession:* Delivered faster, more reliable search.  
*Ownership & Dive Deep:* I dug into query plans, tuned statistics, and validated every change with A/B testing before production.  

**Bar‑raiser takeaway**  
Showed ownership by addressing root cause, deep technical dive into index mechanics, quantified impact (latency & cost), and learned to schedule stats updates automatically after the initial failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
