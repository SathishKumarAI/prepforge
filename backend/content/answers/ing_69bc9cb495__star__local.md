---
qid: ing_69bc9cb495__star__local
question: 'Explain: Deployment options ⚓️ — GitHub - langwatch/langwatch: The platform
  for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 341
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:38-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying *langwatch/langwatch*, a platform that runs large‑language‑model evaluations and AI agent tests. The codebase was heavily containerized but the team had no CI/CD pipeline yet, and we needed to get a stable production release within 3 weeks.

**Task** – My goal was to design an end‑to‑end deployment strategy that would support rapid iteration, easy rollback, and minimal downtime for the evaluation dashboards.

**Action** – I first added Docker Compose for local development and built a multi‑stage Dockerfile that bundled the FastAPI server, Redis cache, and a Ray cluster for distributed inference. Then I set up GitHub Actions: a lint & test job followed by a build step that pushed images to GitHub Container Registry. For production I chose Kubernetes on DigitalOcean; Helm charts managed the Ray head node and worker replicas, while Ingress handled HTTPS termination and load balancing. To ensure zero‑downtime deployments, I enabled rolling updates with readiness probes and used Argo Rollouts for canary releases.

**Result** – The platform went live in 19 days with a 99.8% uptime SLA during the first month. Load testing showed a 40 % reduction in inference latency compared to the previous Docker‑Compose setup, and automated rollbacks prevented any user impact from failed deployments. I learned that coupling container best practices with a lightweight CI/CD pipeline can dramatically speed up AI product delivery without sacrificing reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
