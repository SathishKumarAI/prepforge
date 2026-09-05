---
qid: ing_d21276b382__star__local
question: 'Explain: Single Point of Failure — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:49-05:00'
sources: []
---

**Situation**  
While launching a real‑time fraud detection service for a fintech client, we deployed an inference cluster that all traffic routed through a single model‑serving node behind a load balancer. Within the first week we hit 60 % CPU saturation on that node and a latency spike of 250 ms, causing several high‑value transactions to be blocked.

**Task**  
I had to eliminate the single point of failure in the inference pipeline, keep latency below 100 ms, and preserve cost efficiency for an expected 10× traffic growth.

**Action**  
I re‑architected the system using Kubernetes with a StatefulSet of 3 replicas behind an NGINX ingress. I introduced model sharding: each replica hosts a subset of the feature‑engineered models (using ONNX Runtime), and the ingress uses a round‑robin + health‑check strategy. I added Prometheus/Grafana monitoring to track per‑replica CPU, memory, and inference time, and set up an autoscaler that spins up additional pods when latency >120 ms or QPS >2000. I also migrated the model storage to a shared EFS volume to avoid data duplication.

**Result**  
Latency dropped to 80 ms on average, even under peak load of 15k QPS. The system no longer failed at a single node and cost increased by only 12 % due to autoscaling efficiency. I learned that proactive sharding plus dynamic scaling is essential for ML inference reliability in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
