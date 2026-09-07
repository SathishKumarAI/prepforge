---
qid: ing_43a836a2e8__aws__local
question: 'Explain: Slower Database Queries — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 430
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:03-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the data‑engineering team for our recommendation engine, I noticed a spike in query latency—average DB response time rose from **120 ms to 3 s** during peak traffic. The goal was to bring latency back under **200 ms** without increasing infra cost.

**Action (A)**  
I applied *Ownership* and *Dive Deep*:  

1. **Profiling & indexing** – added composite GSI on `user_id, timestamp`.  
2. **Read‑through caching** with Amazon ElastiCache Redis (cluster mode) for the 70 % most frequent queries.  
3. **Query rewriting**: switched from JOINs to denormalized tables in DynamoDB where appropriate.  
4. **Auto‑scaling RDS Aurora Serverless** to handle traffic bursts.  
5. **Connection pooling** via PgBouncer on RDS.  
6. **Batching & pagination** – limited result sets to 100 rows.  
7. **Monitoring with CloudWatch + APM** to detect regressions.  
8. **Fail‑over plan**: read replicas in a different AZ.

**Result (R)**  
Latency dropped to **≈ 110 ms** during peaks, throughput increased by **4×**, and cost decreased by **18 %** thanks to Aurora Serverless scaling. I documented the architecture in Confluence and conducted a post‑mortem that highlighted the importance of *Bias for Action*—quick hypothesis testing saved us 2 weeks of manual debugging.

**Learning & Bar‑raiser Insight**  
Bar‑raisers look for clear ownership, depth (I dove into query plans and AWS service nuances), measurable impact (latency & cost numbers), and iterative learning. I iterated on the cache eviction policy after observing a 12 % hit‑rate drop during flash sales, proving that continuous improvement is key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
