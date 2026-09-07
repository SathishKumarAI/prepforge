---
qid: ing_2f64df34bc__aws__local
question: 'Explain: Performance — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 381
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:39-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a migration of our recommendation engine from a legacy MySQL cluster to a hybrid SQL‑NoSQL architecture. The goal was to cut query latency by 70 % and scale write traffic from 2k RPS to 50k RPS while keeping costs under $30K/month.

**Action**  
I owned the redesign, first diving deep into our access patterns: read queries were heavily aggregative (joins across users, items, sessions), whereas writes were append‑only logs. I chose **Amazon Aurora Serverless v2** for transactional reads (ACID, SQL) and **DynamoDB with Global Secondary Indexes** for high‑throughput writes.  
To keep consistency I used **AWS DAX** for caching DynamoDB results and **EventBridge** to trigger a Lambda that syncs aggregates back into Aurora nightly. This split allowed us to run complex analytic queries on Aurora without blocking write traffic.

**Result**  
- Query latency dropped from 350 ms to <80 ms (90 % improvement).  
- Write throughput increased from 2k RPS to 55k RPS, with cost staying at $28K/month.  
- The system now supports real‑time personalization for 1M active users.

**Learnings & Bar‑raiser Signals**  
I demonstrated **Ownership** by steering the entire migration and **Dive Deep** through performance profiling. Quantified impact (latency & cost) satisfies Amazon’s “Deliver Results” principle, while acknowledging trade‑offs between consistency and latency shows critical learning from initial experiments where we tried a pure NoSQL solution that lost 12 % of session data due to eventual consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
