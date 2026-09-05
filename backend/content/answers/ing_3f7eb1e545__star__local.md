---
qid: ing_3f7eb1e545__star__local
question: 'Explain: 👎 Disadvantages of K8s — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 298
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:10-05:00'
sources: []
---

**Situation:**  
At my previous company we migrated a legacy monolith to microservices on Kubernetes to enable faster releases. The new stack was promising, but the cluster kept hitting CPU limits and our deployment pipeline stalled during rollouts.

**Task:**  
I had to identify why the Kubernetes setup was underperforming and propose a solution that balanced cost, reliability, and speed of delivery.

**Action:**  
First, I enabled Prometheus monitoring and collected metrics on pod resource usage, queue times, and node health. The data revealed that many pods were oversubscribed (request > limit) and that the default kubelet `--kube-reserved` settings left too little headroom for system daemons. I redefined resource requests/limits using a percentile‑based approach, added horizontal pod autoscaling thresholds, and switched from the default scheduler to a custom taint‑toleration policy to keep critical infrastructure pods isolated. I also introduced Cluster Autoscaler with tighter scaling windows to avoid overprovisioning.

**Result:**  
CPU saturation dropped from 92 % to 58 %, deployment times improved by ~35 %, and we cut on‑prem VM usage by 20 %. The exercise taught me that Kubernetes’ flexibility can be a double‑edged sword; careful resource tuning and observability are essential to avoid the hidden cost of “over‑kube‑ing.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
