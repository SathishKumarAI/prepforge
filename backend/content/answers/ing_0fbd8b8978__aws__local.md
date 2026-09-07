---
qid: ing_0fbd8b8978__aws__local
question: 'Explain: Stateless vs Stateful Services — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 408
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation & Task**  
While leading a data‑science platform at my previous company, we had to expose two ML inference endpoints: one for real‑time fraud detection and another for batch scoring of user profiles. The engineering team debated whether to build them as stateless Lambda functions or stateful ECS containers.

**Action (Dive Deep + Ownership)**  
I first logged latency and throughput metrics from a pilot. Stateless Lambdas hit 200 ms avg latency, but the batch job required 10 GB of intermediate state, causing cold‑start failures. I designed a hybrid architecture:  

- **Stateless**: Use API Gateway + Lambda (Python) for fraud detection; cache model weights in Amazon S3 and read into memory on each invocation.  
- **Stateful**: Deploy SageMaker Batch Transform jobs inside ECS Fargate, backed by an EFS file system to persist intermediate tensors.  

Both services register health checks with Elastic Load Balancer and auto‑scale via CloudWatch alarms (CPU > 70 % → +2 tasks). I added DynamoDB for request tracking and SQS for decoupling the batch job queue.

**Result (Deliver Results)**  
After rollout, fraud detection latency dropped from 350 ms to **180 ms** with a 99.9 % success rate, while batch jobs completed 40 % faster and cost decreased by **$12K/month** due to efficient Fargate task sizing.  

**Learnings (Bias for Action + Customer Obsession)**  
I discovered that stateless services excel in low‑latency scenarios but fail when heavy state is needed; vice versa, stateful services can handle large data but introduce complexity. Balancing the two with AWS managed services maximized scalability and minimized operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
