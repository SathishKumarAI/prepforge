---
qid: ing_964daabb62__star__local
question: 'Explain: Recreate — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 306
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:31-05:00'
sources: []
---

**Situation** – At my previous company we had an A/B‑testing pipeline for a recommendation model that ran on EKS. The old rollout was a blunt “blue/green” which caused 15 % downtime and slow feedback loops for data scientists.

**Task** – I needed to replace the monolithic deployment with a progressive strategy (canary + rolling) so that new model versions could be tested against live traffic, monitor latency, and roll back instantly if metrics dipped below SLA thresholds.

**Action** – First, I defined Kubernetes Deployment objects with `strategy.type: RollingUpdate` and set `maxSurge=1`, `maxUnavailable=0`. Then I used Argo Rollouts to add a canary step that shifted 10 % of traffic to the new pod after passing CPU‑usage and request‑latency checks. I scripted automated Prometheus alerts to trigger a rollback if latency exceeded 200 ms or error rate >2 %. The rollout was integrated into our CI/CD pipeline via GitHub Actions, ensuring every model commit triggered a Helm chart upgrade.

**Result** – Deployment time dropped from 45 minutes to 12 minutes, and we reduced production incidents by 60 %. I learned that coupling Kubernetes’ native rolling updates with observability tooling turns deployments into low‑risk experiments rather than hard cuts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
