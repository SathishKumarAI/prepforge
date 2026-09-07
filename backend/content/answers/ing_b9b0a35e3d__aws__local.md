---
qid: ing_b9b0a35e3d__aws__local
question: 'Explain: Multi-Stage builds — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 486
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:39-05:00'
sources: []
---

**Context (S)**  
When I was leading the migration of our recommendation engine from on‑prem to a fully managed **AWS EKS** cluster, we discovered that the container images were bloated—over 200 MB each—and pulling them took >30 s, throttling deployment velocity and inflating ECR storage costs by ~15 % monthly.

**Action (T)**  
I introduced **multi‑stage Docker builds** following nine best practices:

1. **Base image minimization** – use `amazonlinux:2` instead of Ubuntu.  
2. **Layer caching** – separate dependency installs from application code to reuse layers during incremental changes.  
3. **Explicit COPY/ADD ordering** – copy only required files per stage.  
4. **Multi‑arch support** – build for `amd64` and `arm64`.  
5. **Use of `.dockerignore`** – exclude tests, docs, and local configs.  
6. **Leverage `--target`** for production builds.  
7. **Security hardening** – set non‑root user in final stage.  
8. **Image signing** with AWS Signer.  
9. **Automated scanning** via Amazon ECR image scanning.

We built a new Dockerfile, pushed to **ECR**, and updated the Helm chart to pull the signed image. The build pipeline ran on **CodeBuild** (30 s per build) instead of 10 min on our legacy Jenkins setup.

**Result (R)**  
- Image size dropped from **220 MB → 45 MB** (≈80 % reduction).  
- Pull time reduced from **>30 s → 4 s**, cutting deployment latency by 86 %.  
- Monthly ECR storage cost fell from $1,200 to $240.  
- Rollback times during A/B tests halved due to faster image delivery.

**Reflection**  
I took full ownership of the build pipeline and iterated until the metrics met our SLAs. By diving deep into layer composition and leveraging AWS managed services (ECR, CodeBuild, Signer), I balanced cost, security, and scalability—exactly what Amazon expects from a high‑performing engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
