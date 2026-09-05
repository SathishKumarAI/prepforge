---
qid: ing_a78fd9acec__star__local
question: 'Explain: Thousand Users — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 389
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:44-05:00'
sources: []
---

**Situation** – At my previous company we launched a recommendation engine for an e‑commerce site. The product was expected to serve about 1,000 concurrent users during peak sales, but our initial prototype ran into latency spikes when more than 300 users hit the API simultaneously.

**Task** – I had to redesign the system so it could scale reliably on AWS, keep response times under 200 ms for all users, and stay within a $2k/month budget while still supporting real‑time model updates.

**Action** – First, I containerized the inference code with Docker and deployed it to an ECS Fargate cluster behind an Application Load Balancer. I added an autoscaling policy that increased task count when CPU >70 % or request latency >150 ms, capping at 8 tasks. For model serving, I used SageMaker Endpoint with a multi‑model approach, loading only the latest 10 models into memory and swapping them out on demand. To reduce cold starts, I kept a small “warm pool” of idle containers. Finally, I implemented CloudWatch metrics and an SNS alert for any task failures, and set up a nightly Lambda that retrained the model with new data and pushed it to S3 for SageMaker to pick up.

**Result** – After deployment, our system handled 1,200 concurrent users with average latency of 120 ms and zero outages during a flash‑sale event. Costs stayed at $1,800/month, below budget, and the model accuracy improved by 4% after nightly retraining. I learned that combining containerized inference with SageMaker’s multi‑model endpoints and fine‑tuned autoscaling can deliver robust ML serving at scale on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
