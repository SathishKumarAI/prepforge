---
qid: ing_d170db24f2__aws__local
question: 'Explain: Serving example — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 456
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:23-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined a fintech startup, we had to move from a monolithic ML pipeline to a production‑grade inference service that could handle 10 k RPS for fraud detection while keeping latency under 50 ms. The goal was to replace our custom Flask deploys with something more scalable and maintainable.

**Action (A)**  
I designed a containerized solution using **TensorFlow Serving** inside Docker, orchestrated by **Amazon ECS Fargate** so we avoided managing EC2 instances. Each model version lived in an ECR image; a CI/CD pipeline pushed new images to ECS whenever a TFX‑based training job finished. For the data pipeline I used **TFX** (Transform, Trainer, Pusher) on **AWS SageMaker Pipelines**, which automatically exported the latest model to ECR and updated the ECS task definition via CloudWatch Events.

I added **Application Load Balancer** with target groups per model version for blue‑green deployments, ensuring zero downtime. Metrics from CloudWatch (latency, error rate) fed into an automated rollback rule that triggered if latency > 70 ms or errors > 0.5%.

**Result (R)**  
Within three weeks we achieved:
- **+200% throughput** vs the old Flask service (10 k → 30 k RPS).  
- **Latency < 45 ms** for 99th percentile requests.  
- **Cost per inference dropped by 35%** due to Fargate’s pay‑as‑you‑go model.

**Learning & Bar‑raiser Insight**  
I demonstrated *Ownership* (owning the end‑to‑end pipeline), *Dive Deep* (analyzing latency graphs and error logs), and *Bias for Action* (moving from manual deployments to automated pipelines). The bar‑raiser will note my data‑driven impact, clear trade‑offs between Fargate vs EC2, and the lesson that a well‑structured CI/CD can dramatically improve reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
