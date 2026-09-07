---
qid: ing_68fb2ce658__aws__local
question: 'Explain: So in some cases when we access — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 435
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:39-05:00'
sources: []
---

**Situation & Task**  
During the 2023 Seattle Conference on Scalability I was asked to explain how we would scale a **real‑time recommendation engine** for YouTube’s global audience (≈ 2 B daily active users) while keeping latency under 50 ms and cost per recommendation below $0.0001.

**Action**  
* *Ownership & Bias for Action*: I drafted an end‑to‑end architecture that uses **Amazon SageMaker Edge Manager** to host lightweight models on a CDN edge (CloudFront + Lambda@Edge).  
* *Dive Deep*: The model is a 4‑layer neural net trained nightly in **SageMaker Pipelines**, with feature ingestion from **Kinesis Data Streams** and feature store in **Amazon DynamoDB Global Tables**.  
* *AWS Services & Trade‑offs*:  
  - **Compute**: Spot instances for training (cost ↓ 60%), on‑demand for inference at edge.  
  - **Scalability**: Auto Scaling groups with CloudWatch metrics tied to request rates; horizontal scaling across regions via Route 53 latency routing.  
  - **Availability**: Multi‑AZ SageMaker endpoints + read replicas in DynamoDB guarantee < 99.99% uptime.  
  - **Cost**: Estimated $4.2M/month vs $6.5M for a monolithic EC2 solution, a 35 % savings.

**Result**  
After deployment, latency dropped to 30 ms on average and recommendation throughput increased by 150 %, translating to an additional 15 M daily watch hours (≈ $1.8 M incremental revenue). I documented the post‑mortem; failures during early rollouts were attributed to insufficient cache warming—leading to a new **Cache Warm‑Up Scheduler** that reduced cold starts by 40 %.  

*Leadership Principles*: Customer Obsession, Ownership, Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
