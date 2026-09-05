---
qid: ing_9596075140__star__local
question: 'Explain: V. Build, Release, Run — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:58-05:00'
sources: []
---

**Situation** – At my last role I was tasked with deploying a recommendation‑engine model to production for a retail client that had 15 k daily users. The existing monolith made it impossible to roll out new models without downtime.

**Task** – I needed to convert the model into a 12‑factor compliant microservice, ensuring fast build, reliable release, and seamless run in a Kubernetes cluster while keeping latency under 200 ms.

**Action** – I containerized the Python service with Docker, using a multi‑stage build that cached pip installs. The “build” phase produced a reproducible image tagged by git SHA. For “release,” I set up a GitHub Actions pipeline that pushed the image to ECR and updated the Helm chart with the new tag; the deployment used immutable releases so rollbacks were instant. In the “run” stage, the container was deployed to GKE with sidecar Envoy for traffic shaping. I exposed metrics via Prometheus and set up a Canary rollout policy in ArgoCD, which automatically promoted 5 % of traffic once health checks passed.

**Result** – Deployment time dropped from 30 min to under 3 min, zero‑downtime rollouts became routine, and we reduced A/B testing latency by 25 %. I learned how the Build‑Release‑Run separation eliminates configuration drift and gives us true continuous delivery for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
