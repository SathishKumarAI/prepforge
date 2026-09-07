---
qid: ing_471c037d3e__aws__local
question: 'Explain: Use environment variables — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 607
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:31-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our recommendation engine from an on‑prem cluster to an EKS‑based microservice architecture for the “ShopNow” e‑commerce platform. The goal was to cut deployment time by 70 % and eliminate configuration drift across dev, test, and prod.

**Action – Docker & Environment Variables**  
I introduced a **“nine‑point best‑practice checklist”** that centered on environment variables:

| # | Practice | AWS Service / Tool | Rationale |
|---|----------|--------------------|-----------|
| 1 | Keep images immutable (no config in layers) | ECR | Prevents stale secrets. |
| 2 | Use `.env` files for dev, `secretsmanager` or `parameter‑store` for prod | Secrets Manager / SSM Parameter Store | Centralized secret rotation. |
| 3 | Prefix variables with app name (e.g., `SHOPNOW_DB_URL`) | – | Avoid collisions in shared namespaces. |
| 4 | Validate env vars at container start | Entrypoint script + `dotenv` | Early failure, faster debugging. |
| 5 | Use `docker‑compose.override.yml` for dev overrides | Docker Compose | Keeps prod config in GitOps. |
| 6 | Avoid hard‑coding secrets in image build | BuildKit cache control | Reduces build time and security risk. |
| 7 | Leverage ECS task definitions to inject env vars | ECS Task Definition | Declarative, versioned configuration. |
| 8 | Use IAM roles for tasks instead of env‑var credentials | EKS IRSA | Least privilege. |
| 9 | Rotate env vars via CI/CD pipeline (GitHub Actions → CodePipeline) | AWS CodeBuild/CodeDeploy | Continuous delivery loop. |

**Result**  
- Deployment frequency rose from **1/day to 12/day** (10×).  
- Configuration drift incidents dropped from **5/month to <0.5/month**.  
- Mean time to recovery (MTTR) for config errors fell from **4 h to under 30 min**.

**Bar‑raiser takeaways**  
- **Ownership**: I owned the end‑to‑end migration and set measurable KPIs.  
- **Dive Deep**: The checklist distilled complex security & ops concerns into actionable items.  
- **Quantified Impact**: Concrete metrics on deployment cadence, drift reduction, and MTTR.  
- **Learning from Failure**: Early bugs in env handling taught us to validate at entry points; we documented the “fail‑fast” pattern for future teams.  

By anchoring to *Customer Obsession* (faster, more reliable recommendations) and *Ownership*, I delivered a robust, scalable Docker strategy that aligns with AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
