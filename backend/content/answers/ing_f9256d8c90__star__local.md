---
qid: ing_f9256d8c90__star__local
question: 'Explain: Mutable Infrastructure — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 283
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:43-05:00'
sources: []
---

**Situation:**  
At my previous SaaS startup we ran a nightly training pipeline for recommendation models on AWS. The pipeline spun up EC2 instances, manually patched them with GPU drivers, installed libraries, and then shut them down—each run had a fresh “bare‑metal” environment.

**Task:**  
I was tasked with reducing the mean time to recover (MTTR) after failures and eliminating the manual steps that caused drift between environments.

**Action:**  
I introduced immutable infrastructure by containerizing the training stack with Docker, packaging all dependencies into a single image. The images were built in CI/CD, signed, and pushed to ECR. Production launches now use ECS Fargate tasks that pull the latest image; any change requires a new image version, not a patched instance. I also added infrastructure-as-code (Terraform) for networking and IAM roles so that the entire stack is reproducible.

**Result:**  
Deployment time dropped from 45 minutes to under 5 minutes, MTTR fell by 70%, and we saw no more “works on my machine” incidents. The team learned that immutable builds eliminate configuration drift and enable true versioning of ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
