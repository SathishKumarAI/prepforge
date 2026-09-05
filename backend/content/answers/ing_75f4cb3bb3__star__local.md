---
qid: ing_75f4cb3bb3__star__local
question: 'Explain: Benefits of Load Balancing — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 320
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:05-05:00'
sources: []
---

**Situation:**  
During a production rollout for our recommendation engine, we noticed that the inference latency spiked during peak traffic (10‑AM to 2‑PM) and our SLA of <200 ms was breached in 35% of requests.

**Task:**  
I needed to design a scalable, fault‑tolerant inference pipeline that kept latency within SLA while handling sudden traffic surges without over‑provisioning GPU resources.

**Action:**  
I introduced a Kubernetes Ingress controller with an NGINX‑based load balancer. The LB was configured with round‑robin and least‑conn strategies, and I added health checks on each model pod’s `/healthz` endpoint. To smooth spikes, I enabled session affinity via sticky cookies so that returning users hit the same GPU node, reducing cold‑start overhead. I also set up horizontal pod autoscaling based on CPU/GPU utilization metrics from Prometheus, allowing new pods to spin up automatically when thresholds exceeded.

**Result:**  
Post‑deployment, average inference latency dropped from 350 ms to 115 ms, and SLA compliance rose from 65% to 98%. The system handled a 2× traffic spike during a product launch without manual intervention. I learned that combining smart routing with autoscaling not only improves performance but also optimizes cost by avoiding over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
