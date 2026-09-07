---
qid: ing_4626c5e0f6__aws__local
question: 'Want to learn more about this pattern? — Pattern: Command Query Responsibility
  Segregation (CQRS)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 391
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:18-05:00'
sources: []
---

**Situation / Task**  
At my previous role we were building a real‑time recommendation engine that served millions of users daily. The monolith caused slow query responses and made it hard to roll out new ML models without affecting the entire system. I proposed adopting **CQRS** so that read traffic could scale independently from write (model training) operations.

**Action**  
I led a small squad to split the API layer into two services:  

* **Command Service** – writes user interaction events and triggers model retraining jobs in an Amazon SageMaker pipeline. Implemented with AWS Lambda + DynamoDB Streams, ensuring eventual consistency via SQS for downstream updates.  
* **Query Service** – reads pre‑computed recommendation vectors from a read‑optimized Aurora Serverless DB, exposed through API Gateway and backed by ElasticCache Redis for sub‑millisecond latency.

To keep the system cost‑effective I used **Amazon EventBridge** to decouple components, enabling auto‑scaling. For high availability we deployed both services in a dual‑AZ VPC with CloudWatch alarms on RPS thresholds.

**Result**  
The new architecture reduced recommendation query latency from 350 ms to <30 ms (90% improvement) and cut infrastructure cost by **25%** due to targeted scaling of the read tier. Model retraining time dropped from 4 hrs to 45 min, allowing a daily model refresh cadence.

**Reflection**  
I own the end‑to‑end impact: measured latency, cost, and accuracy improvements. I dived deep into DynamoDB vs Aurora trade‑offs, documented lessons on eventual consistency pitfalls, and shared findings with the broader team—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
