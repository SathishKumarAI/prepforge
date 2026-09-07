---
qid: ing_368ce39cc1__aws__local
question: 'Explain: Use the least privileged user — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:47-05:00'
sources: []
---

**Situation & Task**  
I was tasked to secure a production ML pipeline that pulled models from **Amazon ECR**, built them in **ECS‑Fargate** containers, and served predictions via an API behind **ALB**. The last audit revealed several over‑privileged IAM roles and insecure Dockerfiles—risking data leaks and costly compute sprawl.

**Action**  
1. **Least Privilege IAM** – Created a dedicated *ml‑pipeline* role with only `ecr:GetDownloadUrlForLayer`, `ecs:RunTask`, and `logs:*`. Replaced the old “admin” role in all task definitions.  
2. **Docker Best Practices** – Adopted 9 rules (use minimal base images, multi‑stage builds, non‑root user, immutable tags, scan for vulnerabilities, lock down network access, set resource limits, enable read‑only volumes, audit logs). Updated Dockerfiles to use `python:3.10-slim` and a dedicated `mluser`.  
3. **Infrastructure** – Moved to **ECS‑Fargate** with *task placement constraints* ensuring containers run only on instances tagged `ml-prod`. Enabled *service auto‑scaling* tied to CPU & request latency.  

**Result**  
- Reduced IAM permissions by 85 %, eliminating a high‑severity vulnerability found in the audit.  
- Docker image size shrank from **1.8 GB** to **420 MB**, cutting Fargate bill by ~30 % (≈$12k/yr).  
- Container start time improved 2×, lowering average request latency from **450 ms** to **230 ms**.

**Learnings & Ownership**  
I documented the new IAM policy and Docker checklist in Confluence, then led a workshop for developers—ensuring knowledge transfer and fostering a culture of *ownership* and *continuous improvement*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
