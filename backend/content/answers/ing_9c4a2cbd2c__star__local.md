---
qid: ing_9c4a2cbd2c__star__local
question: 'Explain: Controller node — DevOps-SRE/5_ClusterCoordination/ControllerNode.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 334
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:38-05:00'
sources: []
---

**Situation** – While leading the migration of our micro‑services platform from a legacy monolith to a production‑grade Kubernetes cluster, I noticed that the API gateway pods were frequently restarting and the deployment pipeline was stalling at “Deployment in progress” for over 10 minutes.

**Task** – I had to identify the root cause of these restarts, ensure stable rollouts for new releases, and reduce deployment latency by at least 30 %.

**Action** – I first inspected the cluster’s controller manager logs. The `kube-controller-manager` was mis‑configured: its `--cluster-name` flag pointed to a stale DNS entry, causing the leader election mechanism to fail and repeatedly trigger pod evictions. I updated the manifest in the GitOps repo, set `--leader-elect=true`, and added a dedicated node taint (`node-role.kubernetes.io/critical-apps=true`) so only controller pods could schedule there. Then I rolled out the change with a Canary update, monitored metrics via Prometheus (deployment success rate, pod restart count), and used Helm hooks to pause deployments until all controllers were healthy.

**Result** – After the fix, deployment times dropped from 12 minutes to 7 minutes, and pod restarts fell below 0.5 % per day. I learned that a single mis‑configured controller node can cascade into cluster instability, and that isolating critical control plane components on dedicated nodes dramatically improves reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
