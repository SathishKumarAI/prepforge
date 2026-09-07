---
qid: ing_4f34e99ef2__aws__local
question: 'Explain: II. Dependencies — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:17-05:00'
sources: []
---

**Situation / Task**

While leading a data‑science team for an ad‑tech startup, we needed to move from a monolithic training pipeline to a cloud‑native architecture that could scale to 200 × more models per day without breaking the CI/CD cycle.

**Action**

I applied the *12‑Factor App* principles to the ML workflow, treating each model as a “service.”  
1. **Dependencies** – I used Docker images with explicit `requirements.txt` files and pinned versions, avoiding implicit system libraries that caused “works on my machine” failures.  
2. **Config** – All runtime parameters (S3 buckets, Redshift credentials) were injected via environment variables, enabling separate dev/prod stacks.  
3. **Backing services** – I decoupled training from storage by using Amazon SageMaker Pipelines for orchestration and S3 + DynamoDB as external services; the code never hard‑coded endpoints.

I built a CI pipeline in CodePipeline that, on every commit, spun up a fresh container image, fetched the latest dependencies, ran unit tests, and triggered a SageMaker training job. The process took 5 min per model versus the previous 45 min, and we now hit **99.9% deployment success** across all models.

**Result**

- Training throughput increased from ~10 to ~2000 jobs/day (20×).  
- Deployment failures dropped from 12% to <1%.  
- Cost per training job fell by 35% due to better resource allocation and spot instance usage.

**Reflection**

I learned that *dependency isolation* is the linchpin of scalability; without it, scaling is brittle. I also realized the value of treating ML pipelines as first‑class services, aligning with AWS best practices (SageMaker, ECS). This approach embodies **Ownership**, **Dive Deep**, and **Deliver Results**—the very leadership principles Amazon expects from a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
