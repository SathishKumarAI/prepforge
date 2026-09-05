---
qid: ing_cb1418a86c__star__local
question: 'Explain: Active-passive — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 366
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:09-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with deploying a fraud‑detection model that had to stay online 24/7 for a financial services client. The production environment used Kubernetes on AWS and we were required to keep the latency below 100 ms even during traffic spikes.

**Task**  
Implement an active‑passive architecture so that if the primary inference node failed, traffic would automatically switch to a standby cluster without any downtime or data loss.

**Action**  
I set up two identical EKS clusters: one active and one passive. Using AWS Route 53 health checks I routed 100 % of traffic to the active cluster via an NLB with weighted routing. The passive cluster was kept idle but had all containers pre‑loaded, using a Docker image tagged with the same model version. I added a lightweight sidecar that continuously pulled model updates from S3 and performed a health check against the inference endpoint. When the active cluster’s readiness probe failed, Route 53 automatically shifted traffic to the passive node. I also wrote an automated script in Terraform to spin up new clusters when needed and integrated CloudWatch alerts for any latency increase above 120 ms.

**Result**  
After deployment, we achieved zero‑downtime during a planned maintenance window that lasted three hours. The latency stayed under 90 ms on both clusters, and our SLA of 99.99 % uptime was maintained. I learned how to combine Kubernetes readiness probes, Route 53 weighted routing, and automated Terraform provisioning to create a resilient ML serving pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
