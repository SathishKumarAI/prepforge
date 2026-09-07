---
qid: ing_f70ce9204d__aws__local
question: 'Explain: Increasing complexity of the system — Asynchronous computing at
  Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:35:26-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When Meta rolled out a real‑time recommendation engine, the team had to process millions of events per second while keeping latency below 50 ms. The existing monolithic batch pipeline could not meet this SLA and introduced *“big data lag”* that hurt user engagement.

**Action (Ownership & Dive Deep)**  
I led a cross‑functional squad to re‑architect the system as an **asynchronous microservice mesh**:

1. **Event ingestion** – Amazon Kinesis Data Streams fed into AWS Lambda for lightweight filtering, preserving order per user key.  
2. **Feature enrichment** – A stateful service on **Amazon DynamoDB** with conditional writes kept a per‑user profile cache; this avoided expensive joins.  
3. **Model inference** – Containerized TensorFlow models ran in **AWS ECS Fargate** behind an Application Load Balancer, scaling to 10 k concurrent requests.  
4. **Result aggregation** – Results were pushed back into Kinesis and finally stored in Amazon S3 for offline analytics.

We introduced a *retry queue* (SQS) and dead‑letter handling to guarantee at‑least‑once semantics without blocking downstream services.

**Result (Deliver Results)**  
- Latency dropped from 350 ms to **38 ms average**, meeting the SLA.  
- Throughput increased by **4×** while cost per recommendation fell from $0.015 to **$0.009** due to serverless scaling and reduced batch windows.  
- The asynchronous design eliminated a single point of failure, raising system availability from 99.7 % to **>99.99 %**.

**Learnings (Bias for Action & Invent & Simplify)**  
We discovered that *stateful caching* in DynamoDB was the bottleneck; migrating hot keys to an in‑memory Redis cluster on **ElastiCache** reduced lookup time by 30 %. The iterative, data‑driven approach exemplifies how ownership and deep dives translate into measurable customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
