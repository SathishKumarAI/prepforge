---
qid: ing_452861ef4a__think__local
question: 'Explain: High Availability — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 518
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:07:28-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
*Assumptions:*  
- The audience knows basic ML pipeline terms (data ingestion, model training, inference).  
- “High availability” refers to keeping services up during failures, not just performance or cost.  
- We’re focusing on system‑design patterns rather than implementation details.

**2️⃣ Adopt a layered mental model**  
1. **Architecture layers**: data layer → processing layer → serving layer → client layer.  
2. **Availability concepts**: redundancy, failover, health checks, graceful degradation.  
3. **ML‑specific touchpoints**: training jobs, model registry, inference endpoints.

**3️⃣ Step‑by‑step reasoning**  

| Layer | Redundancy strategy | Health monitoring | Failover mechanism |
|-------|---------------------|-------------------|--------------------|
| Data ingestion (Kafka/ SQS) | Multiple brokers / partitions | Consumer lag metrics | Re‑route to standby broker |
| Feature store | Replicated DB + cache | Query latency & error rates | Switch to read‑only replica |
| Training cluster (K8s/EKS) | Autoscaling + spot + on‑prem mix | Job status, pod health | Reschedule job on another node |
| Model registry (S3/DB) | Versioned objects + mirrors | Object integrity checks | Pull from alternate bucket |
| Serving endpoints (TensorFlow Serving / TorchServe) | Horizontal pods behind load balancer | Liveness/readiness probes | Route to healthy pod set |
| Client API gateway | Geo‑redundant edge nodes | Request success rate | Failover to secondary region |

**4️⃣ Common traps to avoid**  
- *Single point of truth:* Don’t rely on one storage bucket for the model artifact.  
- *Over‑engineering latency:* Adding replicas everywhere can hurt inference speed; balance read/write patterns.  
- *Ignoring data drift:* High availability of training pipelines doesn’t solve stale models—monitor performance metrics.  

**5️⃣ Sanity‑check & verbalize**  
1. Walk through a failure scenario (e.g., primary broker crashes).  
2. Verify each layer has a backup path and health check that triggers the failover.  
3. Ask: “If we add another region, what new latency or cost trade‑offs appear?”  

By iterating this checklist, you’ll build an ML system that stays online even when parts of it go down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
