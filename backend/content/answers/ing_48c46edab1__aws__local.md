---
qid: ing_48c46edab1__aws__local
question: 'Explain: Cloud ☁️ — GitHub - langwatch/langwatch: The platform for LLM
  evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 364
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:51-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, we had an in‑house LLM evaluation repo on GitHub (langwatch/langwatch) that was only running locally. The product team needed to run nightly sanity checks for every new model release and provide confidence scores to the ML Ops pipeline.

**Action**  
I **took ownership** of the CI/CD process, leveraging **AWS CodePipeline + CodeBuild** to spin up a **Fargate** container that pulls the repo, runs the evaluation scripts, and pushes results to an **S3 bucket**. I added **CloudWatch metrics** (evaluation time, accuracy delta) and triggered alerts when scores fell below 0.85. To keep costs low, I used **Spot Instances** for build jobs and scheduled them during off‑peak hours. For scalability, the evaluation service was stateless; we deployed it behind an **ALB** with auto‑scaling based on CPU usage.

**Result**  
- Reduced nightly run time from 4 h to **30 min** (75% faster).  
- Cut infrastructure spend by **$1,200/month**.  
- Achieved a 99.9% availability SLA for the evaluation pipeline.  

**Reflection**  
I learned that **“Dive Deep”** means questioning every assumption: why not use EC2? Why not Lambda? The trade‑off analysis clarified cost vs latency. I’ll keep iterating, adding model drift detection and integrating SageMaker Pipelines next quarter.

> *Leadership Principles*: Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
