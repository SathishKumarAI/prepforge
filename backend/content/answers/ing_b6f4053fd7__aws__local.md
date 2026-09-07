---
qid: ing_b6f4053fd7__aws__local
question: 'Explain: Example: Choreography-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 446
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:39-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In a cross‑service recommendation engine we needed to move user data from an on‑prem Hadoop cluster to S3, trigger a SageMaker training job, and finally push the model to an API Gateway endpoint—all without manual orchestration.

*Task:* Design a fault‑tolerant workflow that guarantees each step completes before the next begins, yet scales with millions of users per day.

*Action:* I chose a **choreography‑based saga**. Each service publishes domain events (`DataIngested`, `TrainingStarted`, `ModelDeployed`) to an Amazon SNS topic; downstream services subscribe and react locally.  
1. **Lambda** receives `DataIngested` → writes metadata to DynamoDB, triggers SageMaker training via the SDK.  
2. SageMaker emits `TrainingCompleted`; a Lambda pulls the model artifact from S3, updates CloudFront cache, and publishes `ModelDeployed`.  
3. If any step fails, the originating service publishes a compensating event (`DataIngestFailed`, etc.) that triggers rollback Lambdas.

*Result:* The saga completed 99.9 % of requests within 5 minutes, reduced ops cost by 35 % (no Airflow cluster), and cut manual intervention from days to minutes.  

**Dive Deep & Deliver Results**

I instrumented CloudWatch metrics for each event type; the latency distribution showed a 10th‑percentile drop from 12 s to 3 s after adding an SQS buffer between SNS and Lambdas, proving scalability. The bar‑raiser looks for: ownership of the full loop, depth in event design (idempotency, id handling), quantified impact (99.9 % success), and learning—initially we had duplicate model deployments; introducing a unique deployment ID solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
