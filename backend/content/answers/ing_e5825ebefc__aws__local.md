---
qid: ing_e5825ebefc__aws__local
question: 'Explain: Scale and fail independently — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 367
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:54-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a recommendation engine for a global e‑commerce platform that had to process millions of user events per day while guaranteeing zero data loss and rapid model updates. The challenge was to scale each component independently—data ingestion, feature extraction, inference, and result delivery—so that any failure would not cascade across the system.

**Action**  
I designed an **event‑driven architecture** using Amazon Kinesis Data Streams for real‑time event capture, Amazon SQS + Lambda for decoupled processing, and DynamoDB for feature storage. Each stage ran in its own VPC with dedicated Auto Scaling groups; failures in one did not affect the others. Model training was offloaded to SageMaker Pipelines on Spot Instances, and inference was served via SageMaker Endpoint behind an Application Load Balancer (ALB). I added CloudWatch Alarms and AWS X-Ray for observability.

**Result**  
The system handled 10 M events/second with <1 ms latency per inference. During a simulated outage of the feature store, 99.8 % of requests were rerouted to a read‑replica, preventing any user impact. Cost dropped by 35 % through Spot Instances and auto scaling, while data loss risk fell below 0.00001%.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dove deep into performance bottlenecks, quantified a 40 % throughput gain, and learned that decoupling via Kinesis + Lambda provides the resilience needed for large‑scale ML at AWS scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
