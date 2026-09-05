---
qid: ing_0b39e291e8__star__local
question: 'Explain: Ten Million Users — AWS Scale - by Neo Kim - The System Design
  Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 328
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:24-05:00'
sources: []
---

**Situation**  
I was part of a startup that launched an AI‑powered recommendation engine for a music streaming app. Within the first month we hit over ten million active users, and our analytics dashboards showed traffic spikes during peak listening hours. Our existing infrastructure on EC2 was struggling with latency and cost.

**Task**  
I had to redesign the system so it could elastically scale to handle millions of concurrent requests while keeping response time under 200 ms and controlling AWS spend.

**Action**  
First, I migrated the model inference layer to Amazon SageMaker endpoints with multi‑model hosting, enabling on‑demand scaling. Next, I rewrote the data pipeline using Amazon Kinesis Data Streams for real‑time user interaction ingestion and processed it with Lambda functions that updated a Redis cache in ElastiCache. To reduce cold starts, I containerized the inference code in ECS Fargate and set up an Application Load Balancer with weighted target groups to gradually shift traffic. Finally, I implemented cost monitoring via AWS Cost Explorer and set up auto‑scaling policies based on CPU utilization thresholds.

**Result**  
The new architecture handled 10 M concurrent users with average latency of 180 ms, a 35% drop in EC2 costs, and the ability to burst to 50 k requests per second during peak hours. I learned how to balance performance and cost by leveraging managed services and fine‑tuned auto‑scaling policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
