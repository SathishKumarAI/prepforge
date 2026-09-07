---
qid: vq_2b1979204c__aws__local
question: What SYSTEM VARIABLE is used to refer DATABASE TIME ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 359
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:37-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of an on‑prem Oracle workload to Amazon RDS for PostgreSQL. The DBA team needed a quick way to audit how long each database session spent waiting for locks versus actual query execution, so they could tune contention points before cutover.

**Action**  
The key system variable in PostgreSQL that reports the *database time* (time spent executing SQL statements) is `pg_stat_activity.query_start`. I wrote an automated Lambda function that queried `pg_stat_activity` every minute, calculated elapsed time as `NOW() - query_start`, and stored the results in a DynamoDB table for trend analysis.  
- **AWS services**: RDS PostgreSQL, AWS Lambda (Python), Amazon DynamoDB, CloudWatch Logs.  
- **Scalability & Availability**: The Lambda runs on a VPC endpoint to the RDS instance, so it scales with concurrency limits and is highly available across AZs.  
- **Cost**: < $0.20/month for the Lambda invocations; DynamoDB’s read/write capacity kept under 5 RCU/WCU.

**Result**  
The dashboard revealed that 12 % of sessions were stalled >3 seconds on lock waits, leading to a 25 % reduction in page faults after index re‑creation. The migration hit its go‑live window 4 hours ahead of schedule.  

**Reflection**  
I learned that exposing the right system variable early (here `query_start`) can surface hidden performance issues—an ownership lesson and a concrete example of *Dive Deep* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
