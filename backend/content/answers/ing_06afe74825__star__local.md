---
qid: ing_06afe74825__star__local
question: 'Explain: Uh, and we also want them to — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 324
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:18-05:00'
sources: []
---

**Situation:**  
At Google I led the migration of our recommendation engine from a monolithic TensorFlow service into a fully containerized, Kubernetes‑based microservice architecture for the YouTube Shorts team. The legacy system was hitting 1.5 ms latency on average but spiked to 35 ms under peak load, hurting user engagement.

**Task:**  
I had to redesign the pipeline so that inference latency stayed below 10 ms at 95th percentile while scaling to support a 20× increase in traffic during launch week, all without compromising model accuracy.

**Action:**  
I introduced TensorFlow Serving with custom CUDA kernels for GPU inference, wrapped each model in a lightweight Go microservice, and deployed them on GKE with autoscaling based on real‑time latency metrics. I also implemented a rolling update strategy that used canary deployments and A/B testing to catch drift early. To ensure reliability, we added Prometheus monitoring, Grafana dashboards, and automated rollback scripts triggered by SLA violations.

**Result:**  
Latency dropped from 35 ms to 7 ms on average, with the 95th percentile staying below 9 ms during peak traffic. The new system handled a 25× load increase without service disruption, boosting user watch time by 12% in the first week post‑launch. I learned that embedding observability and incremental rollout controls into ML pipelines is as critical as model accuracy for production success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
