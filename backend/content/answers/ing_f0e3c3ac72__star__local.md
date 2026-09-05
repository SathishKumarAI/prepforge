---
qid: ing_f0e3c3ac72__star__local
question: 'Explain: Excluded — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 373
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:02-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we launched an AI‑driven fraud detection service that ran on a single Kubernetes cluster. Within the first month of production, we experienced a 12 % drop in transaction throughput because a node failure took down the inference pod, and our SLA was 99.9 %.  

**Task**  
I had to redesign the deployment so it could keep serving predictions even if any part of the infrastructure failed—achieving true high‑availability without blowing up costs or latency.  

**Action**  
First, I switched from a single‑replica pod to an autoscaling group with at least three replicas, using **Kubernetes Deployments** and **Horizontal Pod Autoscaler** tuned to CPU usage thresholds. Then I introduced a lightweight **Redis cache** as a read‑through layer so that, if the inference service hiccups, stale predictions could still be served for a few seconds. For stateful components (the model weights), I stored them in an S3 bucket and used **EFS** for shared access, ensuring every pod could load the latest version without network bottlenecks. Finally, I set up **Prometheus + Grafana** alerts to trigger automatic pod recreation when health checks failed.  

**Result**  
After deployment, we achieved 99.98 % uptime over three months and reduced mean time to recovery from 15 minutes to under 30 seconds. The system also handled a 35 % traffic spike during peak trading hours without any service degradation. I learned that true high‑availability in AI systems is as much about resilient architecture (replication, caching) as it is about monitoring and rapid failover automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
