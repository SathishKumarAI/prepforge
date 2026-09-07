---
qid: ing_9596075140__aws__local
question: 'Explain: V. Build, Release, Run — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:06-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy ML inference service to a 12‑factor architecture so we could scale model serving from 5 k requests/day to >200 k without breaking SLAs.

**Action**  
I broke the work into *Build, Release, Run* phases and applied AWS services that align with each factor:  

| Factor | Implementation |
|--------|----------------|
| **1. Codebase** | GitHub → CodeCommit; immutable `docker‑image` stored in ECR |
| **2. Dependencies** | Dockerfile + pip‑freeze, bundled in image – no global installs |
| **3. Config** | Secrets Manager & SSM Parameter Store for env vars (model path, batch size) |
| **4. Backing Services** | RDS Aurora Serverless for metadata; S3 for model artifacts |
| **5. Build & Release** | CodeBuild → ECR push → CodePipeline auto‑deploy to ECS Fargate |
| **6. Run** | ECS Fargate with autoscaling based on CloudWatch metrics (CPU/latency); health checks via ALB |

I introduced a blue‑green deployment strategy in the pipeline, reducing downtime from 30 min to <2 min. After rollout we achieved **99.97 % uptime**, cut inference latency by 40 %, and cut ops cost by 25 % compared to the monolith.

**Result**  
The new pipeline now supports continuous model updates (every 3 days) with zero manual intervention, giving us true *Customer Obsession* and *Ownership*.  

**Bar‑raiser notes** – I demonstrated deep dive into each factor, quantified impact, and learned from a failed initial rollout where we forgot to version secrets, which led me to add automated secret rotation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
