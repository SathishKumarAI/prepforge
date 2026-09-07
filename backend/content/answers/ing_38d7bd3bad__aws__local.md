---
qid: ing_38d7bd3bad__aws__local
question: 'Explain: User Registration & Authentication — Event-Driven Architecture
  (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 481
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:23-05:00'
sources: []
---

**Situation**  
In my last role I led the redesign of a fintech app’s user onboarding flow that was throttling growth: our monolithic registration API had a 12 % failure rate under peak traffic and users complained about slow log‑ins.

**Task**  
I had to build an event‑driven, highly available authentication pipeline that could scale to millions of registrations per day while keeping latency <200 ms.

**Action**  
*Architecture*:  
- **API Gateway + Lambda** – stateless entry point for `/register` and `/login`.  
- **Amazon EventBridge** emits `UserRegistered` / `AuthAttempted` events.  
- **DynamoDB (global tables)** stores user profiles; **Cognito** handles password hashing & MFA.  
- **SQS FIFO** queues email‑verification & audit jobs to keep the API responsive.  
- **Step Functions** orchestrate multi‑step flows (validation → DB write → trigger events).  

*Design choices*:  
- *Scalability*: Lambda auto‑scales, DynamoDB auto‑shards; EventBridge handles burst traffic without throttling.  
- *Availability*: Multi‑AZ deployments, health checks, and retry logic in Step Functions ensure 99.95 % uptime.  
- *Cost*: Serverless eliminates idle capacity; SQS/Step Functions keep processing costs $0.10 per 1k events.  

**Result**  
Within three months:  
- Registration latency dropped from 650 ms to **140 ms** (70 % improvement).  
- Failure rate fell from 12 % to <0.5 %.  
- Daily registrations grew by **45 %**, and the system handled a 10× traffic spike without intervention.

---

### Leadership Principles Highlighted
- **Customer Obsession** – fast, reliable onboarding improves user satisfaction.  
- **Ownership** – I drove the full redesign from concept to production, owning metrics and post‑launch monitoring.  

Bar‑raisers will note my deep dive into latency bottlenecks, quantified impact on growth, and lessons learned: early use of EventBridge prevented future scaling pain points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
