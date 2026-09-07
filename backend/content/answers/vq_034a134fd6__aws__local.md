---
qid: vq_034a134fd6__aws__local
question: Should we use complex views that cruel performance ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 458
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:38-05:00'
sources: []
---

**Situation / Task**  
I was leading the backend redesign for a real‑time analytics platform used by 300 k daily active users (DAU). The existing monolithic Django app had “complex views” that performed nested joins and subqueries, causing 12 s response times during peak traffic—well above our SLA of 2 s.  

**Action**  
1. **Dive Deep** – I profiled the queries with *AWS X-Ray* and *RDS Performance Insights*, discovering that 70 % of the latency came from a single view that joined three tables (`events`, `users`, `segments`).  
2. **Invent & Simplify** – Re‑architected the data model into a denormalized schema on **Amazon DynamoDB** with a global secondary index keyed by `user_id` and `event_type`.  
3. Deployed a **Lambda layer** that streams changes from RDS to DynamoDB via **DynamoDB Streams** + **Kinesis Data Firehose**, keeping the cache fresh in under 200 ms.  
4. Implemented a caching layer with **ElastiCache‑Redis** for hot queries, reducing read traffic by 85 %.  
5. Updated the API gateway to enforce a *response time guard* and added automated alerts on CloudWatch.

**Result**  
- Average response time dropped from **12 s → 0.8 s** (95th percentile).  
- Peak throughput increased from 2 k RPS to **15 k RPS** without additional instances.  
- Operational cost fell by **30 %** (RDS + EC2 → DynamoDB + Lambda).  

**Learning & Ownership**  
I documented the trade‑offs (eventual consistency vs. strict ACID), ran a rollback plan, and built a post‑mortem wiki that became the company’s go‑to guide for future migrations. This experience reinforced my commitment to *Customer Obsession*—delivering fast, reliable analytics—and *Ownership*, ensuring every stakeholder saw measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
