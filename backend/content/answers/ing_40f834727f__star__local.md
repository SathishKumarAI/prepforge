---
qid: ing_40f834727f__star__local
question: When will a load balancer (LB) will stop sending requests to a server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 370
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:23-05:00'
sources: []
---

**Situation:**  
During the launch of our new recommendation engine at an e‑commerce platform, we had three identical inference nodes behind a Kubernetes Ingress controller with an external NGINX load balancer. After a sudden traffic spike (≈30k QPS), one node started showing high CPU and memory usage while the others remained healthy.

**Task:**  
I needed to identify why the LB was still routing requests to the overloaded pod, determine when it would stop sending traffic, and restore even distribution without downtime.

**Action:**  
First, I enabled NGINX’s health‑check endpoint (`/healthz`) on each pod. The check returned 200 only if CPU <70% and memory <80%. I then configured a readiness probe in Kubernetes to fail the pod when those thresholds were breached, causing the kubelet to set the pod as “unready.” This automatically removed it from the Ingress load‑balancer pool. Next, I tweaked the LB’s `session_persistence` off and added a `max_concurrent_connections` limit of 500 per pod. Finally, I monitored the `/probe/readyz` logs to confirm the pod was drained before removal.

**Result:**  
The overloaded node was removed from routing within 12 seconds of hitting thresholds, preventing request failures. Traffic redistributed in under 30 seconds, keeping latency <120 ms. Post‑incident analysis showed a 35% reduction in CPU spikes and a 15% drop in error rate. I learned that combining readiness probes with LB health checks is the most reliable way to stop traffic to unhealthy servers without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
