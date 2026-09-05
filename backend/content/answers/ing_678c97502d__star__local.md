---
qid: ing_678c97502d__star__local
question: 'Explain: High availability — DevOps-SRE/2_ContainerOrchestration/ApacheMarathon&Mesos.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 339
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:59-05:00'
sources: []
---

**Situation** – In my last role we had a micro‑service stack that powered the payment gateway for a fintech client. A quarterly audit revealed that our SLA was slipping to 95 % uptime because one of the critical services kept crashing after rolling updates on Mesos clusters.

**Task** – I was tasked with redesigning the deployment pipeline to achieve 99.9 % availability, ensuring zero downtime during upgrades and automatic failover across data centers.

**Action** – First, I rewrote the Marathon app definition to use *Rolling Upgrade* with `maxLaunchDelaySeconds` set to 30s and `upgradeStrategy: {"type":"RollingUpdate"}` so that only a subset of instances would be updated at once. I added an external health‑check endpoint monitored by Marathon’s *Health Checks*, configured to kill pods that failed the probe after two consecutive failures. To spread risk, I deployed across two Mesos clusters in different availability zones and enabled *Cluster Federation* via Marathon’s `--cluster` flag. Finally, I scripted automated blue/green deployments using GitHub Actions that triggered new Marathon jobs only after all instances in the green cluster passed health checks.

**Result** – After implementation, our service uptime rose from 95 % to 99.94 %, and we eliminated any service interruption during updates. The exercise taught me how orchestration primitives like Marathon’s upgrade strategies and health checks can be combined with multi‑zone Mesos clusters to deliver true high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
