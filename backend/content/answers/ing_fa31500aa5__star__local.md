---
qid: ing_fa31500aa5__star__local
question: 'Explain: Launch — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 329
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:00-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had an AI‑driven fraud detection model that was only running on a single EC2 instance. The daily transaction volume hit 1.5 million, and latency spikes during peak hours caused the system to miss alerts.

**Task**  
I needed to redesign the architecture so it could scale automatically, reduce cost, and keep prediction latency under 200 ms even at peak load.

**Action**  
First, I containerized the model with Docker and pushed it to Amazon ECR. Then I set up an ECS Fargate cluster with an Application Load Balancer that used target‑group health checks to route traffic only to healthy containers. To handle bursty traffic I added an Auto Scaling policy based on CPU utilization (target 70 %) and a CloudWatch alarm for request latency. For persistence, I switched from local file storage to Amazon S3 for feature data and used DynamoDB with TTL for session caching. Finally, I deployed the whole stack through Terraform, enabling quick rollback and versioning.

**Result**  
The new architecture handled 5× the transaction volume (7.5 million per day) while keeping latency below 180 ms. Operational costs dropped by 30 % because we paid only for compute during spikes. I learned that combining container orchestration with fine‑tuned scaling policies is key to reliable, cost‑effective ML deployment on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
