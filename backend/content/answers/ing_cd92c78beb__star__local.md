---
qid: ing_cd92c78beb__star__local
question: 'Explain: Types of Failover Configurations: Active-Active vs Active-Passive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 331
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:17-05:00'
sources: []
---

**Situation**  
When we rolled out the real‑time fraud detection model for a payment gateway, our SLA required 99.9 % uptime and sub‑50 ms latency across all regions.

**Task**  
I had to design the high‑availability architecture that could keep the inference service live during traffic spikes or node failures without compromising performance.

**Action**  
I compared two options: an *active‑passive* setup where a standby replica only came online after the primary failed, and an *active‑active* cluster that ran multiple replicas in parallel. I chose active‑active, configuring Kubernetes with a StatefulSet of three pods per region, each running TensorFlow Serving behind a shared‑nothing load balancer (NGINX Ingress). We used a health‑check probe to detect any pod lagging >10 ms and automatically drained it from the pool while the remaining replicas absorbed traffic. To avoid model drift, I implemented a blue‑green deployment pipeline that updated all nodes simultaneously with zero downtime.

**Result**  
The active‑active design cut our mean response time from 48 ms to 32 ms and reduced outage incidents by 95 % compared to the legacy passive approach. I learned that while active‑passive is simpler, an active‑active cluster offers measurable latency gains and resilience when traffic patterns are unpredictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
