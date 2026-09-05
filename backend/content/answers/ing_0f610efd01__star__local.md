---
qid: ing_0f610efd01__star__local
question: 'Explain: Container Orchestration Service — DevOps-SRE/2_ContainerOrchestration
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 322
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:08-05:00'
sources: []
---

**Situation** – At my last role I was tasked with migrating our monolithic Java application to a micro‑service architecture on Kubernetes. The existing deployment pipeline had manual docker builds and hand‑rolled scaling scripts, causing outages during traffic spikes.

**Task** – Build an automated container orchestration workflow that would handle rolling updates, self‑healing, and autoscaling for 12 services while keeping the mean time to recovery under two minutes.

**Action** – I set up a GitHub Actions CI pipeline that built Docker images, ran unit tests, and pushed to our ECR registry. In Kubernetes, I defined Helm charts with liveness/readiness probes and used Kustomize overlays per environment. For autoscaling, I deployed the Cluster Autoscaler on GKE and configured HPA based on CPU/memory thresholds. To guarantee zero‑downtime, I implemented canary releases via Istio’s traffic routing rules and automated rollback if a 5xx rate exceeded 2%. I also added Prometheus/Grafana dashboards for real‑time health metrics.

**Result** – The rollout completed in under an hour with no service disruption; post‑migration we saw a 35% reduction in incident tickets related to scaling issues, and the MTTR dropped from 15 minutes to 1.5 minutes. I learned how declarative infrastructure coupled with robust monitoring turns container orchestration into a resilient, developer‑friendly platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
