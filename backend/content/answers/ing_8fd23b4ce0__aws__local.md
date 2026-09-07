---
qid: ing_8fd23b4ce0__aws__local
question: 'Explain: Data Denormalization — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 485
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:18-05:00'
sources: []
---

**Situation / Task**  
I led the migration of a legacy OLTP system that served 200 k daily API requests into an ML‑enabled recommendation engine. The original schema was heavily normalized (12 tables, 50 M rows), causing join latency >300 ms and throttling our model training pipeline.

**Action**  
- **Denormalized data store**: Created a single wide table in Amazon DynamoDB with composite keys (`UserID#Timestamp`) and secondary indexes for feature lookup.  
- **Batch ETL**: Used AWS Glue to extract, transform, and load 5 TB of historical logs into the denormalized table nightly, keeping the schema immutable during inference.  
- **Caching layer**: Deployed Amazon ElastiCache‑Redis for hot user segments (top 1 % users), reducing read latency to <2 ms.  
- **Scalability & Availability**: Leveraged DynamoDB’s auto‑scaling and multi‑AZ replication; set up a global table for cross‑region reads with minimal latency (~10 ms).  
- **Cost control**: Reserved capacity for predictable traffic (≈$12k/month) and used on‑demand only during peak model retraining periods.

**Result**  
Latency dropped from 300 ms to <5 ms, boosting API throughput by 4×. Model training time decreased by 70 %, enabling daily incremental updates. Cost stayed within budget, saving ~15 % annually compared to the previous RDS‑based solution.

---

### Leadership Principles Anchored
- **Customer Obsession** – delivering instant recommendations improves user satisfaction.  
- **Ownership** – I championed end‑to‑end migration and post‑deployment monitoring.  
- **Dive Deep** – detailed profiling of query plans guided denormalization decisions.  

### Bar‑Raiser Takeaway
They’ll note my ownership, deep dive into performance bottlenecks, quantified impact (latency & cost), and learning loop: we iterated on the cache policy after observing traffic spikes, refining TTLs to balance freshness vs. hit rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
