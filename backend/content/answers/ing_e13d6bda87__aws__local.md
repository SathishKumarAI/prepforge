---
qid: ing_e13d6bda87__aws__local
question: 'Explain: Conflict resolution — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 454
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:44-05:00'
sources: []
---

**Conflict Resolution in Data Replication – A Practical Lens**

*Situation:* While architecting a global e‑commerce platform (25 M daily users), we faced stale reads and write conflicts across multi‑region databases.

*Task:* Design a fault‑tolerant replication strategy that guarantees eventual consistency while minimizing latency.

*Action:*  
1. **Identify Conflict Types** – *Read–write*, *Write–write*, and *Schema* conflicts.  
2. **Choose Replication Model** – Adopt **multi‑master with conflict resolution** using *Amazon DynamoDB Global Tables*.  
3. **Resolution Strategy** – Implement **last‑writer‑wins (LWW)** for inventory counters and **application‑level merge** (custom resolver) for user profiles.  
4. **Implementation Details**  
   - Enable DynamoDB Streams to trigger an **AWS Lambda** function that runs a *conflict‑resolution microservice* stored in **Amazon ECS Fargate**.  
   - Persist conflict logs in **Amazon S3** and use **Amazon Athena** for audit queries.  
5. **Scalability & Cost** – DynamoDB offers 10 k RCUs/ICU per region; Lambda scales to 1 M concurrent invocations, keeping cost <$0.02 per 100 k conflicts.  

*Result:* Post‑deployment, read latency dropped from 200 ms to <30 ms globally, and conflict‑related errors fell by **87 %** within two weeks. The system now supports 500 k concurrent writes with <1 s SLA.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Ensuring fast, accurate data for shoppers worldwide.  
- **Ownership & Dive Deep** – Taking full responsibility for consistency and deeply understanding conflict patterns to engineer a resilient solution.  

*Bar‑raiser focus:* depth of technical reasoning, clear quantification of impact, ownership in iterating from failure (initial 25 % stale reads) to robust design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
