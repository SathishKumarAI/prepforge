---
qid: ing_06f3157c3d__aws__local
question: 'Explain: Scan images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:40-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a micro‑service platform to ECS on Fargate. The team was shipping 200+ Docker images nightly, and a security audit flagged that we were using out‑of‑date base layers and not scanning for vulnerabilities before deployment.

**Action (Technical Design)**  
1. **Adopt AWS CodeBuild + ECR Scan** – I configured every push to trigger a CodeBuild project that pulls the image, runs `docker scan` (Snyk) and pushes the scanned result to Amazon ECR’s built‑in vulnerability scanner.  
2. **Immutable Tags & Policy Enforcement** – Images were tagged with SHA256 digests; an ECR repository policy blocked any image that scored >1 critical CVE from being pulled by ECS tasks.  
3. **Parallel Build & Cache** – Leveraged CodeBuild’s caching of base layers to cut build time 40 % and added a `cache: true` flag in the Dockerfile for reproducible builds.  
4. **Cost Optimization** – Switched to Fargate Spot for non‑critical tasks, reducing compute spend by 30 %.  

**Result (Data‑driven)**  
- Vulnerability incidence dropped from 12/200 images per sprint to **0** in the next quarter.  
- Deployment time decreased from 15 min to 9 min, freeing 2 person‑weeks/month for feature work.  
- Overall infra cost fell by **$18k annually**.

**Reflection (Bar‑raiser cues)**  
I took full ownership of the pipeline, dived deep into Dockerfile layers, and iterated on policy rules after a failure when an image slipped through due to a mis‑configured tag. The outcome proved that a disciplined scan workflow not only protects customers but also delivers measurable business value.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – ensuring our services are secure for end users.  
- **Ownership & Dive Deep** – architecting and refining the CI/CD pipeline myself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
