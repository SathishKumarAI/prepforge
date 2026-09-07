---
qid: ing_7fc603149c__aws__local
question: 'Explain: Expression Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 440
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:13-05:00'
sources: []
---

**Situation / Task**  
I led a migration of our recommendation engine from an on‑prem PostgreSQL cluster to Aurora Serverless v2 (Amazon RDS). The app queried millions of user‑item interactions daily, but slow `WHERE` clauses on expression‐based predicates (`user_age BETWEEN 18 AND 35 AND user_country = 'US'`) caused > 30 % latency spikes during peak hours.  

**Action**  
1. **Dive Deep** – profiled queries with `pg_stat_statements`; identified that the planner ignored composite filters because no single column index matched the expression.  
2. Implemented **expression indexes** (`CREATE INDEX ON interactions (user_age, user_country)`), leveraging Aurora’s support for partial and functional indexes.  
3. Added a **global secondary index** on `user_country` in DynamoDB for real‑time analytics to offload read traffic.  
4. Configured **Aurora Serverless v2 auto‑scaling** to 1–10 ACUs, ensuring instant capacity during flash sales.  
5. Monitored with CloudWatch; set alarms on query latency > 200 ms.

**Result**  
- Query latency dropped from 450 ms to 90 ms (80 % improvement).  
- Read throughput increased by 3× without additional cost because the index reduced row scans.  
- Cost savings: $1,200/month by avoiding over‑provisioned RDS instances.  

**Ownership & Learning**  
I owned the full cycle—design, implementation, testing, and monitoring—and documented lessons in a post‑mortem wiki. The team adopted expression indexes for other services, yielding an additional 25 % performance lift across the platform.

> **Bar‑raiser cues:** Ownership of root cause, deep technical dive into planner behavior, quantifiable impact (latency & cost), proactive scalability solution, and knowledge transfer to teammates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
