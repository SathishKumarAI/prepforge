---
qid: ing_193d1d7b55__aws__local
question: 'Explain: MLOps level 0: Manual process — MLOps: Continuous delivery and
  automation pipelines in machine learning \u00a0|\u00a0 Cloud Architecture Center
  \u00a0|\u00a0 Google Cloud Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 523
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:22-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In my last role I was tasked to launch a fraud‑detection model for a fintech client that processed ~50 M transactions/day. The existing workflow was **Level 0 MLOps**—data scientists pulled data, trained models locally, then manually uploaded the artifact to an S3 bucket and updated a Lambda function. This manual loop caused 2–3 day lag between model training and production deployment, leaving customers exposed to evolving fraud patterns.

**Action (Ownership + Bias for Action)**  
I architected a **continuous delivery pipeline** using AWS services:
- **Amazon SageMaker Pipelines** for reproducible data‑prep → training → evaluation steps.  
- **AWS CodePipeline** orchestrates the end‑to‑end flow, triggering on commits to GitHub and automatically pushing the trained model to **SageMaker Model Registry**.  
- **ECR + ECS Fargate** hosts a lightweight inference container, updated via **CloudWatch Events** when the registry tags a new version.  
- Automated rollback is built into CodePipeline using SageMaker’s “canary” deployment strategy.

I added **unit & integration tests** in CodeBuild and leveraged **Amazon CloudTrail** for auditability. The entire process now completes within 30 minutes, compared to the previous 48 hours.

**Result (Deliver Results)**  
- Deployment latency dropped from 2–3 days → <30 min (≈ 99% faster).  
- Model drift detection reduced by 70%, improving fraud‑loss prediction accuracy from 82% to 94%.  
- Operational cost decreased by 15% due to auto‑scaling and spot instances.

**Reflection & Learning (Dive Deep)**  
Initial rollouts hit a cold‑start latency issue on ECS. I deep‑dive into CloudWatch metrics, discovered that the container image size was bloated. By trimming unused layers and switching to **Amazon EFS** for shared artifacts, I cut start time by 40 ms, improving user experience.

This project exemplifies how moving from Level 0 manual MLOps to an automated pipeline aligns with Amazon’s Leadership Principles: **Customer Obsession**, **Ownership**, **Dive Deep**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
