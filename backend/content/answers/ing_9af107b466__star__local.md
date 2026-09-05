---
qid: ing_9af107b466__star__local
question: 'Explain: Active-Active policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 334
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:09-05:00'
sources: []
---

**Situation:**  
In my last role as a senior data engineer at a fintech startup, we were launching a real‑time fraud detection microservice that had to be online 24/7. Our quarterly SLA demanded 99.999% uptime, and any outage meant thousands of dollars in lost revenue.

**Task:**  
I was tasked with designing the high‑availability architecture so the service could sustain both planned maintenance and unexpected failures without downtime—essentially implementing an active‑active policy across two data centers.

**Action:**  
First, I set up identical Kubernetes clusters in AWS us-east-1 and eu-west-1. Using Consul for service discovery, I enabled cross‑region load balancing with Route 53 latency routing. Each cluster ran the same container image, but I introduced a global distributed cache (Redis Cluster) to keep state consistent. For fault tolerance, I added automatic failover via Kubernetes’ StatefulSets and employed health checks that would trigger traffic shifting only after data replication lag stayed below 200 ms. Finally, I automated blue‑green deployments with ArgoCD, ensuring zero‑downtime updates.

**Result:**  
The new active‑active setup reduced our outage incidents from 3 per month to zero over the next six months, keeping uptime at 99.9999%. We also cut maintenance windows by 70 %, and the team learned that coupling consistent caching with cross‑region load balancing is key to truly active availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
