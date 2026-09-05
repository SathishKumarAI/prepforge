---
qid: ing_559f844a64__star__local
question: 'Explain: Daemon Set — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 314
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:13-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with installing the new monitoring agent across every node in our production cluster because we were losing critical metrics when nodes were added or removed.

**Task:**  
I had to deploy the agent reliably on all existing and future worker nodes without manual intervention, ensuring zero downtime for services and minimal overhead on the nodes.

**Action:**  
I chose a **DaemonSet**. I created a YAML manifest that defined a pod template containing the monitoring container with resource limits (200 MiB memory, 0.2 CPU). The DaemonSet controller automatically scheduled one pod per node. I added a `nodeSelector` to target only Linux nodes and an `imagePullPolicy: IfNotPresent` to reduce pull times. For upgrades I used rolling updates by setting `maxUnavailable: 1`, so the cluster stayed healthy while pods were replaced. I also configured a `livenessProbe` that pinged the agent’s health endpoint, ensuring any failed instance was restarted automatically.

**Result:**  
After deployment, all 45 nodes had the agent running within minutes of the DaemonSet creation. We saw a 98 % reduction in missing metrics and no service interruptions during node scaling events. I learned how DaemonSets provide declarative, automated node‑level deployments and how fine‑tuning probes and resource requests can keep cluster stability high while adding new tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
