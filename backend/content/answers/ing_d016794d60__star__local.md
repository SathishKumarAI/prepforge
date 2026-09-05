---
qid: ing_d016794d60__star__local
question: 'Explain: Vertical vs. Horizontal Scaling — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 370
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:30-05:00'
sources: []
---

**Situation:**  
In my last role as a ML engineer at a fintech startup, our fraud‑detection model was deployed in a Kubernetes cluster that served about 4 M transactions per day. The latency requirement was <50 ms, but the CPU usage on each node hit 95% during peak hours, causing occasional timeouts.

**Task:**  
I had to decide whether to scale the existing nodes (vertical scaling) or add more pods (horizontal scaling), while keeping costs under a $15K/month budget and maintaining data locality for the model’s feature store.

**Action:**  
First, I profiled the inference pipeline with PyTorch and identified that CPU was the bottleneck; GPU memory usage was low. I compared two options:  
1) **Vertical** – upgrade each node to 32 vCPU/128 GB RAM instances. This would reduce pod count but increase per‑instance cost by 40%.  
2) **Horizontal** – add 8 more pods on the current nodes, using a shared Redis cache for feature lookups and employing autoscaling based on CPU thresholds. I also re‑partitioned the feature store to avoid cross‑node traffic. After running a load test with Locust, the horizontal approach kept latency under 30 ms at 6 M TPS.

**Result:**  
We deployed the horizontal scaling strategy, cutting inference latency by 35% and keeping monthly infra costs within $12K. I learned that for CPU‑bound ML workloads, horizontal scaling often yields better elasticity, but careful state management (e.g., Redis caching) is critical to avoid new bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
