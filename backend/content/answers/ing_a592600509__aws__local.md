---
qid: ing_a592600509__aws__local
question: 'Explain: Pulling a serving image — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 567
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:24-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that needed to process ~5 M requests/day while keeping latency <50 ms. The team had built the model in TensorFlow and we chose **TensorFlow Serving** inside Docker containers on ECS Fargate.

**Action (Dive Deep + Bias for Action)**  
1. **Container Build** – I created a multi‑stage Dockerfile that pulls `tensorflow/serving:2.10` as the base, copies the exported SavedModel (`model.tar.gz`) into `/models/recommendation`, and exposes port 8500.  
2. **Deployment** – Defined an ECS task with *Task CPU* 512 vCPU and *Memory* 1 GiB; used `awsvpc` networking to enable service‑mesh level metrics.  
3. **Scaling & Availability** – Configured Application Load Balancer (ALB) with a target group using the container port, set *Target Health Check* on `/v1/models/recommendation/metadata`. Added an Auto Scaling policy that scales out when CPU >70% or request latency >30 ms, and scales in after 10 min of low load.  
4. **Observability** – Emitted Prometheus metrics via the `tensorflow_serving` exporter; visualized in CloudWatch dashboards. Tracked request count, latency, and error rate.

**Result (Deliver Results)**  
After launch we saw a *30%* reduction in average latency (from 78 ms to 52 ms) and handled peak traffic spikes of 10× without outages. Cost per inference dropped by **12 %** thanks to Fargate’s pay‑per‑second model.

**Reflection (Invent & Simplify + Learn from Failure)**  
The initial rollout hit a cold‑start issue because the image was ~1 GB. I introduced a *prewarm* Lambda that pinged the ALB at 5 min intervals, cutting cold starts to <10 ms and eliminating an early SLA breach.

---

**Bar‑raiser takeaways:**  
- **Ownership:** I owned the full deployment cycle from Dockerfile to monitoring.  
- **Dive Deep:** Detailed scaling rules, metric thresholds, and cost analysis show depth.  
- **Quantified Impact:** 30% latency drop & 12% cost savings are concrete metrics.  
- **Learning:** Identifying cold‑start as a failure point and fixing it demonstrates iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
