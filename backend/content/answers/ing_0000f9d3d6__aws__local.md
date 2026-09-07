---
qid: ing_0000f9d3d6__aws__local
question: 'Explain: I. Codebase — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 468
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:31-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to ship a production‑grade recommendation model that served millions of requests daily. The team had an ad‑hoc monolith; we needed to adopt the **12‑Factor App** methodology to make the codebase reproducible, scalable, and easy for new data scientists to pick up.

**Action**  
I led a migration that treated the ML pipeline as a set of immutable containers (Docker) orchestrated by **Amazon ECS Fargate**.  
1. *Code & Dependencies* – All model artifacts and libraries were pinned in a single `requirements.txt` and built into an image; we used **S3** for shared data and **AWS CodeBuild** to enforce reproducible builds.  
2. *Config & Secrets* – Environment variables stored in **AWS Systems Manager Parameter Store** (with encryption) removed hard‑coded secrets from the repo.  
3. *Backing Services* – The inference API spoke to a **DynamoDB** table for user metadata and an **SageMaker endpoint** for batch scoring, both decoupled via **SNS/SQS** queues.  
4. *Build/Release/Test* – CI/CD pipelines (CodePipeline + CodeDeploy) performed unit tests, automated model drift checks, and staged deployments to a blue‑green cluster; rollback was instant on failure.

**Result**  
- Deployment time dropped from 3 days to **under 2 hours** per iteration.  
- Model latency decreased by **35%** (from 250 ms to 160 ms) due to container caching and autoscaling.  
- Operational costs fell 22% because we eliminated the on‑prem VM sprawl and leveraged spot instances for training jobs.

**Reflection & Learning**  
The biggest failure was an initial over‑optimization that removed necessary logging; after adding structured logs to CloudWatch, debugging became 4× faster. I now routinely audit factor compliance before every sprint—demonstrating **Ownership**, **Dive Deep**, and a **Bias for Action** mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
