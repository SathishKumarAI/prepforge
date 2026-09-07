---
qid: ing_3ce65bcc76__aws__local
question: 'Explain: Making the lock safe with fencing — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 430
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:29-05:00'
sources: []
---

**Situation / Task**  
I was tasked to replace a single‑node Redis lock in our recommendation engine that ran on multiple EC2 instances. The old solution caused race conditions and downtime during spot‑instancelosses, hurting the *Customer Obsession* principle by impacting real‑time personalization.

**Action**  
1. **Dive Deep** – I studied Martin Kleppmann’s “Making the lock safe with fencing” to understand the fencing token pattern.  
2. **Design** – Implemented a distributed lock using DynamoDB’s conditional writes (`UpdateExpression` + `ConditionExpression`) and a monotonically increasing *fencing token* stored in an item per resource.  
3. **AWS Services** –  
   - **DynamoDB** for low‑latency, highly available storage of locks.  
   - **SQS FIFO** to queue lock requests, ensuring ordering.  
   - **Lambda** to clean stale locks (TTL).  
4. **Scalability & Cost** – Provisioned 1 M RCU/WCU with auto‑scaling; cost ≈ $0.10/hour vs $3.20 for a Redis cluster. Availability > 99.9% due to DynamoDB’s multi‑AZ replication.  
5. **Bias for Action** – Deployed feature flag, rolled out 30 % of traffic, monitored.

**Result**  
- Lock contention dropped from 12 ms average to 1.3 ms (≈ 90 % improvement).  
- Recommendation latency decreased by 18 %.  
- Zero lock‑related outages in the first 6 months, improving NPS by +2 points.  

**Learnings** – Validated that simple DynamoDB conditional writes can replace complex external services when you use fencing tokens; future improvements will explore **AppConfig** for dynamic timeout tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
