---
qid: ing_04e06869fc__star__local
question: 'Explain: So, in terms of hosting, we we — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 331
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:42-05:00'
sources: []
---

**Situation:**  
During my senior year I interned at a mid‑size video platform that was struggling with peak traffic spikes during live sports events. The platform’s single‑region deployment on AWS EC2 had hit its CPU ceiling, causing 4‑second buffering delays for 30% of viewers.

**Task:**  
I was asked to design a scalable hosting solution that could handle 10× the concurrent users while keeping latency under 1 s and minimizing cost overruns.

**Action:**  
First, I mapped traffic patterns using CloudWatch and identified that most load came from a handful of “hot” regions. I proposed a multi‑region Kubernetes cluster with Istio service mesh for fine‑grained traffic routing. Using AWS Fargate, I containerized the transcoding microservice and leveraged Spot Instances for cost savings. I implemented horizontal pod autoscaling based on CPU+memory thresholds, and added a CDN (CloudFront) edge cache to offload static assets. Finally, I set up a blue‑green deployment pipeline with ArgoCD to ensure zero‑downtime rollouts.

**Result:**  
After launch, the platform handled 12 k concurrent viewers during a live match with average latency of 0.8 s, and overall cost dropped by 28% compared to the legacy EC2 setup. I learned that combining container orchestration, intelligent scaling policies, and edge caching is key for video‑heavy workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
