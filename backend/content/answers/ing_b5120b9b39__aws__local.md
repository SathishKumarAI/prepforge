---
qid: ing_b5120b9b39__aws__local
question: 'Explain: Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 429
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:43-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a legacy batch‑processing pipeline (≈ 10 M events/day) to an event‑driven architecture so we could reduce latency from 24 h to < 5 min and enable real‑time analytics.  

**Action**  
I scoped the requirements, then designed a solution around **Amazon EventBridge → Lambda → SQS → DynamoDB**, with fallback Kinesis streams for burst traffic.  
* **EventBridge** handled schema evolution (using Event Schema Registry) and routing to micro‑services.  
* Each Lambda parsed events, performed lightweight ML inference (via SageMaker endpoint), and queued results into SQS for downstream processing.  
* The backend services consumed SQS in parallel, wrote predictions to DynamoDB, and triggered a CloudWatch alarm if throughput dropped below 90 % of target.  

I implemented **retry & dead‑letter queues** and used CloudTrail logs for auditability, ensuring full ownership of the data path. I also set up automated Terraform CI/CD pipelines, reducing deployment time from days to minutes.

**Result**  
Latency fell from 24 h → < 5 min (90 % reduction). Throughput increased by 120 %, and cost dropped 35 % due to serverless compute scaling with demand. The architecture now supports 50 k concurrent events/day without manual intervention, meeting our SLA of 99.9 % availability.

**Learning & Bar‑raiser Insight**  
I documented trade‑offs (Lambda cold starts vs. Kinesis) and iterated on the design after a first failure where unhandled schema changes caused downstream errors—highlighting ownership and “Dive Deep” to root‑cause issues. This approach aligns with **Customer Obsession**, **Ownership**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
