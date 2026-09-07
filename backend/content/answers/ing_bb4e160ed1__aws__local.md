---
qid: ing_bb4e160ed1__aws__local
question: 'Explain: Two phase commit protocol — 2Phasecommit'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 457
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:14-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of a multi‑region order‑processing system to AWS where every transaction had to remain ACID across DynamoDB and RDS. The client required a *two‑phase commit* (2PC) style guarantee without sacrificing latency.

**Action**  
1. **Design** – I chose an *optimistic lock + transactional write* pattern using DynamoDB’s conditional writes, coupled with AWS Step Functions to orchestrate the two phases:  
   - *Prepare*: each microservice writes a “prepared” record and returns success via SNS.  
   - *Commit/Abort*: once all participants signal ready, a Lambda aggregates results and either updates the final state or rolls back via compensating transactions.  
2. **AWS Services** – DynamoDB (low‑latency), Step Functions (state machine + retries), SNS/SQS (decoupling), Lambda (serverless orchestration).  
3. **Scalability & Cost** – The system scales horizontally; each phase is event‑driven, so we pay only for compute and write capacity. We capped DynamoDB provisioned throughput to 10 k RCU/WCU per region, keeping costs under $0.5 / transaction.  
4. **Availability & Trade‑offs** – By avoiding a single coordinator node, we eliminated a single point of failure. The trade‑off was a slight increase in latency (~15 ms extra), acceptable for our 99.9% SLA.

**Result**  
The new workflow cut cross‑region commit failures by **87%**, reduced average transaction time from 250 ms to 235 ms, and kept monthly spend below $3k. The client’s CSAT rose to 4.8/5, illustrating *Customer Obsession* and *Deliver Results*.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end design, dove deep into DynamoDB’s conditional logic, quantified impact through real metrics, and learned that compensating transactions are cheaper than full rollbacks in a distributed setup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
