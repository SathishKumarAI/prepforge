---
qid: ing_1a56d111b4__star__local
question: 'Explain: Um, if you can''t do that, then — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 322
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:09-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team on a recommendation engine for YouTube Shorts, the model’s latency hit 120 ms per request, double our SLA of 60 ms, and we were under pressure to launch before the holiday peak.

**Task** – Reduce inference time without sacrificing accuracy, scale to millions of concurrent users, and maintain reproducibility across GPU clusters.

**Action** – I orchestrated a three‑phase approach. First, I introduced TensorRT for model optimization, pruning low‑importance weights and quantizing from 32‑bit FP to INT8, cutting raw FLOPs by 35 %. Next, we refactored the pipeline into microservices on Kubernetes, using gRPC with batch requests of 64 samples to amortize overhead. Finally, I set up a CI/CD pipeline that automatically retrains on new data every 12 h and deploys via canary releases, ensuring zero‑downtime rollouts. We also added Prometheus metrics for per‑service latency and integrated alerting in PagerDuty.

**Result** – Latency dropped to 48 ms, meeting SLA with a safety margin, while AUC remained at 0.93. Traffic handled increased by 2× during peak without any infrastructure cost increase. I learned that marrying low‑level optimization (TensorRT) with modern cloud patterns (K8s microservices and CI/CD) is essential for production ML systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
