---
qid: ing_b9dd9039f9__aws__local
question: 'Explain: VI. Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 634
total_tokens: 866
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:05-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to refactor a legacy recommendation engine into a cloud‑native microservice that could scale for millions of concurrent users while keeping latency < 200 ms.

**Action – 12‑Factor App Principles**  

| Factor | Implementation | AWS Services |
|--------|----------------|--------------|
| **Codebase** | Single Git repo, CI/CD via CodePipeline → build & test in CodeBuild. | CodeCommit, CodePipeline, CodeBuild |
| **Dependencies** | Explicit `requirements.txt`, virtualenv; packaged in Lambda layers. | Lambda Layers |
| **Config** | Store secrets in Parameter Store + Secrets Manager; environment variables per stage. | Systems Manager Parameter Store, Secrets Manager |
| **Backing Services** | Treat S3, DynamoDB, SageMaker endpoints as attached services, not embedded. | S3, DynamoDB, SageMaker |
| **Build → Release → Run** | Immutable Docker images in ECR, deployed to ECS Fargate with Blue/Green via CodeDeploy. | ECR, ECS Fargate, CodeDeploy |
| **Processes** | Stateless containers; all state in DynamoDB/S3; no local session. | ECS, DynamoDB, S3 |
| **Port Binding** | Each container exposes port 8080; API Gateway maps to Lambda for serverless edge. | API Gateway |
| **Concurrency** | Auto‑scaling policies on CPU/Memory thresholds; Spot Instances for cost savings. | Application Auto Scaling |
| **Disposability** | Fast start‑up (cold start < 500 ms); graceful shutdown hooks. | ECS, CloudWatch Events |
| **Dev & Prod Parity** | Same image pushed to dev/stage/prod; no “works on my machine” bugs. | CodePipeline |
| **Logs** | Structured JSON logs streamed to CloudWatch Logs and Athena for analytics. | CloudWatch Logs, Athena |
| **Admin Processes** | One‑off tasks (data migration) run in Fargate tasks with IAM roles. | ECS Tasks |

**Result**  
- 70 % reduction in cold‑start latency (200 ms → 60 ms).  
- 40 % cost savings by leveraging Spot Instances and eliminating on‑prem overhead.  
- Deployment frequency increased from monthly to daily, improving time‑to‑market.

**Leadership Principles Highlighted**  
*Customer Obsession* – faster recommendations directly improved click‑through rates by 12%.  
*Ownership & Dive Deep* – I owned the end‑to‑end migration, debugged production anomalies, and iterated on the design based on real telemetry.  

**Bar‑raiser Takeaway**  
The answer demonstrates ownership (full responsibility), depth (detailed factor‑by‑factor mapping), quantified impact (latency & cost metrics), and learning from failure (cold start issue resolved).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
