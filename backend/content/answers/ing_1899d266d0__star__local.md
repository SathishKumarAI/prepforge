---
qid: ing_1899d266d0__star__local
question: 'Explain: And you can also it''s also a — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 348
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:05-05:00'
sources: []
---

**Situation**  
When I joined Google as a Machine‑Learning Engineer, my team was tasked with scaling the recommendation engine for YouTube Shorts from 10 M to 100 M daily active users while keeping latency under 50 ms.

**Task**  
I needed to redesign the inference pipeline so it could serve millions of predictions per second, reduce memory footprint, and enable rapid A/B testing of new models without downtime.

**Action**  
First, I profiled the existing TensorFlow Serving stack with Perfetto and identified CPU‑bound bottlenecks in the feature extraction stage. I refactored that part to use a lightweight C++ inference engine (TensorRT) and replaced the monolithic model with an ensemble of 32 smaller models served via gRPC multiplexing. To ensure zero‑downtime rollouts, I introduced a blue/green deployment pattern coupled with a custom traffic‑shifting controller in Kubernetes that gradually warmed new replicas based on real‑time latency metrics. Finally, I automated the entire pipeline—data ingestion, model training, and deployment—with GitHub Actions and Terraform, integrating Slack alerts for any degradation over 5 ms.

**Result**  
The system handled 120 M requests per second with an average inference time of 42 ms, a 30% reduction in GPU usage, and 99.9% uptime during rollout. I learned that micro‑optimizing at the data path level can outweigh large‑scale hardware scaling, and that rigorous observability is essential for safely evolving production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
