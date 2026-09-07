---
qid: ing_f488b026cf__aws__local
question: 'Explain: Email Processor — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 422
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:50-05:00'
sources: []
---

**Situation / Task**  
While leading the ML Ops team at my last company we received a spike of 10 M transactional emails per day during a marketing campaign. The existing “email‑processor” (S3 + Lambda) throttled at 5 k/s, causing >30 % delivery failure and lost revenue.

**Action**  
1. **Ownership & Customer Obsession** – I scoped the problem, ran a root‑cause analysis (“Dive Deep”) using CloudWatch logs; identified CPU limits on Lambda and single‑threaded parsing.  
2. Designed a *Notification Service* pipeline:  
   - **SQS FIFO** (dedupe) → **Kinesis Data Streams** (scalable ingestion) → **Lambda @Edge** for real‑time validation → **DynamoDB Global Tables** to store user preferences.  
3. Implemented **AWS Step Functions** orchestrating retries and dead‑letter queues, ensuring at‑least‑once delivery.  
4. Added **Amazon SNS** topics per region for downstream services (CRM, analytics).  
5. Used **AWS X-Ray** for end‑to‑end latency tracing; set SLA of 200 ms.

**Result**  
- Throughput increased from 5 k/s to 60 k/s (+12×), handling the 10 M emails with <2 % failure rate.  
- Cost dropped by 18 % due to efficient scaling (pay‑as‑you‑go Lambda concurrency).  
- Delivery time improved from 8 s to 0.15 s, boosting customer satisfaction scores by 4.3 points.

**Learnings**  
Bar‑raiser focus: I demonstrated end‑to‑end ownership, deep dive into metrics, quantified impact, and iterated quickly after a failed Lambda deployment (used Canary releases).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
