---
qid: ing_39dcc7483f__aws__local
question: 'Explain: Use a specific image version — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:15-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of our on‑prem image classification pipeline to a serverless ML platform. The legacy Docker images were bloated (≈350 MiB) and often pulled the wrong tag, causing downstream jobs to fail and costing us ~$1k/month in idle compute.

**Action**  
1. **Pin exact image tags** – switched from `latest` to immutable `<repo>:sha-<hash>` using ECR image scanning.  
2. **Leverage Amazon ECS + Fargate Spot** for training jobs, reducing cost by 40%.  
3. **Use AWS CodePipeline** with a “validate‑tag” stage that pulls the image, runs unit tests, and updates an SSM Parameter Store entry (`/ml/image/tag`).  
4. **Implement automated rollback**: if a job fails due to tag mismatch, CloudWatch alarms trigger a Lambda that reverts to the previous stable tag.

**Result**  
- Cut training‑job failures from 12 % to <0.5 %.  
- Saved $18k annually in compute and reduced mean time to recover (MTTR) by 70 %.  
- Improved deployment velocity: new models now reach production in 3 days vs. 7 days.

**Reflection**  
I owned the end‑to‑end pipeline, dived deep into container metadata, and introduced a data‑driven rollback policy—demonstrating **Ownership**, **Dive Deep**, and **Deliver Results** while learning that immutable images are non‑negotiable for production ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
