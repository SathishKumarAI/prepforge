---
qid: vq_224509c37e__aws__local
question: Can I Update From Another Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 498
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:39-05:00'
sources: []
---

**Situation & Task**  
While refactoring our data‑pipeline for the e‑commerce analytics team, a stakeholder asked if we could update rows in `orders` by pulling values from a newly created table `discount_rules`. The goal was to apply real‑time discount calculations without rebuilding the entire ETL job.

**Action**  
1. **Requirements & Constraints** –  
   * Update must be atomic and idempotent.  
   * No downtime; we needed eventual consistency across 10 M+ orders daily.  
   * Cost had to stay under $200/month for the staging environment.

2. **Design** –  
   * Use **Amazon RDS Aurora Serverless (PostgreSQL)** for `orders` and `discount_rules`.  
   * Create a **materialized view** (`vw_orders_with_discounts`) that joins both tables on `product_id`.  
   * Trigger an **AWS Lambda** (Python 3.12) on every insert/update to `discount_rules`; the function runs a single `UPDATE ... FROM` statement, targeting only affected orders via an index on `product_id`.  
   * Employ **Aurora’s Multi‑Master** feature for high availability; read replicas serve reporting queries.  

3. **Scalability & Cost** –  
   * The Lambda scales to 10 k concurrent events with a max cost of ~$0.02 per invocation, far below the $200/month ceiling.  
   * Aurora Serverless auto‑scales from 2 ACUs up to 64, keeping CPU utilization between 30–70%.  

4. **Result** –  
   * 99.9 % of discount updates propagated within 3 seconds (vs. previous 15 min batch).  
   * Monthly savings: $1,200 in avoided manual re‑processing and a 45 % reduction in engineer hours.

**Reflection**  
I took **Ownership** by mapping the problem to business impact and chose a solution that balanced performance with cost. The Lambda + Aurora design shows **Dive Deep** into database capabilities and operational constraints. The measurable speed‑up and cost savings demonstrate my ability to deliver results, while I continuously monitor for any consistency drift—a lesson from earlier failure where unindexed joins caused 10 % data lag.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
